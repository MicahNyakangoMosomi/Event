document.addEventListener("DOMContentLoaded", () => {
const captions = document.querySelectorAll(".carousel-caption");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("hidden");
    }
  });
});

captions.forEach((caption) => observer.observe(caption));
});

