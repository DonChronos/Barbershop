"use strict";const navMain=document.querySelector(".main-nav");navMain.classList.remove("main-nav--nojs");const navToggle=document.querySelector(".main-nav__toggle");navToggle.addEventListener("click",function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))});const link=document.querySelector(".main-nav__user-login"),popup=document.querySelector(".modal-login"),close=popup.querySelector(".modal-login__close"),form=popup.querySelector("form"),login=popup.querySelector("[name=login]"),password=popup.querySelector("[name=password]"),storage=localStorage.getItem("login");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-login--show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-login--show")});