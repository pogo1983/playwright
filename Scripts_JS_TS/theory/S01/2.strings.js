// lets declare 2 strings:

const string1 = 'Hello'
const string2 = 'World!'

// You can concat strings with '+':
let stringsConcat = string1 + string2
let stringsWithSpace = string1 + ' ' + string2

// We can use console.log to print their values:
console.log('stringsConcat:', stringsConcat)
console.log('stringsWithSpace:', stringsWithSpace)

// on console You will get:
// stringsConcat: HelloWorld!
// stringsWithSpace: Hello World!


// ...but You can concat strings with template literals:
console.log(`Hello my dear ${string2}!`)
// on console You will get:
// Hello my dear World!!

// This is useful with multiple parameters or longer sentences


// Sometimes we want to append (add) a string to existing one.
// Lets see an example:
let dogStatus = 'Healthy'

// to modify value of dogStatus and to add another string we can use:
dogStatus += ' and resting!'
// lets see on console the result:
console.log('dogStatus:', dogStatus)

// on console You will get:
// dogStatus: Healthy and resting!




// what about '' and "" and `` ?
// we can use any of above for strings, and there is no best or worst method
// just be consistent in Your approach! ;)

// with different quotes we can create more complex expressions:
let name = 'Jan said: "oh right!"'
// but remember: only outside quotes are used to declare string! so in this case - it is single quote (')
