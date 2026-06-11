// ── Bug definitions — elemId matches IDs in demo/index.html ──────────────────
const BUGS = [
  { id: 1, elemId: 'bug-nav-typo',      label: 'Nav typo: "Prcing"',                type: 'Content' },
  { id: 2, elemId: 'bug-cta-overlap',   label: 'CTA button overlaps hero text',     type: 'Layout' },
  { id: 3, elemId: 'bug-get-started',   label: '"Get Started" button unresponsive', type: 'Functional' },
  { id: 4, elemId: 'bug-payment-field', label: 'Payment field accepts letters',     type: 'Payments' },
  { id: 5, elemId: 'bug-low-contrast',  label: 'Low-contrast text on white',        type: 'Accessibility' },
  { id: 6, elemId: 'bug-broken-image',  label: 'Broken image shows alt text',       type: 'Visual' },
  { id: 7, elemId: 'bug-chatbot',       label: 'Chatbot fires before user submits', type: 'AI / Functional' },
  { id: 8, elemId: 'bug-copyright',     label: 'Footer copyright: "© 2023"',        type: 'Content' },
];

const BASE_POINTS   = 120;
const MISCLICK_PEN  = 20;
const TIME_BONUS_PER_SEC = 5;
const GAME_DURATION = 60;

// ── State ────────────────────────────────────────────────────────────────────
let state = {
  score: 0,
  bugsFound: 0,
  streak: 0,
  bestStreak: 0,
  misclicks: 0,
  totalClicks: 0,
  timeRemaining: GAME_DURATION,
  gameActive: false,
};

const foundBugIds = new Set();
let timerInterval = null;

// ── DOM refs ─────────────────────────────────────────────────────────────────
const gameFrame       = document.getElementById('gameFrame');
const overlayContainer = document.getElementById('overlayContainer');
const misclickLayer   = document.getElementById('misclickLayer');
const hudBugsFound    = document.getElementById('hudBugsFound');
const hudProgressFill = document.getElementById('hudProgressFill');
const hudMultiplier   = document.getElementById('hudMultiplier');
const hudTimer        = document.getElementById('hudTimer');
const hudScore        = document.getElementById('hudScore');
const finishModal     = document.getElementById('finishModal');
const modalBugsFound  = document.getElementById('modalBugsFound');
const modalKeepPlaying = document.getElementById('modalKeepPlaying');
const modalFinish     = document.getElementById('modalFinish');
const finishBtn       = document.getElementById('finishBtn');

// ── Init ─────────────────────────────────────────────────────────────────────
function init() {
  const player = getPlayer();
  if (!player) {
    window.location.href = 'index.html';
    return;
  }

  // Pre-create overlay divs for each bug
  BUGS.forEach(bug => {
    const div = document.createElement('div');
    div.id = `overlay-${bug.id}`;
    div.className = 'bug-target';
    div.style.display = 'none';
    div.addEventListener('click', (e) => {
      if (!state.gameActive || foundBugIds.has(bug.id)) return;
      handleBugClick(bug, e);
    });
    overlayContainer.appendChild(div);
  });

  // Wheel forwarding so player can scroll the demo
  misclickLayer.addEventListener('wheel', (e) => {
    e.preventDefault();
    gameFrame.contentWindow.scrollBy({ top: e.deltaY, left: e.deltaX, behavior: 'auto' });
  }, { passive: false });

  // Misclick on non-bug area
  misclickLayer.addEventListener('click', (e) => {
    if (!state.gameActive) return;
    handleMisclick(e);
  });

  // Listen for bug positions from the demo iframe
  window.addEventListener('message', (e) => {
    if (e.data?.type === 'vaultly:positions') {
      updateOverlays(e.data.positions);
    }
  });

  // Start game when iframe is ready
  gameFrame.addEventListener('load', () => {
    state.gameActive = true;
    startTimer();
    // Ask the demo for positions immediately after load
    try {
      gameFrame.contentWindow.dispatchEvent(new Event('resize'));
    } catch (_) {}
  });

  updateHUD();
}

function getPlayer() {
  try {
    return JSON.parse(sessionStorage.getItem('bugbash_player') || 'null');
  } catch { return null; }
}

// ── Overlay positioning ───────────────────────────────────────────────────────
function updateOverlays(positions) {
  BUGS.forEach(bug => {
    const pos = positions[bug.elemId];
    const div = document.getElementById(`overlay-${bug.id}`);
    if (!div) return;

    if (!pos || foundBugIds.has(bug.id)) return;

    // Add a small padding so hit zone is slightly larger than the element
    const PAD = 4;
    div.style.display  = 'block';
    div.style.left     = (pos.left - PAD) + 'px';
    div.style.top      = (pos.top  - PAD) + 'px';
    div.style.width    = (pos.width  + PAD * 2) + 'px';
    div.style.height   = (pos.height + PAD * 2) + 'px';
  });
}

