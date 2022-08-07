const modal_main = document.getElementById("modal_main");
const hide_window = document.querySelectorAll(".modal__close");
const modal_success = document.getElementById("modal_success");
modal_main.classList.toggle("modal_active");

hide_window[0].onclick = function () {
  modal_main.classList.remove("modal_active")
}

hide_window[1].onclick = function () {
  modal_main.classList.toggle("modal_active");
  modal_success.classList.toggle("modal_active");
}

hide_window[2].onclick = function () {
  modal_success.classList.toggle("modal_active");
}