import 'bootstrap';
import './styles/main.scss';

const backdrop = document.getElementById('backdrop');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
     setTimeout(() => {
    backdrop.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  }, 10);
});

backdrop.addEventListener('click', () => {
  hamburger.click(); 
});