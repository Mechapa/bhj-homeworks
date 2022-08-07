const rotators = Array.from(document.querySelectorAll(".rotator"));
for (let i = 0; i < rotators.length; i++) {
  const rotatorCase = Array.from(rotators[i].querySelectorAll(".rotator__case"))
  swap();
    function swap() {
      let curentIndex = rotatorCase.findIndex(element => element.classList.contains("rotator__case_active"));
    rotatorCase[curentIndex].classList.remove("rotator__case_active")
    curentIndex++
    if (curentIndex == rotatorCase.length ) {
      curentIndex = 0;
    }
    const time = rotatorCase[curentIndex].dataset.speed;
    const color = rotatorCase[curentIndex].dataset.color;
    rotatorCase[curentIndex].style.color = color;
    rotatorCase[curentIndex].classList.add("rotator__case_active")

    setTimeout(swap, time)
    }
}