document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById("playButton");
  const videoOverlay = document.getElementById("videoOverlay");
  const video = document.getElementById("personalVideo");
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  // Menu toggle for mobile
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
      nav.classList.remove("active");
      if (menuToggle) menuToggle.classList.remove("open");
    });
  });

  // Video overlay / play
  if (playButton && videoOverlay && video) {
    playButton.addEventListener("click", () => {
      videoOverlay.classList.add("hidden");
      // small timeout so CSS transition can start smoothly
      setTimeout(() => video.play(), 150);
    });
  }

  // Random pastel backgrounds for .card elements (visual only)
  const pastelPalette = [
    '#FFF7D6', '#FFF2B8', '#FFF9E6', // yellows
    '#E6F7EA', '#DFF4E3', '#D7F0D9', // greens
    '#EAF6FF', '#D5EDFF', '#DDEFFF'  // blues
  ];

  function pickRandomPastel() {
    return pastelPalette[Math.floor(Math.random() * pastelPalette.length)];
  }

  const cards = document.querySelectorAll('.card');
  if (cards.length) {
    cards.forEach(card => {
      const bg = pickRandomPastel();
      card.style.backgroundColor = bg;
      card.style.border = '1px solid rgba(0,0,0,0.06)';
      card.style.color = '#15324a';
    });
  }

});
