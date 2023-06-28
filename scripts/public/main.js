'use strict';

const buttonSwitch = document.querySelector(`.switch__button`);
const labelSwitch = document.querySelector(`.switch__button-label`);

const buttonMode = () => {

    buttonSwitch.addEventListener(`click`, () => {
        labelSwitch.classList.toggle(`move`);
    });
};

const links = document.querySelectorAll(`.nav__links`);
const home = document.querySelector(`.home`);
const options = {
    root: null,
    rootMargin: `0px`,
    threshold: 1,
};

const observeLinks = (evento) => {   

    if (evento[0].isIntersecting) {
        
        if (evento[0].target.className === `home`) {
            links[0].classList.add(`hover`);
        }
        if (evento[0].target.className === `acerca`) {
            links[0].classList.add(`hover`);
        }
        if (evento[0].target.className === `project`) {
            links[0].classList.add(`hover`);
        }
        if (evento[0].target.className === `contact`) {
            links[0].classList.add(`hover`);
        }
    } else {

        if (evento[0].target.className === `home`) {
            links[0].classList.remove(`hover`);
        }
        if (evento[0].target.className === `acerca`) {
            links[0].classList.remove(`hover`);
        }
        if (evento[0].target.className === `project`) {
            links[0].classList.remove(`hover`);
        }
        if (evento[0].target.className === `contact`) {
            links[0].classList.remove(`hover`);
        }
    }
};
const watch = new IntersectionObserver(observeLinks, options);

const searchNav = () => {
    watch.observe(home);
};

document.addEventListener(`DOMContentLoaded`, () => {
    searchNav();
});

buttonMode();
