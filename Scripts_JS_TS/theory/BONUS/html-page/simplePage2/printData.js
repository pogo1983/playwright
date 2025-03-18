const names = ['Bob', 'Dale', 'Laura', 'Audrey', 'Margaret', 'Harry', 'Leland', 'Ed', 'Tommy']
const human = {
    name: 'Dale Cooper',
    age: 40,
    hair: 'black',
    height: 182,
    weight: 70
}

console.log('We are running printArrays.js!')

// change value of element on page:
const formattedElement = document.getElementById("formatted")
names.forEach(name => {
    formattedElement.textContent += ` ${name}; `
});

const arrayElement = document.getElementById("array")
arrayElement.textContent = names

const objectElement = document.getElementById("object")
objectElement.textContent = human

const objectStringifyElement = document.getElementById("objectStringify")
objectStringifyElement.textContent = JSON.stringify(human)

const nameElement = document.getElementById("name")
nameElement.textContent = human['name']

const value = Math.random()
const randomElement = document.getElementById("random")
randomElement.textContent = value

const ifCheckElement = document.getElementById("ifCheck")
if (value > 0.5) {
    ifCheckElement.textContent = 'Random value was above 0.5!'
} else {
    ifCheckElement.textContent = 'Random value was below 0.5!'
}


