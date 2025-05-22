let screen = document.getElementById("screen");
function appendNumber(number) {
  if (screen.textContent == "0") {
    screen.textContent = number;
  } else {
    screen.textContent += number;
  }
}

function clearScreen() {
  screen.textContent = "0";
}

function appendOperator(op) {
  const lastChar = screen.textContent.slice(-1);
  if ("+-*/".includes(lastChar)) {
    screen.textContent = screen.textContent.slice(0, -1) + op;
  } else {
    screen.textContent += op;
  }
}

function calculate(screen){
    if ("+-*/".includes(screen.textContent.slice(-1))){
        let newscreen = screen.textContent.slice(0,-1);
    const result = eval(newscreen);
    screen.textContent = result;
}
else{
    const result = eval(screen.textContent);
    screen.textContent = result;
}
}

