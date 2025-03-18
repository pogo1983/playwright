let clearDatabase = 1

console.log('clearDatabase === 1 is:', clearDatabase === 1)

// in if we check if condition is true
if (clearDatabase === 1) {
  console.log('Database was cleared!')
} else {
  console.log('Database was not cleared!')
}

// Why we should use '===' instead of '=='?
// its more strict - eg.
// 1 === 1 will return true
// 1 === true will return false
// but...
// 1 == 1 will return true
// 1 == true will return... true!
// This one is complicated and in next lesson we will talks about it more.

// FOR NOW LETS ONLY USE '==='

// We can declare multiple cases:
let someNumber = 1

if (someNumber < 0) {
  console.log('someNumber < 0')
} else if (someNumber === 1) {
  console.log('someNumber is 1')
} else {
  console.log('someNumber > 1')
}

// If we have multiple cases... then we can use switch:
let someOtherNumber = 1

switch (someOtherNumber) {
  case 1:
    console.log('someOtherNumber is 1')
    break
  case 2:
  case 3:
    console.log('someOtherNumber is 2 or 3')
    break
  default:
    console.log('someOtherNumber is unknown (neither 1, 2 nor 3)')
}
// ... but in switch we can not use '>' or '<'!

// articles and links:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
