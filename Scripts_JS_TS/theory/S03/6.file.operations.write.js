// to write to file we need to import methods from fs module:
import { readFileSync, writeFileSync, appendFileSync } from 'fs'
// fs module is build in node.js so we dont need to install anything!

// readFileSync - it is used for synchronous reading from files
// writeFileSync - it is used for synchronous writing and creation of files
// readFile - it is used for asynchronous reading from files
// writeFile - it is used for asynchronous writing and creation of files

// In 99% cases in tests You will use readFileSync and writeFileSync

console.log('----------------------------------------------------')
console.log('Using writeFileSync to create and write to txt file:')


let sampleData = 'test data: ' + Math.random()
console.log(sampleData)
writeFileSync('theory/S03/new-data-file.txt', sampleData)
appendFileSync('theory/S03/new-data-file.txt', sampleData)
// now file new-data-file.txt should be created in S03

console.log('----------------------------------------------------')
console.log('Using readFileSync with utf8 to read txt file content:')

// to have readable output we have to add proper enconding:
const dataFromFileAsUtf8 = readFileSync('theory/S03/new-data-file.txt', {encoding:'utf8'})
console.log(dataFromFileAsUtf8)


console.log('----------------------------------------------------')
console.log('Using writeFileSync to create and write to json file:')
const sampleJsonData = {
    "name": "Dale Cooper",
    "age": 44,
    "hair": "black",
    "height": 182,
    "weight": 70,
    "occupation": { "previous": "Deputy", "current": "FBI Special Agent" },
    "friends": ["Harry S. Truman", "Hawk"]
}

// we cant use writeFileSync to save JSON:
// writeFileSync('theory/S03/new-data-file2.json', sampleJsonData)
// because we will get error:
// TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Object
//     at writeFileSync (node:fs:2150:5)

writeFileSync('theory/S03/new-data-file.json', JSON.stringify(sampleJsonData))
const dataFromJsonFileAsUtf8 = readFileSync('theory/S03/new-data-file.json', {encoding:'utf8'})
console.log(JSON.parse(dataFromJsonFileAsUtf8))