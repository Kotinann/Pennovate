import helloWorld from "./scripts/helloWorld";
import Prism from "prismjs";

import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-scss";

/*= ============== MOBILE MENU =============== */
const hamburgers = document.querySelectorAll('.toggle-menu');
const innerMenu = document.querySelector('.header-nav-mob__wrapp');
const menu = document.querySelector('.header-nav-mob');
const mobileMenuNavLinks = document.querySelectorAll('.header-nav-mob__link');

const toggleMenu = () => {
    console.log('Menu is toggle!');
    document.querySelector('html').classList.toggle('overflow');
    document.querySelector('.header-nav-mob').classList.toggle('active');
//   hamburgers.forEach((hamburger) => {
//     hamburger.classList.toggle('hamburger--open');
//   });
};

hamburgers.forEach((hamburger) => {
    hamburger.addEventListener('click', () => {
        toggleMenu();
    });
});

mobileMenuNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});

menu.addEventListener('click', (e) => {
    if (!e.target.closest('.header-nav-mob__wrapp')) toggleMenu();
});


/*= ============== TIMER =============== */

function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt(timer % 3600 / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 1440 * 60,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
