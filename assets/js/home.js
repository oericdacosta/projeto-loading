const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

const buttonSearch = document.querySelector("[data-open]");

const modal = document.querySelector("#modal");
const close = document.querySelector("#modal .header a");

buttonSearch.addEventListener("click", () =>{
    modal.classList.remove("hide");
})

close.addEventListener("click", () =>{
    modal.classList.add("hide");
})