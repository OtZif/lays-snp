window.onload = function(){
	var elem = document.getElementById("element");
	elem.classList.remove("hide_page");
	elem.classList.add("show_page");
};
var navMain = document.querySelector(".nav__container");
var navToggle = document.querySelector(".mobile-button");
var navToggleCl = document.querySelector(".case--close-nav");

navMain.classList.remove("nav--nojs");
navToggle.addEventListener("click", function() {
	if (navMain.classList.contains("nav--closed")) {
		navMain.classList.remove("nav--closed");
	    navMain.classList.add("nav--opened");
	} else {
		navMain.classList.add("nav--closed");
	    navMain.classList.remove("nav--opened");
	}
});
navToggleCl.addEventListener("click", function() {
	navMain.classList.add("nav--closed");
	navMain.classList.remove("nav--opened");
});
go();
window.addEventListener("resize", go);
function go(){
	var currentWidth = window.innerWidth;
	if (currentWidth <= 680) {
		var baseWidth = 680;
		var baseHeightSecon = 1360;
		var baseHeightFirst = 1183;
		var newWidth = baseWidth - currentWidth;
		var step = newWidth * 2;
		var finalHeightSecond = baseHeightSecon - step;
		var finalHeightFirst = baseHeightFirst - step;		
	} else if (currentWidth >= 681 && currentWidth<= 1920) {
		var baseWidth = 1920;
		var baseHeightSecon = 920;
		var baseHeightFirst = 814 + 63;
		var newWidth = baseWidth - currentWidth;
		var step = newWidth/2;
		var finalHeightSecond = baseHeightSecon - step;
		var finalHeightFirst = baseHeightFirst - step;
	}
	document.querySelector(".first-screen").style.height = finalHeightFirst+"px";
  	document.querySelector(".gallery").style.height = finalHeightSecond+"px";
   	document.querySelector(".about").style.height = finalHeightSecond+"px";
    document.querySelector(".lays").style.height = finalHeightSecond+"px";
};