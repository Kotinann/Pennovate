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
