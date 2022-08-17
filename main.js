const navbarEmail = document.querySelector('.navbar-email');
const dektopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    dektopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

