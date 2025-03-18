// To create function You have to use following pattern:
// function [name]([parameters]) {
//     [body of function]
//     [optional return some value]
// } 

// simplest example of function without any parameters:

function printHello() {
    console.log('Hello World!')
}

// to use above functions just call it by name:
printHello()

// on console You will get:
// Hello World!

// Other example of function, that return value:
function getHello() {
    return 'Hello World!'
}

// to use functions just call it by name and assign result to new variable:
const hello = getHello()
console.log('result of getHello():', hello)

// on console You will get:
// result of getHello(): Hello World!


// more complex example with parameters:
function addTwoNumbersNotOptimal(numberOne, numberTwo) {
    const result = numberOne + numberTwo
    return result
}

// or shorter:
function addTwoNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo
}

// to use functions just call them by name and pass parameters:
const result1 = addTwoNumbers(1, 2)
// result of that function will be stored in variable 'result1' and now we can display its value:
console.log('result of 1 + 2:', result1)

// on console You will get:
// result of 1 + 2: 3


const result2 = addTwoNumbers('a', 'b')
console.log('result of a + b:', result2)

// on console You will get:
// result of a + b: ab


const result3 = addTwoNumbers('a', 12)
console.log('result of a + 12:', result3)

// on console You will get:
// result of a + 12: a12


// Function can return some value but it's optional!
// as an example:
function printSumOfValues(numberOne, numberTwo) {
    console.log('Sum:', numberOne + numberTwo)
}

// now we can just use the function as:
printSumOfValues(20, 33)
// and on console You will get:
// Sum: 53

// but...
// what if we will try to assign function to variable?

const result4 = printSumOfValues(44, 11)
console.log('result from printSumOfValues:', result4)

// well.. it will work...
// but on console You will get:
// Sum: 55
// result from printSumOfValues: undefined

// To remember - function without statement 'return' will return undefined!
