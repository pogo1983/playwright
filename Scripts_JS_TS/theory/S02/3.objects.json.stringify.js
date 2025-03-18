// to run this script use following command:
// npm run ts2e3b

// This is object in JS:
const simpleObject = {
    propertyName: 1,
    otherPropertyName: 'some other value'
}

console.log('Result of console.log(simpleObject):')
// to display it on console we can use console.log:
console.log(simpleObject)
// on console You will get:
// { propertyName: 1, otherPropertyName: 'some other value' }

console.log('----------------------------------------------------')
console.log('Result of console.log("simpleObject: " + simpleObject):')
// to display it on console we can use console.log:
console.log('simpleObject: ' + simpleObject)
// on console You will get:
// simpleObject: [object Object]

// that means that JS have a trouble with displaying object as a string on console!


console.log('----------------------------------------------------')
console.log('Result of console.log("simpleObject: " + JSON.stringify(simpleObject)):')
// to fix displaying objects on console You can use JSON.stringify:
console.log('simpleObject: ' + JSON.stringify(simpleObject))
// on console You will get:
// simpleObject: { propertyName: 1, otherPropertyName: 'some other value' }