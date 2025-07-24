document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bgMusic");

  if (!music) {
    console.error("Audio element not found!");
    return;
  }

  // Set loop and mute the music initially
  music.loop = true;
  music.muted = true;

  // Force load the audio to ensure it's ready
  music.load();

  // Add playsinline for iOS compatibility
  music.setAttribute("playsinline", "");

  // Try to play the audio when it's ready
  music.addEventListener("canplaythrough", () => {
    music.play().catch((err) => {
      console.error("Initial play failed:", err);
      // If autoplay is blocked, wait for user interaction
      document.addEventListener("click", triggerUnmute, { once: true });
      document.addEventListener("scroll", triggerUnmute, { once: true });
    });
  }, { once: true });

  // Function to unmute and play music
  function triggerUnmute() {
    music.muted = false;
    music.play().catch((err) => {
      console.error("Unmute/play failed:", err);
    });
  }

  // Fallback: Add a hidden button to force interaction
  const fallbackBtn = document.createElement("button");
  fallbackBtn.style.display = "none";
  fallbackBtn.textContent = "Play Music";
  document.body.appendChild(fallbackBtn);

  fallbackBtn.addEventListener("click", () => {
    music.muted = false;
    music.play();
  });

  // Simulate a click on the fallback button after 1 second
  setTimeout(() => {
    fallbackBtn.click();
  }, 1000);
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
