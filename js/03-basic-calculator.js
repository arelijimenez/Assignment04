// IMPORT THE MODULE

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let num1 = parseInt(prompt('What is your first number?'));
let num2 = parseInt(prompt('What is your second number?'));

// CHECK TO SEE WHAT OPERATION THEY'RE USING
let operator;
while (true) {
    operator = prompt('What is the operation that you want to do (Add, Substract, Multiply, or Divide)');

    if (operator === "Add" || operator === "Substract" || operator === "Multiply" || operator === "Divide" ) {
        break;
    }
}
// CALL THE APPROPRIATE FUNCTION
console.log("Operation Choice: " + operator);
console.log("Number 1: " + num1);
console.log("Number 2: " + num2);

let operation = function (operator, number1, number2) {
    if (operator === 'Add') {
        let result = number1 + number2;
        return result;
    }
    if (operator === 'Substract') {
        let result = number1 - number2;
        return result;
    }
    if (operator === 'Multiply') {
        let result = number1 * number2;
        return result;
    }
    if (operator === 'Divide') {
        let result = number1 / number2;
        return result;
    }
}
alert ('The result of your operation is: ' + operation(operator, num1, num2));