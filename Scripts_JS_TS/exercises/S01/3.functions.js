// Your task:
// 1. Create new function with two parameters
// 2. Inside this function multiply both parameters passed to this function
// 3. Function must return the result of multiplication
// 4. Print the result using console.log
// 5. Create readable names for variables and function

// to test your solution in terminal You can run following command:
// npm run es1e3

// TIP: To multiply two values use operator '*', so eg. '2 * 4' returns 8

//// TODO:
// here place your solution:

function multiplyNumbers (number1,number2){
    return number1 * number2;
}

const result= multiplyNumbers(3,7);
console.log (`Result of multiplication: ${result}`);
console.log (`Result of multiplications is: ${multiplyNumbers(3,8)}`)


//JS closure function

function createLogger(prefix) {
    // Zwracamy nową funkcję
    return function (message) {
      console.log(prefix + ": " + message);
    };
  }
  
  
  // Tworzymy dwie różne funkcje-loggery
  const infoLogger = createLogger("INFO");
  const errorLogger = createLogger("ERROR");
  
  
  // Użycie
  infoLogger("To jest wiadomość informacyjna");
  infoLogger("To jest nowa wiadomość");
  errorLogger("To jest komunikat o błędzie");

//
//next variations:
function createFilterGreater(filteredValue) {
    return (element) => element > filteredValue;
  }
  
  function createFilterLess(filteredValue) {
    return (element) => element < filteredValue;
  }
  
  const greaterThan10 = createFilterGreater(10);
  
  const array = [10, 13, 23, -4, 9];
  
  console.log(array.filter(greaterThan10)); // [ 13, 23 ]
  console.log(array.filter(createFilterGreater(10))); // [ 13, 23 ]
  
  console.log(array.filter(createFilterGreater(20))); // [ 23 ]
  
  console.log(array.filter(createFilterLess(20))); // [ 10, 13, -4, 9 ]

//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

// Expected output:
// After passing values 3 and 7 as a result on console You should display:
// Result of multiplication: 21
