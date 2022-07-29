//STEP 1

// function halfNumber(num) {
//     let numDiv = num / 2;
//     return numDiv;
// }
// let num = 5;
// console.log("Half of " + num + " is " + halfNumber(num));

//STEP 2
// function squareNumber(num) {
//     let numSquare = num * num;
//     return numSquare;
// }
// let num = 3;
// console.log("The result of squaring the number " + num + " is " + squareNumber(num));

//STEP 3
// function percentOf(num1, num2) {
//     let percent = (num1 * 100) / num2;
//     return percent;
// }
// let num1 = 2;
// let num2 = 4;
// console.log(num1 + " is " + percentOf(num1, num2)+ "% of " + num2);

//STEP 4
// function findModulus(num1, num2) {
//     let modulus = num1 % num2;
//     return modulus;
// }
// let num1 = 10;
// let num2 = 4;
// console.log(findModulus(num1, num2) + " is the modulus of " + num1 + " and " + num2);

//STEP 5
function addition(numbers) {
    sumnums = 0;

    for (let val of numbers) {
        console.log(val);
        result = parseInt(val);
        sumnums += result;
    }
    return sumnums;
}
let nums = prompt('What are the numbers that you want to sum?, please separate them by commas');
numbers = nums.split(',');
console.log(numbers);
alert("The sum of your numbers is = " + addition(numbers));