'use strict';

const footerYear = document.querySelector('#year');
const navBtn = document.querySelector('#nav-btn');
const navbar = document.querySelector('#navbar');
const navClose = document.querySelector('#nav-close');
const toTopBtn = document.querySelector('#button');

/*
*****************************************************************************************************************************************
EVENT HANDLER FUNCTION
*****************************************************************************************************************************************
 */
const scroll = () =>
  document.body.scrollTop > 300 || document.documentElement.scrollTop > 300
    ? toTopBtn.classList.add('show')
    : toTopBtn.classList.remove('show');

const topFunction = () => window.scrollTo({ top: 0, behavior: 'smooth' });
/*
*****************************************************************************************************************************************
END EVENT HANDLER FUNCTION
*****************************************************************************************************************************************
 */
/*
*****************************************************************************************************************************************
EVENTS
*****************************************************************************************************************************************
 */

footerYear.innerHTML = new Date().getFullYear();
navBtn.addEventListener('click', () => navbar.classList.add('show-nav'));
navClose.addEventListener('click', () => navbar.classList.remove('show-nav'));
window.addEventListener('scroll', scroll);
toTopBtn.addEventListener('click', topFunction);
/*
*****************************************************************************************************************************************
END OF EVENTS 
*****************************************************************************************************************************************
 */
