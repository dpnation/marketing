const SHEETS_ENDPOINT = "https://script.google.com/macros/s/AKfycbxnSVabmh9eTGgCN9BThpt1sM-VLuU5nRLSbxIPUThqbYhozFK8o6EpuzYrawaGU4Tf/exec";

async function submitToSheets(sessionData) {
  const payload = {
    timestamp: new Date().toISOString(),
    name: sessionData.name,
    email: sessionData.email,
    company: sessionData.company,
    title: sessionData.title,
    score: sessionData.score,
    bugsFound: sessionData.bugsFound,
    accuracy: sessionData.accuracy,
    timeBonus: sessionData.timeBonus,
    bestStreak: sessionData.bestStreak
  };
  try {
    await fetch(SHEETS_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.error("Sheets submission failed:", err);
  }
}
