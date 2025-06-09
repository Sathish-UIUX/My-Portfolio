
document.addEventListener('DOMContentLoaded', () => {
  const cols = document.querySelectorAll('#about .row .col-lg-6');
  if (cols.length >= 2) {
    cols[0].classList.add('slide-target-left');
    cols[1].classList.add('slide-target-right');
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document
    .querySelectorAll('.slide-target-left, .slide-target-right')
    .forEach(el => observer.observe(el));
});

MouseHover
document.addEventListener("DOMContentLoaded", function () {
    const smallImage = document.querySelector(".small-image img");

    smallImage.addEventListener("mousemove", (e) => {
        const rect = smallImage.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10; // range -5 to 5
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10; // range -5 to 5
        smallImage.style.transform = `translate(${x}px, ${y}px)`;
    });

    smallImage.addEventListener("mouseleave", () => {
        smallImage.style.transform = "translate(0, 0)";
    });
});


