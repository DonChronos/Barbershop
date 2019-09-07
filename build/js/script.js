"use strict";var x=window.matchMedia("(max-width: 767px)"),mfPersonal=document.querySelector(".modal-personal"),mfSuccess=document.querySelector(".modal-form--success"),btnLogin=document.querySelector(".button--log-in"),btnClose=document.querySelector(".button--close"),btnSuccess=document.querySelector(".button--modal-form-success"),btnSendOrder=document.querySelector(".button--submit"),btnUser=document.querySelector(".user-list__login");btnSendOrder&&btnSendOrder.addEventListener("click",sendOrder),btnLogin&&btnLogin.addEventListener("click",closeModalForm),btnClose&&btnClose.addEventListener("click",closeModalForm),btnSuccess&&btnSuccess.addEventListener("click",closeModalForm),btnUser&&btnUser.addEventListener("click",showPersonal);var slideIndex=1,slideIndex1=1,btnShowAll=document.querySelector(".button--news");btnShowAll&&btnShowAll.addEventListener("click",showAllNews);var news=document.querySelectorAll(".news__item"),navMain=document.querySelector(".main-nav");navMain.classList.remove("main-nav--nojs");var navToggle=document.querySelector(".main-nav__toggle");function plusSlides1(e){showSlides1(slideIndex1+=e)}function currentSlide1(e){showSlides1(slideIndex1=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var s,n=document.getElementsByClassName("advantages__item"),t=document.getElementsByClassName("slider__toggle--advantages");for(e>n.length&&(slideIndex=1),e<1&&(slideIndex=n.length),s=0;s<n.length;s++)n[s].style.display="none";for(s=0;s<t.length;s++)t[s].className=t[s].className.replace(" active","");n[slideIndex-1].style.display="block",t[slideIndex-1].className+=" active"}function showSlides1(e){var s,n=document.getElementsByClassName("reviews__item"),t=document.getElementsByClassName("slider__toggle--reviews");for(e>n.length&&(slideIndex1=1),e<1&&(slideIndex1=n.length),s=0;s<n.length;s++)n[s].style.display="none";for(s=0;s<t.length;s++)t[s].className=t[s].className.replace(" active","");n[slideIndex1-1].style.display="block",t[slideIndex1-1].className+=" active"}function showAllNews(e){e.preventDefault();for(var s=0;s<news.length;s++)news[s].style.display="flex",1===s&&(news[s].style.marginBottom="auto"),news[s].style.border="none"}function showPersonal(e){e.preventDefault(),navMain.classList.remove("main-nav--opened"),navMain.classList.add("main-nav--closed"),mfPersonal.classList.add("modal-personal--show")}function closeModalForm(e){switch(e.preventDefault(),e.currentTarget.parentNode.parentNode.classList[0]){case"modal-personal":mfPersonal.classList.remove("modal-personal--show");break;case"modal-form":mfSuccess.classList.remove("modal-form--show"),btnSendOrder.classList.toggle("button--in-progress")}}function sendOrder(e){e.preventDefault(),btnSendOrder.classList.toggle("button--in-progress"),mfSuccess.classList.toggle("modal-form--show")}navToggle.addEventListener("click",function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))}),x.matches&&showSlides(slideIndex),showSlides1(slideIndex1);