function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

burger();

function burger() {
    const burger = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu__body");
    const body = document.querySelector("body");
    let check = false;
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

    }
}
tab();

function tab() {
    const arrTab = [
        document.querySelector(".slider__item1"),
        document.querySelector(".slider__item2"),
        document.querySelector(".slider__item3")
    ];

    const arrBtn = [
        document.querySelector(".tab1"),
        document.querySelector(".tab2"),
        document.querySelector(".tab3")
    ];

    for (let i = 0; i <= 3 - 1; i++) {
        arrBtn[i].onclick = function (e) {
            clickF(e);
        };
    }

    function clickF(e) {
        let elem = null;
        let btn = null;
        let btnArr = arrBtn.slice(0);        
        let elemArr = [];
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
        for (let i = 0; i <= 2 - 1; i++) {
            elemArr[i].style.opacity = 0;
            elemArr[i].style.zIndex = -1;
            btnArr[i].classList.remove('active');
        }

    }
};