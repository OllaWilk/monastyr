import "bootstrap";
import "./styles/main.scss";

const backdrop = document.getElementById("backdrop");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  setTimeout(() => {
    backdrop.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  }, 10);
});

backdrop.addEventListener("click", () => {
  hamburger.click();
});

  document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement.style;

    function updateScroll() {
      const scrollPos = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      root.setProperty('--scroll', scrollPos.toFixed(3));
    }

    updateScroll();
    window.addEventListener('scroll', updateScroll);
  });

  function addGlitchEffect(targets) {
  targets.forEach(el => {
    el.classList.add('glitch-effect');
    setTimeout(() => el.classList.remove('glitch-effect'), 300); 
  });
}

const animatedEls = document.querySelectorAll('.animate, .glitch-on-resize');

window.addEventListener('resize', () => addGlitchEffect(animatedEls));
window.addEventListener('scroll', () => addGlitchEffect(animatedEls));
