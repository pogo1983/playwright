// to read file we need to import methods from fs module:
import { readFileSync, readFile, writeFileSync } from 'fs'
// fs module is build in node.js so we dont need to install anything!

// readFileSync - it is used for synchronous reading from files
// writeFileSync - it is used for synchronous writing and creation of files
// readFile - it is used for asynchronous reading from files
// writeFile - it is used for asynchronous writing and creation of files

// In 99% cases in tests You will use readFileSync and writeFileSync

console.log('----------------------------------------------------')
console.log('Using readFileSync to read txt file content:')

const dataFromFileSync = readFileSync('theory/S03/sample-data-file.txt')
console.log(dataFromFileSync)
// it will return following result on console:
// <Buffer 53 6f 6d 65 20 73 61 6d 70 6c 65 20 64 61 74 61 20 77 72 69 74 74 65 6e 20 69 6e 20 66 69 6c 65 2e 0d 0a 48 65 6c 6c 6f 20 77 6f 72 6c 64 21>


console.log('----------------------------------------------------')
console.log('Using readFileSync with utf8 to read txt file content:')

// to have readable output we have to add proper encoding:
const dataFromFileAsUtf8 = readFileSync('theory/S03/sample-data-file.txt', {encoding:'utf8'})
console.log(dataFromFileAsUtf8)
// it will return following result on console:
// Some sample data written in file.
// Hello world!

console.log('----------------------------------------------------')
console.log('Using readFileSync with utf8 to read json file content:')

// we can also read JSON files:
const jsonFromFile = readFileSync('theory/S03/sample-file.json', {encoding:'utf8'})
console.log(jsonFromFile)
// it will return following result on console:
// {
//     "name": "Dale Cooper",
//     "age": 44,
//     "hair": "black",
//     "height": 182,
//     "weight": 70,
//     "occupation": { "previous": "Deputy", "current": "FBI Special Agent" },
//     "friends": ["Harry S. Truman", "Hawk"]
// }


// after reading JSON content we can convert it to JavaScript object:
const jsonObject = JSON.parse(jsonFromFile)

// now we can use it as JavaScript object:
console.log('Name from JSON object:', jsonObject['name'])
// it will return following result on console:
// Name from JSON object: Dale Cooper
