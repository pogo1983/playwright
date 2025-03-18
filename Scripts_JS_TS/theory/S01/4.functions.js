// We can create optional and default parameters in functions:
function addTwoNumbers(numberOne, numberTwo=2) { // numberTwo is optional and has default value = 2
    return numberOne + numberTwo
}

// we can use function addTwoNumbers with only one parameter, and second will have default value:
const result1 = addTwoNumbers(1)
console.log('result of addTwoNumbers(1):', result1)

// on console You will get:
// result of addTwoNumbers(1): 3


// or we can use function addTwoNumbers with two parameters (default parameter will be replaced by value '4'):
const result2 = addTwoNumbers(1, 4)
console.log('result of addTwoNumbers(1, 4):', result2)

// on console You will get:
// result of addTwoNumbers(1, 4): 5


// Lets try declaring new function:
function doSomething(numberOne) { 
    console.log('numberOne for addTwoStrings has value:', numberOne)
}

// what about passing 0 parameters?
doSomething()
// on console You will get:
// numberOne for addTwoStrings has value: undefined

// IF you dont pass value to function - then parameter will have value undefined!