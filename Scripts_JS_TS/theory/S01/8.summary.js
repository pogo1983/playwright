// names of variables - in JavaScript we should use camelCase:

let userAddress = "Xyz Road"
// userName
// getUserName()

// ----------------------------------------------------------
// semicolons (;) in JavaScript - to use or not to use?

let userName = "James";
// or 
let userSurname = "Doe"

// depends - if You decide to use semicolons, then use them at the end of ech line in your code
// depends - if You decide NOT to use semicolons, then do NOT use them :)

// ----------------------------------------------------------
// Single quotes ('') or double quotes ("") in JavaScript?

let userCountry = "Poland"
// or 
let userCity = 'Warsaw'

// depends - use single quotes ('') or double quotes ("") in JavaScript, but be consistent in your code

// ----------------------------------------------------------
// Indentation (spaces or tabs before code):
function doSomething(numberOne) { 
    console.log('numberOne for addTwoStrings has value:', numberOne)
}
// is better than:
function doSomething(numberOne) { 
console.log('numberOne for addTwoStrings has value:', numberOne)
}

// ----------------------------------------------------------
// const vs let vs var vs none?

let variableA = 'a'
const variableB = 'b'
var variableC = 'c'
variableD = 'd'

// use const or let for readability
// var is obsolete and should be not used in code
// more: https://swiatfrontendu.pl/blog/dlaczego-nie-warto-uzywac-var-w-javascript/

// ----------------------------------------------------------
// should we use console.log in code?
// depends - use console.log in code to display only the most important information, like warning or errors
