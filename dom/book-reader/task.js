const fontSwap = Array.from(document.querySelectorAll(".font-size"));
for (let i = 0; i < fontSwap.length; i++) {
  fontSwap[i].addEventListener("click", swap);
  function swap(event) {
    let curentIndex = fontSwap.findIndex(element => element.classList.contains("font-size_active"));
    fontSwap[curentIndex].classList.remove("font-size_active");
    fontSwap[i].classList.add("font-size_active");
    let fontData = fontSwap[i].getAttribute("data-size");
    const book = document.getElementById("book")
    if (fontData == "small") {
      book.classList.remove("book_fs-big");
      book.classList.add("book_fs-small")
    } else if (fontData == "big") {
      book.classList.add("book_fs-big");
      book.classList.remove("book_fs-small")
    } else {
      book.classList.remove("book_fs-small")
      book.classList.remove("book_fs-big");
    }
    event.preventDefault();
  }
}