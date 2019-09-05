'use strict';
let slideIndex = 1;
let slideIndex1 = 1;
let btnShowAll = document.querySelector('.button--news');
if (btnShowAll) btnShowAll.addEventListener('click', showAllNews);
let news = document.querySelectorAll('.news__item');
const navMain = document.querySelector('.main-nav');
navMain.classList.remove('main-nav--nojs');
const navToggle = document.querySelector('.main-nav__toggle');
navToggle.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
	} else {
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
	}
});
const link = document.querySelector('.main-nav__user-login');
const popup = document.querySelector(".modal-login");
const close = popup.querySelector(".modal-login__close");
const form = popup.querySelector("form");
const login = popup.querySelector("[name=login]");
const password = popup.querySelector("[name=password]");
const storage = localStorage.getItem("login");
link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add('modal-login--show');
});
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove('modal-login--show');
});
showSlides(slideIndex);
showSlides1(slideIndex1);

function plusSlides1(n) {
	showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
	showSlides1(slideIndex1 = n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("advantages__item");
  let dots = document.getElementsByClassName("slider__toggle--advantages");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("reviews__item");
  let dots = document.getElementsByClassName("slider__toggle--reviews");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
}

function showAllNews(event) {
  event.preventDefault();

  for (let i = 0; i < news.length; i++) {
    news[i].style.display = 'flex';

    if ( i === 1 ) {
      news[i].style.marginBottom = 'auto';
    }

    news[i].style.border = 'none';

  }

} 