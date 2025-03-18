// JavaScript is an asynchronous language
// very easy we can write asynchronous code
// what is biggest advantage of asynchronous code in JS?

// - we can write code that will make requests in backend, when page is responsive
// so we can run multiple tasks at once!

// Remember that JS was first used in HTML pages!

// Async functions are best for long operations such as:
// - reading files
// - sending request in REST API
// - operations on database
// - many more

// We can run such async function, and in meantime we can do other quick tasks.
// When async function is finished, then the result will be presented.
// ... but how?


// Lets see how to use async functions
// Here is an example of async function, that after 2s will return some value:

import { loadUserData, loadUserDataSync } from "./8.async.helpers.js"


// when we have async function and we use it as normal function, we wont get valid result.

// First lets use sync function:

console.log('calling sync function:')
const sampleData = loadUserDataSync()
console.log('sampleData:', sampleData)

console.log('--------------------------------------')

// Now lets see how async function will behave:

// uncomment code below to check async:
// console.log('calling async function without await:')
// const sampleDataFromAsync = loadUserData()
// console.log('sampleDataFromAsync:', sampleDataFromAsync)

console.log('Finished!')

// it will return following result on console:

// calling async function without await...
// loadUserData: entering function
// loadUserData: entering Promise and waiting for 2 seconds...
// sampleData: Promise { <pending> }
// loadUserData: Promise done - returning value!




