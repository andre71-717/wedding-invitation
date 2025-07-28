document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgMusic");

  if (!audio) {
    console.error("Audio element not found in main.html");
    return;
  }

  // Function to unmute and play audio
  const playAudio = () => {
    if (audio.muted) {
      audio.muted = false;
      audio.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }
  };

  // Add listeners for click and scroll (both are user interactions)
  document.body.addEventListener("click", playAudio, { once: true });
  document.body.addEventListener("scroll", playAudio, { once: true });
  document.body.addEventListener("touchstart", playAudio, { once: true });
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
