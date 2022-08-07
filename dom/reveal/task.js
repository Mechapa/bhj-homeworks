const reveal = Array.from(document.querySelectorAll(".reveal"));
for (let i = 0; i < reveal.length; i++) {
  window.addEventListener("scroll", showImg);
  function showImg (e) {
    const topV = reveal[i].getBoundingClientRect().top;
    const bottomV  = reveal[i].getBoundingClientRect().bottom;
    if ((bottomV < 0) || (topV > window.innerHeight)) {
      reveal[i].classList.remove("reveal_active");
    } else {
      reveal[i].classList.add("reveal_active");
    }
  }
}