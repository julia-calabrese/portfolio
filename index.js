// ------- Fade-in effect on page load -------
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;

  setTimeout(() => {
    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = 1;
  }, 100);
});

// ------- Smooth scrolling for navigation -------
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// ------- Card reveal animation on scroll -------
const cards = document.querySelectorAll(".card");

const revealCards = () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < trigger) {
      card.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
