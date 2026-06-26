const REGISTERED_LEGENDS = 0;
const MAX_LEGENDS = 32;

// Change this date later when you choose the real tournament date.
const TOURNAMENT_DATE = new Date("2026-08-01T20:00:00+03:00").getTime();

function updateProgress() {
  const count = document.getElementById("legendCount");
  const fill = document.getElementById("progressFill");
  const percent = Math.min((REGISTERED_LEGENDS / MAX_LEGENDS) * 100, 100);
  count.textContent = `${REGISTERED_LEGENDS} / ${MAX_LEGENDS}`;
  fill.style.width = `${percent}%`;
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = TOURNAMENT_DATE - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "<strong>Tournament Started</strong>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateProgress();
updateCountdown();
setInterval(updateCountdown, 1000);
