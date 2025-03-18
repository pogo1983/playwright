// Arrays - array is a list of elements
// for example lets create array of numbers:
let arrayOfNumbers = [1, 2, 3]

// and now lets print it on console:
console.log('arrayOfNumbers:', arrayOfNumbers)

// on console You will get:
// arrayOfNumbers: [1, 2, 3]

// You can also check the number of elements in array with property .length:
console.log('number of elements in arrayOfNumbers:', arrayOfNumbers.length)

// on console You will get:
// number of elements in arrayOfNumbers: 3

// We can also create array of strings:
let arrayOfStrings = ['H', 'e', 'll', 'o']
console.log('arrayOfStrings:', arrayOfStrings)

// on console You will get:
// arrayOfStrings: ['H', 'e', 'll', 'o']


// We can also create array of strings and numbers:
let arrayOfMix = ['H', 'e', 'll', 1, 2, 4]
console.log('arrayOfMix:', arrayOfMix)

// on console You will get:
// arrayOfMix: ['H', 'e', 'll', 1, 2, 4]



// We create array with arrays:
let arrayInArray = ['H', 'e', ['xyz'], 'll', [1, 2], 4]
console.log('arrayInArray:', arrayInArray)

// on console You will get:
// arrayInArray: ['H', 'e', ['xyz'], 'll', [1, 2], 4]


// We can also return specific element from each array using operator '[]' with element position:
console.log('arrayInArray[0]:', arrayInArray[0]) // returns first element
// on console You will get:
// arrayInArray[0]: H

console.log('arrayInArray[2]:', arrayInArray[2]) // returns third element
// on console You will get:
// arrayInArray[2]: ['xyz']

// how to get second element from small array [1, 2] that is inside arrayInArray?

console.log('arrayInArray[4][1]:', arrayInArray[4][1]) // returns second element of fifth element
// on console You will get:
// arrayInArray[4][1]: 2

// You can also check the number of elements in that array with property .length:
console.log('number of elements in arrayInArray:', arrayInArray.length)

// on console You will get:
// number of elements in arrayInArray: 6


// articles and links:
// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array