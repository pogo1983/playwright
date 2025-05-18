// Your task:
// 1. Write code to create a text file called "ex3.txt" in current directory
// 2. Write text: "Hello jaktestowac.pl!" to file "ex3.txt"
// 3. Write code to read content of created file "ex3.txt"
// 4. Display content of that file on console.


// to test your solution in terminal You can run following command:
// npm run es3e3

//// TODO:
// here place your solution:
import { readFileSync, writeFileSync, appendFileSync } from 'fs'
const jsonData = {
'name':'Pogo',
'age': 42,
'hair': 'black'
}
writeFileSync('./Scripts_JS_TS/exercises/S03/ex3.txt', 'Hello Pogo jaktestowac.pl!')

writeFileSync('./Scripts_JS_TS/exercises/S03/pogo.json', JSON.stringify(jsonData))

const newData = readFileSync('./Scripts_JS_TS/exercises/S03/ex3.txt', {encoding:'utf8'})
console.log(newData)

const newJsonDataRead= readFileSync('./Scripts_JS_TS/exercises/S03/pogo.json', {encoding:'utf8'})
console.log(JSON.parse(newJsonDataRead))
console.log(`Hello my Name is ${newJsonDataRead.name} and I am ${newJsonDataRead.age} years old`)














//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise and verification!


// Expected output:
// Hello jaktestowac.pl!