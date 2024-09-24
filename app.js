// 1. Write functions for the following arithmetic operations. Each function takes 2 parameters and returns the result.Means there will be total 4 functions.
// Subtraction
// Multiplication
// Division
// Remainder

function subtract(num1, num2) {
    var num1 = prompt("Enter first number: ")
    var num2 = prompt("Enter second number: ")
    alert(num1 - num2)
}

function multiplicate(num1, num2) {
    var num1 = prompt("Enter first number: ")
    var num2 = prompt("Enter second number: ")
    alert(num1 * num2)
}

function divide(num1, num2) {
    var num1 = prompt("Enter first number: ")
    var num2 = prompt("Enter second number: ")
    alert(num1 / num2)
}

function remainder(num1, num2) {
    var num1 = prompt("Enter first number: ")
    var num2 = prompt("Enter second number: ")
    alert(num1 % num2)
}

// 2. Write a function that takes a single parameter and returns its data type
// Hint: typeof
// Note: Test with all data types

function checkType() {
    alert("Type of 25 is " + typeof(25) + ".")
    alert("Type of 'SMIT' is " + typeof("SMIT") + ".")
    alert("Type of true is " + typeof(true) + ".")
}

// 3. Write a function to check if the passed number is either ODD or EVEN and shows the result in an alert box.

function checkOddEven(num) {
    var num = prompt("Enter data to check datatype: ")
    if (num % 2 == 0) {
        alert(num + " number is even.")
    } else {
        alert(num + " number is odd.")
        
    }
}