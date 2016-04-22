// Place to send the answers
var yourAnswer = document.getElementById("outputAnswer");

// Pulling the input values into JS
var inputOne = document.getElementById("valueOne");
var inputTwo = document.getElementById("valueTwo");


// Grabbing stuff
var add = document.getElementById("addition");
var sub = document.getElementById("subtraction");
var mul = document.getElementById("multiplication");
var div = document.getElementById("division");

function translate(event) {
  var newOne = parseInt(inputOne.value);
  var newTwo = parseInt(inputTwo.value);
  console.log(event.srcElement.id);
  yourAnswer.innerHTML = combo(eval(event.srcElement.id), newOne, newTwo);
}

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiplication(a, b) {
  return a * b;
}
console.log("2 * 4=", multiplication(2,4));
/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addition(a, b) {
 return a + b;
}
console.log("2 + 4=", addition(2,4));
/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtraction(a, b) {
  return a - b;
}
console.log("2 - 4=", subtraction(2,4));
/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function division(a, b) {
  return a / b;
}
console.log("2 / 4=", division(2,4));

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function combo(fun, a, b) {
  console.log(fun);
  return fun(a, b);
}

// In your JavaScript, put an event listener on each of the buttons.
add.addEventListener("click", translate);
sub.addEventListener("click", translate);
mul.addEventListener("click", translate);
div.addEventListener("click", translate);
