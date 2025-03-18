// to declare variable in JavaScript You have to use following pattern:
// [statement] [name] = [value]
// as an example:

let variableThatCanBeChanged = 'Hello'
const constantString = 'World'

// 'let' and 'const' are 2 most common statement to declare variables.
// The main difference: value of 'let' CAN be change and 'const' CAN NOT

// TIP: If You dont plan to change value of a variable, then use 'const'

// Variables can have different values - numbers, strings etc:
let numberVariable = 2
let stringVariable = 'abc'
let boolVariable = true
let otherBoolVariable = false


// We can use console.log to print their values:
console.log(variableThatCanBeChanged) // print variable variableThatCanBeChanged
console.log(constantString) // print variable constantString
console.log(variableThatCanBeChanged, constantString) // print both variables

// on console You will get:
// Hello
// World
// Hello World


// we can change value of 'let':
variableThatCanBeChanged = "Goodbye"

// then can use console.log to print both values:
console.log(variableThatCanBeChanged, constantString) // print both variables

// on console You will get:
// Goodbye World

// You can also use console.log to print description and then the value:
console.log('Value of constantString:', constantString) // print both variables

// on console You will get:
// Value of constantString: World


// ...but we can NOT change value of 'const':
constantString = "Sun"

// ...because on console You will get following error:
// constantString = 'Sun'
//                ^
// TypeError: Assignment to constant variable.



// articles and links:
// https://devenv.pl/const-let-javascript-es6-uzywac/
// https://swiatfrontendu.pl/blog/dlaczego-nie-warto-uzywac-var-w-javascript/ 
// https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/ 
// https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/ 
