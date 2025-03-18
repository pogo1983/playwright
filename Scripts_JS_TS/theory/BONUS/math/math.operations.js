// to run this script You can use following command in terminal:
// npm run tmath

console.log('------------------------------------------------------------------')
console.log('------------ Addition (+) ----------------------------------------')
const sumResult = 40 + 1
console.log('Addition (40 + 1) result:', sumResult)


console.log('------------------------------------------------------------------')
console.log('------------ Subtraction (-) -------------------------------------')
const subResult = 40 - 1
console.log('Subtraction (40 - 1) result:', subResult)


console.log('------------------------------------------------------------------')
console.log('------------ Multiplication (*) ----------------------------------')
const multiResult = 5 * 7
console.log('Multiplication (5 * 7) result:', multiResult)


console.log('------------------------------------------------------------------')
console.log('------------ Division (/) ----------------------------------------')
const divResult = 32 / 8
console.log('Division (32 / 8) result:', divResult)


console.log('------------------------------------------------------------------')
console.log('------------ Exponentiation (**) ----------------------------------')
const exResult = 3 ** 2
console.log('Exponentiation (3 ** 2) result:', exResult)


console.log('------------------------------------------------------------------')
console.log('------------ Square root -----------------------------------------')
const sqrtValue = 9
const sqrtResult = Math.sqrt(9)
console.log(`Square root of ${sqrtValue}:`, sqrtResult)


console.log('------------------------------------------------------------------')
console.log('------------ Order of operations ---------------------------------')
const result = 2 * 10 + 8
const resultBrackets = 2 * (10 + 8)

console.log('Result of "2 * 10 + 8":', result) // will return 28
console.log('Result of "2 * (10 + 8)":', resultBrackets) // will return 36


console.log('------------------------------------------------------------------')
console.log('------------ Incrementation (increasing value by 1) --------------')
let valueInc = 5
console.log('Base value:', valueInc)
valueInc = valueInc + 1
console.log('First incrementation (value + 1):', valueInc)
valueInc += 1
console.log('Second incrementation (value += 1):', valueInc)
valueInc ++
console.log('Third incrementation (value ++):', valueInc)


console.log('------------------------------------------------------------------')
console.log('------------ Decrementation (decreasing value by 1) --------------')
let valueDec = 5
console.log('Base value:', valueDec)
valueDec = valueDec - 1
console.log('First incrementation (value - 1):', valueDec)
valueDec -= 1
console.log('Second incrementation (value -= 1):', valueDec)
valueDec --
console.log('Third incrementation (value --):', valueDec)


console.log('------------------------------------------------------------------')
console.log('------------ Random value ----------------------------------------')
const randomValue = Math.random() // between 0 and 1
console.log('Random value between 0 and 1:', randomValue)

const anotherRandomValue = Math.random() * 5 // between 0 and 5
console.log('Random value between 0 and 5:', anotherRandomValue)

const randomValueFromRange = 2 + Math.random() * 5 // between 2 and 7
console.log('Random value between 2 and 7:', randomValueFromRange)


console.log('------------------------------------------------------------------')
console.log('------------ Round value -----------------------------------------')

const randomVal = 2 + Math.random() * 5 // between 2 and 7
console.log('Random value between 2 and 7:', randomValueFromRange)
console.log('Round value:', Math.round(randomValueFromRange))
console.log('Floor (round down) value:', Math.floor(randomValueFromRange))
console.log('Ceil (round up) value:', Math.ceil(randomValueFromRange))

// Module Math offers functions for:
// - absolute values
// - round values
// - min and max
// - function sinus, cosinus, tangens and cotangens

// More functions in Math module:
// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Math
