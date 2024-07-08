const header = document.querySelector('header');
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.nav-list');

function toggleMenu() {
    menuToggle.classList.toggle('active');
    if (window.innerWidth <= 992) {
      navigation.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    } else {
      navigation.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  }
