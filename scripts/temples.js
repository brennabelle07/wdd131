const hamburgerButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('nav');

hamburgerButton.addEventListener('click', () =>{
    hamburgerButton.classlist.toggle('active');
    mobileMenu.classlist.toggle('active');
});