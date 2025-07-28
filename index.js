document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bgMusic");

  if (!music) {
    console.error("Audio element not found!");
    return;
  }

  // Unmute and play music after load — now allowed because of the prior click
  music.muted = false;

  // Try playing immediately
  music.play().catch((err) => {
    console.warn("Play failed initially:", err);
    // fallback — wait for one more click if needed
    document.addEventListener("click", () => {
      music.play().catch(console.error);
    }, { once: true });
  });
});


  function updateCountdown() {
  const weddingDate = new Date("2025-10-05T00:00:00");
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "<p>It's our wedding day! 💍</p>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // initial call
