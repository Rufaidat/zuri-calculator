const operator = prompt("enter operation: +, -, /, *, %,");
const num1 = parseFloat(prompt("enter first number: "));
const num2 = parseFloat(prompt("enter second number: "));

let result = 0;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "/") {
  result = num1 / num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "%") {
  result = num1 % num2;
}
alert(result);
