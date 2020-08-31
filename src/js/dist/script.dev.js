"use strict";

function ibg() {
  var ibg = document.querySelectorAll(".ibg");

  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();
burger();

function burger() {
  var burger = document.querySelector(".menu-icon");
  var menu = document.querySelector(".menu__body");
  var body = document.querySelector("body");
  var check = false;

  burger.onclick = function (e) {
    if (check) {
      burger.classList.remove("active");
      menu.classList.remove("active");
      body.classList.remove("lock");
      check = !check;
    } else {
      burger.classList.add("active");
      menu.classList.add("active");
      body.classList.add("lock");
      check = !check;
    }
  };
}

tab();

function tab() {
  var arrTab = [document.querySelector(".slider__item1"), document.querySelector(".slider__item2"), document.querySelector(".slider__item3")];
  var arrBtn = [document.querySelector(".tab1"), document.querySelector(".tab2"), document.querySelector(".tab3")];

  for (var i = 0; i <= 3 - 1; i++) {
    arrBtn[i].onclick = function (e) {
      clickF(e);
    };
  }

  function clickF(e) {
    var elem = null;
    var btn = null;
    var btnArr = arrBtn.slice(0);
    var elemArr = [];

    if (e.target.className === 'tab1') {
      elem = document.querySelector(".slider__item1");
      elemArr = arrTab.slice(0);
      elemArr.splice(0, 1);
      btn = document.querySelector(".tab1");
      btnArr.shift();
    } else if (e.target.className === 'tab2') {
      elem = document.querySelector(".slider__item2");
      elemArr = arrTab.slice(0);
      elemArr.splice(1, 1);
      btn = document.querySelector(".tab2");
      btnArr.splice(1, 1);
    } else {
      elem = document.querySelector(".slider__item3");
      elemArr = arrTab.slice(0);
      elemArr.pop();
      btn = document.querySelector(".tab3");
      btnArr.pop();
    }

    elem.style.opacity = 1;
    elem.style.zIndex = 1;
    btn.classList.add('active');

    for (var _i = 0; _i <= 2 - 1; _i++) {
      elemArr[_i].style.opacity = 0;
      elemArr[_i].style.zIndex = -1;

      btnArr[_i].classList.remove('active');
    }
  }
}

;