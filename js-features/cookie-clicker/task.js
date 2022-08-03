const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
let flag = true;

cookie.onclick = function () {
  counter.textContent++
  if (flag) {
    cookie.width *=1.25;
    flag = false;
  }
  else {
    cookie.width /=1.25;
    flag = true;
  }
}