const buttonNext = document.querySelector(".slider__arrow_next");
const buttonPrev = document.querySelector(".slider__arrow_prev");
const sliders = Array.from(document.querySelectorAll(".slider__item"));
let index = 0

function hide() {
    sliders.forEach(element => {
        element.classList.remove("slider__item_active")
    });
}

function show() {
    sliders[index].classList.add("slider__item_active");
}

buttonNext.onclick = function() {
    index ++
    hide();
    if (index == sliders.length) {
        index = 0;
    }
    show();
}

buttonPrev.onclick = function() {
    index --
    hide();
    if (index == -1) {
        index = sliders.length - 1;
    }
    show();
}
