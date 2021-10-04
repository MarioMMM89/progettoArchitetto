const navbar = document.querySelector('#miaNavbar');
const logo = document.querySelector('.logo');
window.onscroll = () => {
    if (window.scrollY > 30) {
        navbar.classList.add('navColored');
        logo.classList.add('logoAnimated');
    } else {
        navbar.classList.remove('navColored');
        logo.classList.remove('logoAnimated');
    }
};