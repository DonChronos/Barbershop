const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const link = document.querySelector('.main-nav__user-login');
const popup = document.querySelector(".modal-login");
const close = popup.querySelector(".modal-login__close");
const form = popup.querySelector("form");
const login = popup.querySelector("[name=login]");
const password = popup.querySelector("[name=password]");
const storage = localStorage.getItem("login")

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
	} else {
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
	}
});

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add('modal-login--show');
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove('modal-login--show');
});