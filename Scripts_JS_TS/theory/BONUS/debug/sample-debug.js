import { arrayPrinter } from "./helper.js"

// to run this script You can use following command in terminal:
// npm run tdebug

const userName = 'Josh'
const userSurname = 'Spam'
const names = ['Bob', 'Dale', 'Laura', 'Audrey', 'Margaret', 'Harry', 'Leland', 'Ed', 'Tommy']

console.log(userName)

for (let index = 0; index < names.length; index++) {
    const name = names[index]
    console.log('for:', index, name)
}

names.forEach(name => {
    console.log('forEach:', name)
});

const fullName = getFullName(userName, userSurname)
console.log('fullName:', fullName)

const otherFullName = getFullName('Dale', 'Cooper')
console.log('otherFullName:', otherFullName)


arrayPrinter(names)


console.log('Thats all folks!')


function getFullName(name, surname) {
    return `${name} ${surname}`
}
