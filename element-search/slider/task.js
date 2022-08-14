const buttonNext = document.querySelector(".slider__arrow_next");
const buttonPrev = document.querySelector(".slider__arrow_prev");
const sliders = Array.from(document.querySelectorAll(".slider__item"));
let index;

buttonNext.onclick = function () {
  let index = sliders.findIndex(item => item.classList.contains('slider__item_active'));
  sliders[index].classList.remove("slider__item_active");
  index++
  if (index == sliders.length) {
    index = 0;
  }
  sliders[index].classList.add('slider__item_active');
}

buttonPrev.onclick = function () {
  let index = sliders.findIndex(item => item.classList.contains('slider__item_active'));
  sliders[index].classList.remove("slider__item_active");
  index--
  if (index == -1) {
    index = sliders.length - 1;
  }
  sliders[index].classList.add('slider__item_active');
}
