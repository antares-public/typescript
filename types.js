"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log("Message: " + message);
var age = 12;
console.log("Age: " + age);
var isAuth = false;
isAuth = true;
console.log("isAuth: " + isAuth);
// =====================
var numberArray = [1, 2, 3];
// const numberArray2: Array<number> = [1, 2, 3];
console.log("[" + numberArray + "] - Array");
// Tuple
var contact = ["Vladilen", 1234567];
// Any
var variable = 42; // all
// ...
variable = "New String";
variable = true;
// =====================
function sayMyName(name) {
    console.log(name); // return
}
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) { }
}
var login = "admin";
var id1 = 1234;
var id2 = "1234";
