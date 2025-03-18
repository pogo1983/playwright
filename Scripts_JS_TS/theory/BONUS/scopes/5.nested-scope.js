// Nested Functions and Scopes
function outerFunction() {
    var outerVariable = "Outer variable";

    function innerFunction() {
        console.log('innerFunction:', outerVariable);
    }

    innerFunction(); // Displays "innerFunction: Outer variable"
    console.log('outerFunction:', outerVariable); // Displays "outerFunction: Outer variable"
}

outerFunction();

// The following line would cause an error because 'outerVariable' is not accessible outside the function block.
// console.log(outerVariable) // ❌ uncomment to see error: ReferenceError: outerVariable is not defined