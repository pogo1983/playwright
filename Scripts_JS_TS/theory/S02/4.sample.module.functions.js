function printArrayOnConsoleWithForeach(array) {
    array.forEach(element => {
        console.log('printArrayOnConsoleWithForeach:', element)
    });
}

function printArrayOnConsoleWithFor(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log('printArrayOnConsoleWithFor:', element)
    }
}

const userName = 'sample.user@test.test'

// if You want to export multiple object at once - use following construction:
export { printArrayOnConsoleWithForeach, printArrayOnConsoleWithFor, userName}