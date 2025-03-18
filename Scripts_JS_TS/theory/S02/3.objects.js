// Objects in JavaScripts are for storing values
// They are similar to arrays, but we can name fields and values

const simpleObject = {
    propertyName: 1,
    otherPropertyName: 'some other value'
}

// lets see real life example:

const human = {
    name: 'Dale Cooper',
    age: 40,
    hair: 'black',
    height: 182,
    weight: 70
}

// data are easily stored and named

console.log('base human:', human)
// it will return following result on console:
// base human: {
//     name: 'Dale Cooper',
//     age: 40,
//     hair: 'black',
//     height: 182,
//     weight: 70
// }



// to get only one property value we have to use operator []:
console.log('name:', human['name'])
// it will return following result on console:
// name: Dale Cooper



// we can replace value of any property also by using []:
human['age'] = 44

console.log('human after age change:', human)
// it will return following result on console:
// human after age change: {
//     name: 'Dale Cooper',
//     age: 44,
//     hair: 'black',
//     height: 182,
//     weight: 70
// }



// we can add new property also by using []:
human['occupation'] = 'FBI Special Agent'

console.log('human after adding occupation:', human)
// it will return following result on console:
// human after adding occupation: {
//     name: 'Dale Cooper',
//     age: 44,
//     hair: 'black',
//     height: 182,
//     weight: 70,
//     occupation: 'FBI Special Agent'
// }


// we can add/change new property that is another object:
const occupation = {
    'previous': 'Deputy',
    'current': 'FBI Special Agent'
}
human['occupation'] = occupation

console.log('human after changing occupation:', human)
// it will return following result on console:
// human after changing occupation: {
//     name: 'Dale Cooper',
//     age: 44,
//     hair: 'black',
//     height: 182,
//     weight: 70,
//     occupation: { previous: 'Deputy', current: 'FBI Special Agent' }
// }



// to get only one property value we have to use operator []:
console.log('current occupation:', human['occupation']['current'])
// it will return following result on console:
// FBI Special Agent



// we can add new property that is an Array:

const friends = ['Harry S. Truman', 'Hawk']
human['friends'] = friends

console.log('human after adding friends:', human)
// it will return following result on console:
// human after changing occupation: {
//     name: 'Dale Cooper',
//     age: 44,
//     hair: 'black',
//     height: 182,
//     weight: 70,
//     occupation: { previous: 'Deputy', current: 'FBI Special Agent' }
//     friends: ['Harry S. Truman', 'Hawk']
// }




// we can also create an array of objects:
const dale = {
    name: 'Dale Cooper',
    age: 40,
}
const harry = {
    name: 'Harry S. Truman',
    age: 39,
}
const hawk = {
    name: 'Tommy "Hawk" Hill',
    age: 41,
}

// then we create an array:
const department = [dale, harry, hawk]

console.log('Sheriffs Department:', department)
// it will return following result on console:
// Sheriffs Department: [
//     { name: 'Dale Cooper', age: 40 },
//     { name: 'Harry S. Truman', age: 39 },
//     { name: 'Tommy "Hawk" Hill', age: 41 }
// ]


// to get only one object form the list we have to use operator []:
console.log('Second person from Department:', department[1])
// it will return following result on console:
// Second person from Department: { name: 'Harry S. Truman', age: 39 }

// to get objects property we have to use double []:
console.log('Name of second person from Department:', department[1]['name'])
// it will return following result on console:
// Name of second person from Department: Harry S. Truman