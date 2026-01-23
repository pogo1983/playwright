const colors = ["czerwony", "zielony", "niebieski"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // "czerwony"
console.log(secondColor); // "zielony"
console.log(thirdColor);  // "niebieski"

//pomijanie elementow
const [, , thirdColor2] = colors;

console.log(thirdColor2); // "niebieski"

//domyslne wartosci
const numbers = [1, 2];

const [a = 10, b = 20] = numbers;

console.log(a); // 1
console.log(b); // 2


//zagniezodzone tablice
const coordinates = [
  [1, 2],
  [3, 4],
];

const [[x1, y1], [x2, y2]] = coordinates;

console.log(x1, y1); // 1 2
console.log(x2, y2); // 3 4

//zmiana wartosci zmiennych
let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(x); // 10
console.log(y); // 5


//Przykład 1: Podstawowa destrukturyzacja stringu
const greeting = "Cześć";

const [firstChar, secondChar, ...restChars] = greeting;

console.log(firstChar);  // "C"
console.log(secondChar); // "z"
console.log(restChars);  // ["e", "ś", "ć"]


//Przykład 2: Destrukturyzacja w funkcji
function getInitials(fullName) {
  const [firstName, lastName] = fullName.split(" ");
  const [firstInitial] = firstName;
  const [lastInitial] = lastName;
  return `${firstInitial}.${lastInitial}.`;
}

console.log(getInitials("Jan Kowalski")); // "J.K."


//przypisanioe do pozostalych elementow tablicy
const person = {
    name : "Pogo",
    age: 42,
    hair: "black",
    height: 180
};

const {nationality="Polish"}= person
console.log(person)
console.log(nationality)

//to add wartosc do obiektu
person.nationality = "Polska";
// lub
//person = { ...person, nationality: "Polska" };//but here must be let person =....
console.log(person)
person.age=43// for person = {age:43} let must be used not const
console.log(person)
