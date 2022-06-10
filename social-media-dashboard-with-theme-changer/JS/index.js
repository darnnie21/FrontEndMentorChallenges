const header = document.querySelector('header');
const body = document.querySelector('body');
const toggle = document.getElementById('toggle-switch');
const socialText = document.querySelector('div.social-text');
const socialCards = document.querySelector('div.social-cards');
const socialContentText = document.querySelector('p.social-content-text');
const overview= document.querySelector('div.overview');



toggle.onclick = function() {
    toggle.classList.toggle('active')
    header.classList.toggle('active')
    body.classList.toggle('active')
    socialText.classList.toggle('active')
    socialCards.classList.toggle('active')
    socialContentText.classList.toggle('active')
    overview.classList.toggle('active')
}
