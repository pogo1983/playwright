// Lets declare sample array:
let arrayOfNumbers = [1, 2, 3]
console.log('arrayOfNumbers:', arrayOfNumbers) 
// on console You will get:
// arrayOfNumbers: [ 1, 2, 3 ]


// Adding elements to array:
arrayOfNumbers.push(9) // add item to array
console.log('arrayOfNumbers:', arrayOfNumbers) // now list will look like: [ 1, 2, 3, 9 ]
// on console You will get:
// arrayOfNumbers: [ 1, 2, 3, 9 ]

// Reading and removing elements from array:
let value = arrayOfNumbers.pop() // get last item and remove it from array
console.log('value from arrayOfNumbers.pop():', value)
// on console You will get:
// value from arrayOfNumbers.pop(): 9
console.log('arrayOfNumbers:', arrayOfNumbers) // now list will look like: [ 1, 2, 3 ]
// on console You will get:
// arrayOfNumbers: [ 1, 2, 3 ]


// Concating (joining) two arrays:
let newArrayOfNumbers = [7, 8, 9]
let biggerArray = arrayOfNumbers.concat(newArrayOfNumbers)
console.log('biggerArray after concat:', biggerArray)
// on console You will get:
// biggerArray after concat: [ 1, 2, 3, 7, 8, 9 ]


// Replacing value from array:
let sampleArray = [5, 6, 7, 8, 9]
sampleArray[2] = 11
console.log('sampleArray after change:', sampleArray)
// on console You will get:
// sampleArray after change: [5, 6, 11, 8, 9]


// articles and links:
// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array