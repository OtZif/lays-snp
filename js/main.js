window.onload = function () {
  let elem = document.getElementById('element');
  elem.classList.remove('hide_page');
  elem.classList.add('show_page');
};
let navMain = document.querySelector('.nav__container');
let navToggle = document.querySelector('.mobile-button');
let navToggleCl = document.querySelector('.case--close-nav');
navMain.classList.remove('nav--nojs');
navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});
navToggleCl.addEventListener('click', function () {
  navMain.classList.add('nav--closed');
  navMain.classList.remove('nav--opened');
});

go();
window.addEventListener('resize', go);
function go(){
  const currentWidth = window.innerWidth;
  let navigation = 150;
  let baseWidth = 1920;
  let baseHeightFirst = 814;
  let baseHeightSecond = 920;
  let finalHeightFirst;
  let finalHeightSecond;

  if (currentWidth >= 1920){
      finalHeightFirst = 814;
      finalHeightSecond = 920;
  }
  if (currentWidth <= 1024 && currentWidth > 680){
      navigation = 110;
      baseWidth = 1024;
      baseHeightFirst = 420;
      baseHeightSecond = 475;
  }
  if (currentWidth <= 680) {
      navigation = 0;
      baseWidth = 680;
      baseHeightFirst = 1183;
      baseHeightSecond = 1360;
  }

  baseWidth = baseWidth - navigation;
  finalHeightFirst = Math.round((currentWidth - navigation) * baseHeightFirst / baseWidth);
  finalHeightSecond = Math.round((currentWidth - navigation) * baseHeightSecond / baseWidth);


  document.querySelector('.first-screen').style.height = finalHeightFirst + 'px';
  document.querySelector('.gallery').style.height = finalHeightSecond + 'px';
  document.querySelector('.about').style.height = finalHeightSecond + 'px';
  document.querySelector('.lays').style.height = finalHeightSecond + 'px';
}

let menuElem = document.getElementById('menu');
let navElem = document.getElementById('navigation');
let lastScroll = 0;
window.onscroll = function() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0 && lastScroll <= currentScroll){
        lastScroll = currentScroll;
        // console.log("Scrolling DOWN");
        if (menuElem.classList.contains('nav--opened')) {
            menuElem.classList.remove('nav--opened');
            menuElem.classList.add('nav--closed');
        }
        if(navElem.classList.contains('nav--animation-opened')){
            navElem.classList.add('nav--animation-closed');
            navElem.classList.remove('nav--animation-opened');
        }

    }else{
        lastScroll = currentScroll;
        // console.log("Scrolling UP");
        if(navElem.classList.contains('nav--animation-closed')){
            navElem.classList.remove('nav--animation-closed');
            navElem.classList.add('nav--animation-opened');
        }
    }
};