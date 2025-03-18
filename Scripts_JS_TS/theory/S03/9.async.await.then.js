import { loadUserData } from "./8.async.helpers.js"

// --------------------------------------------------------
// ADVANCED BONUS:

// What is Promise { <pending> }?

// Promise is just a Promise of a result.
// To get the result Promise need to be resolved:


console.log('----------------------------------------------------')
console.log('Using then() on Promise:')
const sampleData = loadUserData()

console.log('Processing some data...')
console.log('sampleData:', sampleData)
console.log('Processing some more data...')

sampleData.then(realResult => { 
    console.log('realResult from sampleData:', realResult) 
})

sampleData.then(function (realResult) { 
  console.log('realResult from sampleData:', realResult) 
})