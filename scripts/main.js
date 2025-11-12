const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const header = document.querySelector(".site-header");
let lastScroll = 0;

const onScroll = () => {
  const current = window.scrollY;
  if (!header) return;
  if (current > lastScroll && current > 140) {
    header.classList.add("site-header--hidden");
  } else {
    header.classList.remove("site-header--hidden");
  }
  lastScroll = current;
};

window.addEventListener("scroll", onScroll, { passive: true });

const animatedTargets = document.querySelectorAll("section, .experience-card, .pillar-grid article");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  animatedTargets.forEach((section) => {
    section.classList.add("will-animate");
    observer.observe(section);
  });
} else {
  animatedTargets.forEach((section) => section.classList.add("in-view"));
}
