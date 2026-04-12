document.documentElement.classList.add("js");

const root = document.documentElement;
const spotlight = document.querySelector(".spotlight");

if (spotlight) {
  window.addEventListener(
    "pointermove",
    (event) => {
      root.style.setProperty("--x", `${event.clientX}px`);
      root.style.setProperty("--y", `${event.clientY}px`);
    },
    { passive: true },
  );
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
