// Block Scope Example
if (true) {
    var blockVariable = "var variable in block";
    console.log(blockVariable); // Displays "var variable in block"
}

console.log('Outside block:', blockVariable); // ✅ May display "var variable in block" because we use 'var'

// Using 'let' for Block Scope
if (true) {
    let blockLetVariable = "let variable in block";
    console.log(blockLetVariable); // Displays "let variable in block"
}

// The following line would cause an error because 'blockLetVariable' is not accessible outside the block.
// console.log(blockLetVariable); // ❌ uncomment to see error: blockLetVariable: localVariable is not defined

// Using 'const' for Block Scope
if (true) {
    const blockConstVariable = "const variable in block";
    console.log(blockConstVariable); // Displays "const variable in block"
}

// The following line would cause an error because 'blockConstVariable' is not accessible outside the block.
// console.log(blockConstVariable); // ❌ uncomment to see error: ReferenceError: blockConstVariable is not defined