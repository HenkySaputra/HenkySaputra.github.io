//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
})

//klik diluar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

window.onscroll = function () {
  const header = document.getElementById('header');
  const fixNav = header.offsetTop;

  if (window.pageYOffset > fixNav) {
    header.classList.add('navbar-blur');
  } else {
    header.classList.remove('navbar-blur');
  }

}

const text = document.querySelector('.sec-text');
const textLoad = () => {
  setTimeout(() => {
    textLoad.textContent = "Programmer"
  }, 0);
  setTimeout(() => {
    textLoad.textContent = "Web Developer"
  }, 4000);
  setTimeout(() => {
    textLoad.textContent = "Frontend Developer"
  }, 8000);
}
textLoad();
setInterval(textLoad, 12000);


if ($(".text-slider").length == 1) {

  var typed_strings =
    $(".text-slider-items").text();

  var typed = new Typed(".text-slider", {
    strings: typed_strings.split(", "),
    typeSpeed: 50,
    loop: true,
    backDelay: 900,
    backSpeed: 30,
  });
}

//typed
new Typed('#typed', {
  strings: ['Web Developer', 'Frontend Developer', 'Programmer',],
  typeSpeed: 100,
  backSpeed: 30,
  delaySpeed: 1000,
  loop: true
});



