// Your task:
// 1. Create new array with 3 elements: 'abc', 'def' and 'gh'
// 2. Add new element to array: 'xyz'
// 3. Print on console whole array
// 4. Concat (join) your array with new one: [1, 2, 3]
// 5. Print on console new array
// 6. Replace third ([2]) item in array with new value '555'
// 7. Print on console new array

// to test your solution in terminal You can run following command:
// npm run es1e6

//// TODO:
// here place your solution:

let arrayTest = ['abc','def','gh']
arrayTest.push('xyz')
console.log(arrayTest)
let arrayTest2=[1,2,3] 
let arrayTest3=arrayTest.concat(arrayTest2)
console.log(arrayTest3)
arrayTest3[2]=555
console.log(arrayTest3)

//arrays with loops
let animals = ['dog', 'cat', 'rabbit'];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

for (let animal of animals) {
  console.log(animal);
}

animals.forEach(function(animal) {
  console.log(animal);
});






//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

// Expected output:
// On console You should get:
// ['abc', 'def', 'gh', 'xyz']
// ['abc', 'def', 'gh', 'xyz', 1, 2, 3]
// ['abc', 'def', '555', 'xyz', 1, 2, 3]