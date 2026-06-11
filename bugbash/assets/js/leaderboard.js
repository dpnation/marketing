const LEADERBOARD_KEY = 'bugbash_leaderboard';

function getLeaderboard() {
  try {
    return JSON.parse(sessionStorage.getItem(LEADERBOARD_KEY) || '[]');
  } catch {
    return [];
  }
}

function addToLeaderboard(entry) {
  const board = getLeaderboard();
  board.push(entry);
  board.sort((a, b) => b.score - a.score);
  sessionStorage.setItem(LEADERBOARD_KEY, JSON.stringify(board));
  return board;
}

function getRank(playerId) {
  const board = getLeaderboard();
  const idx = board.findIndex(e => e.id === playerId);
  return idx === -1 ? board.length : idx + 1;
}

function renderLeaderboard(containerId, currentPlayerId) {
  const board = getLeaderboard();
  const container = document.getElementById(containerId);
  if (!container) return;

  if (board.length === 0) {
    container.innerHTML = '<p style="color:var(--gray-500);font-size:14px;text-align:center;padding:16px 0;">No entries yet — you\'re first!</p>';
    return;
  }

  const rankIcons = ['🥇', '🥈', '🥉'];

  container.innerHTML = board.map((entry, i) => {
    const isCurrent = entry.id === currentPlayerId;
    const rankDisplay = i < 3
      ? `<span class="lb-rank top">${rankIcons[i]}</span>`
      : `<span class="lb-rank">#${i + 1}</span>`;

    const initials = ((entry.firstName || '')[0] || '') + ((entry.lastName || '')[0] || '');
    const displayName = `${entry.firstName || ''} ${entry.lastName || ''}`.trim();

    const avatarColors = ['#01446C','#0272B4','#00C0A3','#7C3AED','#16A34A','#DC2626'];
    const avatarColor = avatarColors[(entry.firstName || ' ').charCodeAt(0) % avatarColors.length];

    return `
      <div class="lb-row${isCurrent ? ' current-player' : ''}">
        ${rankDisplay}
        <div class="lb-avatar" style="background:${avatarColor}">${initials}</div>
        <div class="lb-name">${escapeHtml(displayName)}${isCurrent ? ' <span style="font-size:11px;color:var(--blue-500);font-weight:700;">YOU</span>' : ''}</div>
        <div class="lb-bugs">${entry.bugsFound}/8 bugs</div>
        <div class="lb-score">${entry.score.toLocaleString()}</div>
      </div>
    `;
  }).join('');
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
