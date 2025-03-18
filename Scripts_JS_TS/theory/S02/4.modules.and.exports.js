// to use import, You have to add 'type': 'module', to package.json

// to import data from another module use import:
import { sampleArray } from './4.sample.module.array.js'
// make sure, that this object has 'export' in front!

// we can import multiple elements at once:
import { printArrayOnConsoleWithFor, printArrayOnConsoleWithForeach } from './4.sample.module.functions.js'

// Good practice: we put all imports at the top of the file



console.log('imported sampleArray:', sampleArray)
// it will return following result on console:
// imported sampleArray: [ 'Python', 'Java', 'JavaScript', 'C#' ]

// after importing functions, we can use it as before:
printArrayOnConsoleWithFor(sampleArray)
// it will return following result on console:
// printArrayOnConsoleWithFor: Python
// printArrayOnConsoleWithFor: Java
// printArrayOnConsoleWithFor: JavaScript
// printArrayOnConsoleWithFor: C#

printArrayOnConsoleWithForeach(sampleArray)
// it will return following result on console:
// printArrayOnConsoleWithForeach: Python
// printArrayOnConsoleWithForeach: Java
// printArrayOnConsoleWithForeach: JavaScript
// printArrayOnConsoleWithForeach: C#