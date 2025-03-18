import { loadUserData } from "./8.async.helpers.js"


console.log('----------------------------------------------------')
console.log('Using async function:')

console.log('calling async function with await...')
const result = await loadUserData()
console.log(result)

// it will return following result on console:
// calling async function with await...
// loadUserData: entering function
// loadUserData: entering Promise and waiting for 2 seconds...
// loadUserData: Promise done - returning value!
// [ 'Dale', 'Harry S. Truman', 'Hawk' ]


console.log('----------------------------------------------------')
console.log('Using async function in another function:')
// another example with function, that uses async function:


// function asyncCall() { // this will return: SyntaxError: Unexpected reserved word
//   console.log('calling async function in asyncCall...')
//   const result = await loadUserData()
//   console.log(result)
// }

// we must use async:

async function asyncCall() {
  console.log('calling async function in asyncCall...')
  const result = await loadUserData()
  console.log(result)
}

await asyncCall()
// it will return following result on console:
// calling async function in asyncCall...
// loadUserData: entering function
// loadUserData: entering Promise and waiting for 2 seconds...
// loadUserData: Promise done - returning value!
// [ 'Dale', 'Harry S. Truman', 'Hawk' ]

console.log('Finished!')




// --------------------------------------------------------
// ADVANCED BONUS:

// What is Promise { <pending> }?

// Promise is just a Promise of a result.
// To get the result Promise need to be resolved:


// const sampleData = loadUserData()

// sampleData.then(realResult => { 
//     console.log('realResult:', realResult) 
// })
