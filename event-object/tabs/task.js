const tabs = Array.from(document.querySelectorAll(".tabs"));
for (let b = 0; b < tabs.length; b++){
  const tab_content = Array.from(tabs[b].querySelectorAll(".tab__content"));
  const tab = Array.from(tabs[b].querySelectorAll(".tab"));
  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", getActive) 
    function getActive() {
      let curentIndex = tab.findIndex(element => element.classList.contains("tab_active"));
      tab[curentIndex].classList.remove("tab_active");
      tab_content[curentIndex].classList.remove("tab__content_active");
      tab[i].classList.add("tab_active");
      tab_content[i].classList.add("tab__content_active");
    }
  }
}


