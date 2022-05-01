const elemToggleFunc = function (elem) { elem.classList.toggle("selected"); }

const itemLi = document.querySelectorAll("[data-id]");



for (let i = 0; i < itemLi.length; i++) {

    itemLi[i].addEventListener("click", function () { elemToggleFunc(this); });
  
  }