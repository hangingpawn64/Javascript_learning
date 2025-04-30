let num1 = parseInt(prompt("Enter first number"));
let num2 = parseInt(prompt("Enter second number"));
let operation = prompt("Enter operation");

function randomnumber(a) {
  return Math.random();
}

let randomvalue = randomnumber();

let result;

if (randomvalue < 0.4) {
  // faulty section
  switch (operation) {
    case "+":
      result = num1 - num2;
      break;
    case "-":
      result = num1 / num2;
      break;
    case "*":
      result = num1 + num2;
      break;
    case "/":
      result = num1 ** num2;
      break;
    default:
      console.log("invalid operation");
      break;
  }
} else {
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("invalid operation");
      break;
  }
}

console.log(result);
alert("result: " + result);
alert("random number was" + randomvalue);
