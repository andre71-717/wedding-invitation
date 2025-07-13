document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");
  
    btn.addEventListener("click", function () {
      if (music.paused) {
        music.play();
        btn.textContent = "⏸️";
      } else {
        music.pause();
        btn.textContent = "▶️";
      }
    });
  });


  function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const weddingDate = new Date("2025-10-05T00:00:00");
    const now = new Date();
    const diff = weddingDate - now;
  
    if (diff <= 0) {
      countdownElement.textContent = "It's our wedding day! 💍";
      return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    countdownElement.textContent =
      `${days} days ${hours}h ${minutes}m ${seconds}s`;
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown(); // initial call