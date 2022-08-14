const modalMain = document.getElementById("modal_main");
const hideWindow = document.querySelectorAll(".modal__close");
const modalSuccess = document.getElementById("modal_success");
const success = document.querySelector(".show-success");
modalMain.classList.toggle("modal_active");

for (let i = 0; i < hideWindow.length; i++) {
  hideWindow[i].onclick = modalClose;
}

function modalClose() {
  this.closest(".modal").classList.remove("modal_active");
}

success.onclick = showSuccess;

function showSuccess() {
  modalMain.classList.toggle("modal_active");
  modalSuccess.classList.toggle("modal_active");
}