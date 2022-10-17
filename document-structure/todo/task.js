const input = document.querySelector(".tasks__input");
const addButton = document.querySelector(".tasks__add");
const tasksList = document.querySelector(".tasks__list");

function addTask() {
  let inputText = input.value.trim();
  if (inputText) {
    tasksList.insertAdjacentHTML('beforeEnd',
      `<div class="task">
        <div class="task__title">
          ${inputText }
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

tasksList.addEventListener("click", (e) => {
  const removeButton = document.querySelectorAll(".task__remove");
    if (e.target.className === "task__remove") {
      console.log("loh");
      e.target.parentElement.remove();
    }
  })
 
  
