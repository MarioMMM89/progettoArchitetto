const navbar = document.querySelector('#miaNavbar');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navColored');
    } else {
        navbar.classList.remove('navColored');
    }
};