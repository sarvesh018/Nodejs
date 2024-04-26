console.log("Starting with Node JS");


// case 1
// const math = require("./math");
// console.log("Math addition", math.addFun(4,6));
// console.log("Math subtraction", math.subFun(14,6));

// case 2
const {add, sub} = require("./2.math")
console.log("Math addition", add(4,6));
console.log("Math subtraction", sub(14,6));