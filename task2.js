let x = document.getElementById("number1");
let y = document.getElementById("number2");
x.innerHTML = Math.floor(Math.random() * 100) + 1;
y.innerHTML = Math.floor(Math.random() * 100) + 1;
let handresult = document.getElementById("result");
handresult.addEventListener("click"());
function randomNum() {
  if (handresult == x + y) {
    alert("Correct");
  } else {
    alert("Wrong");
  }
}
