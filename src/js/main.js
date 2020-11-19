
let burgerIcon = document.querySelector('navbar-toggler');
let body = document.querySelector('body');
let headerListSubstrate = document.querySelector('.header-list-substrate');


burgerIcon.addEventListener('click', function () {
//   burgerMenu.classList.remove('close');
//   headerListSubstrate.classList.remove('close');
  body.classList.toggle('hidden-scroll');
});

// headerListSubstrate.addEventListener('click', function () {
//   burgerMenu.classList.remove('active');
//   headerListSubstrate.classList.remove('active');
//   html.classList.remove('hidden-scroll');
//   body.style.paddingRight = 0;
//   burgerMenu.classList.add('close');
//   headerListSubstrate.classList.add('close');
// });