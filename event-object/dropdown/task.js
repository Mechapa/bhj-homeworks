const dropdown = document.querySelectorAll(".dropdown");
const list = document.querySelectorAll(".dropdown__list");
const value = document.querySelectorAll(".dropdown__value");
for (let i = 0; i < dropdown.length; i++) {
  value[i].addEventListener("click", onClick);
  function onClick() {
    list[i].classList.toggle("dropdown__list_active");
  }
  const item = dropdown[i].querySelectorAll(".dropdown__item");
  for (let b = 0; b < item.length; b++) {
    item[b].addEventListener("click", function (event) {
      value[i].textContent = item[b].textContent;
      list[i].classList.remove("dropdown__list_active");
      event.preventDefault();
    });
  }
}
