// Simple for loop looks like this:

for (let index = 0; index < 3; index++) {
  console.log("index:", index);
}

// it will return following result on console:
// index: 0
// index: 1
// index: 2

// Loops are useful to do certain action for N times or to iterate through an array

const anArray = [1, 4, "test", false];

for (let index = 0; index < anArray.length; index++) {
  const element = anArray[index];
  console.log("element:", index, element);
}

// it will return following result on console:
// element: 0 1
// element: 1 4
// element: 2 test
// element: 3 false

// foreach is also a loop, and its mostly used to iterate through an array:
anArray.forEach((element) => {
  console.log("forEach element:", element);
});

// it will return following result on console:
// forEach element: 1
// forEach element: 4
// forEach element: test
// forEach element: false

// Expression "element =>" is shorter declaration of function:
anArray.forEach(function (element) {
  console.log("forEach element:", element);
});

// it will return following result on console:
// forEach element: 1
// forEach element: 4
// forEach element: test
// forEach element: false
