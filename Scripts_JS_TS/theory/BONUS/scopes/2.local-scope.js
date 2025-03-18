// Local Scope Example
function anotherFunction() {
    const localVariable = 5;
    console.log(localVariable);
}

anotherFunction(); // Displays 5

// You can not access localVariable:
// console.log(localVariable); // ❌ uncomment to see error: ReferenceError: localVariable is not defined