window.onload = function(){
			var elevent = document.getElementById('ela');
			element.classList.remove("hide_page");
			element.classList.add("show_page");


		// 	setTimeout(function(){
			
			
		// },200)
};
// document.addEventListener("DOMContentLoaded", ready);





 var navMain = document.querySelector('.nav__container');
	  var navToggle = document.querySelector('.mobile-button');
	  var navToggleCl = document.querySelector('.case--close-nav');

	  navMain.classList.remove('nav--nojs');

	  navToggle.addEventListener('click', function() {
	    if (navMain.classList.contains('nav--closed')) {
	      navMain.classList.remove('nav--closed');
	      navMain.classList.add('nav--opened');
	    } else {
	      navMain.classList.add('nav--closed');
	      navMain.classList.remove('nav--opened');
	    }
	  });

	  navToggleCl.addEventListener('click', function() {
	    
	      navMain.classList.add('nav--closed');
	      navMain.classList.remove('nav--opened');
	    
	  });