// ── Bug click ────────────────────────────────────────────────────────────────
function handleBugClick(bug, e) {
  state.totalClicks++;
  foundBugIds.add(bug.id);
  state.bugsFound++;
  state.streak++;
  if (state.streak > state.bestStreak) state.bestStreak = state.streak;

  const multiplier = getMultiplier(state.streak);
  const points = BASE_POINTS * multiplier;
  state.score = Math.max(0, state.score + points);

  // Hide and mark overlay
  const div = document.getElementById(`overlay-${bug.id}`);
  if (div) {
    div.classList.add('found');
    div.style.display = 'none';
  }

  // Pulse at click location
  showPulse(e.clientX, e.clientY);

  // Toast
  const label = multiplier > 1 ? `+${points} pts  ×${multiplier}` : `+${points} pts`;
  showToast(label, e.clientX, e.clientY, 'positive');

  updateHUD(true);

  if (state.bugsFound >= BUGS.length) {
    setTimeout(() => endGame('all-found'), 600);
  }
}

// ── Misclick ─────────────────────────────────────────────────────────────────
function handleMisclick(e) {
  state.totalClicks++;
  state.misclicks++;
  state.streak = 0;
  state.score = Math.max(0, state.score - MISCLICK_PEN);

  showToast(`-${MISCLICK_PEN} pts`, e.clientX, e.clientY, 'negative');
  showMisclickFlash();
  updateHUD();
}

// ── Timer ────────────────────────────────────────────────────────────────────
function startTimer() {
  timerInterval = setInterval(() => {
    state.timeRemaining--;
    updateHUD();
    if (state.timeRemaining <= 0) {
      clearInterval(timerInterval);
      endGame('timeout');
    }
  }, 1000);
}

// ── HUD ───────────────────────────────────────────────────────────────────────
function updateHUD(bumpMultiplier = false) {
  hudBugsFound.textContent = `${state.bugsFound} / 8`;
  hudProgressFill.style.width = `${(state.bugsFound / BUGS.length) * 100}%`;
  hudScore.textContent = state.score.toLocaleString();

  const m = getMultiplier(state.streak);
  hudMultiplier.textContent = `×${m}`;
  if (bumpMultiplier && m > 1) {
    hudMultiplier.classList.remove('bump');
    void hudMultiplier.offsetWidth; // reflow to restart animation
    hudMultiplier.classList.add('bump');
  }

  const t = state.timeRemaining;
  const mins = Math.floor(t / 60);
  const secs = t % 60;
  hudTimer.textContent = `${mins}:${String(secs).padStart(2, '0')}`;
  hudTimer.classList.toggle('warn',   t <= 15 && t > 8);
  hudTimer.classList.toggle('danger', t <= 8);
}

function getMultiplier(streak) {
  if (streak >= 6) return 3;
  if (streak >= 3) return 2;
  return 1;
}

// ── End game ─────────────────────────────────────────────────────────────────
function endGame(reason) {
  if (!state.gameActive) return;
  state.gameActive = false;
  clearInterval(timerInterval);
  finishModal.classList.remove('active');

  const correctClicks = state.bugsFound;
  const totalClicks   = state.totalClicks;
  const accuracy      = totalClicks > 0
    ? Math.round((correctClicks / totalClicks) * 100)
    : 100;
  const timeBonus = Math.max(0, state.timeRemaining) * TIME_BONUS_PER_SEC;
  const finalScore = Math.max(0, state.score + timeBonus);

  const player = getPlayer();
  const playerId = Date.now().toString(36);

  const resultData = {
    id: playerId,
    firstName:  player.firstName,
    lastName:   player.lastName,
    email:      player.email,
    title:      player.title,
    score:      finalScore,
    bugsFound:  state.bugsFound,
    accuracy,
    timeBonus,
    bestStreak: state.bestStreak,
    misclicks:  state.misclicks,
    reason,
    foundBugIds: [...foundBugIds],
  };

  sessionStorage.setItem('bugbash_result', JSON.stringify(resultData));

  // Add to session leaderboard
  addToLeaderboard({ id: playerId, firstName: player.firstName, lastName: player.lastName, score: finalScore, bugsFound: state.bugsFound });

  window.location.href = 'results.html';
}

// ── Finish button / modal ────────────────────────────────────────────────────
finishBtn.addEventListener('click', () => {
  if (!state.gameActive) return;
  modalBugsFound.textContent = state.bugsFound;
  finishModal.classList.add('active');
});

modalKeepPlaying.addEventListener('click', () => {
  finishModal.classList.remove('active');
});

modalFinish.addEventListener('click', () => {
  endGame('manual');
});

// ── Animations ───────────────────────────────────────────────────────────────
function showToast(text, x, y, type) {
  const el = document.createElement('div');
  el.className = `click-toast ${type}`;
  el.textContent = text;
  el.style.left = x + 'px';
  el.style.top  = (y - 10) + 'px';
  document.body.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
}

function showPulse(x, y) {
  const el = document.createElement('div');
  el.className = 'bug-pulse';
  el.style.left = x + 'px';
  el.style.top  = y + 'px';
  document.body.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
}

function showMisclickFlash() {
  const el = document.createElement('div');
  el.className = 'misclick-flash';
  document.body.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
}

// ── Boot ─────────────────────────────────────────────────────────────────────
init();
