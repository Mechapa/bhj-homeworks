const input = document.querySelector(".tasks__input");
const addButton = document.querySelector(".tasks__add");
const tasksList = document.querySelector(".tasks__list");

function addTask() {
  if (input.value) {
    tasksList.insertAdjacentHTML('beforeEnd',
      `<div class="task">
        <div class="task__title">
          ${input.value}
        </div>
      <a href="#" class="task__remove">&times;</a>
      </div>`)
  }
  input.value = null;
}

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
})

input.addEventListener("keydown", (e) => {
  if (e.key === Enter) {
    addTask();
  }
})

tasksList.addEventListener("click", (e) => {
  const removeButton = document.querySelectorAll(".task__remove");
  removeButton.forEach((button) => {
    if (button = e.target) {
      button.parentElement.remove();
    }
  })
})
 
  
