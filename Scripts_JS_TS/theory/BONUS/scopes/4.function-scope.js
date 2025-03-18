// Function Parameters Scope
function add(a, b) {
    const result = a + b;
    console.log(result);
}

add(2, 3); // Displays 5

// The following line would cause an error because 'result' is not accessible outside the function block.
// console.log(result) // ❌ uncomment to see error: ReferenceError: result is not defined