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

//
const employee = {
  id: 1,
  name: "Jan",
  position: { title: "Developer", department: "IT" },
};

const {
  position: { title, department },
} = employee;

console.log(title);    // "Developer"
console.log(department); // "IT"

//Przykład 3: Destrukturyzacja w parametrach funkcji
// ❌ Tradycyjnie - musisz pamiętać kolejność!
function createUser(name, age, email, city, country, phone) {
  // ...
}
createUser("Jan", 30, "jan@example.com", "Warsaw", "Poland", "123456");
// Jaka była kolejność? Który parametr to co?

// ✅ Z destrukturyzacją - nie ważna kolejność!
function createUserDestr({ name, age, email, city, country, phone }) {
  console.log(name, age);
}
createUser({ 
  email: "jan@example.com",
  name: "Jan",  // kolejność nie ma znaczenia!
  age: 30,
  phone: "123456",
  city: "Warsaw",
  country: "Poland"
});



// Wyjaśnienie:
// BEZ destrukturyzacji
function createUser2(options) {
  const result = options.name + options.age;  // options.name, options.age
  return result;
}

// Z destrukturyzacją
function createUser3({ name, age }) {
  const result = name + age;  // bezpośrednio name, age
  return result;
}

// Wywołanie jest identyczne dla obu!
createUser2({ name: "Jan", age: 30 });
createUser3({ name: "Jan", age: 30 });
console.log(createUser2({ name: "Jan", age: 30 }));
console.log(createUser3({ name: "Jan", age: 30 })); 

const wynik = createUser2({ name: "Jan", age: 30 })
console.log(wynik);
const wynik2 = createUser3({ name: "Jan", age: 30 })
console.log(wynik2);
//console.log(`Wynik to: ${name} i ${age} lat`);

//z ladnym formatowaniem wyniku i wieksza ilsocia zwracanych danych
function createUser4({ name, age }) {
  const result = name + age;  // bezpośrednio name, age
  return {result, name, age};
}
const wynik4 = createUser4({ name: "Jan", age: 30 })
console.log(`Wynik to: ${wynik4.name} \
i ${wynik4.age} lat i ${wynik4.result} jako suma!`);


//uzycie spread operatora do przypisania pozostalych wartosci obiektu
const person2 = {
  firstName: "Anna",
  lastName: "Kowalska",
  age: 30,
};
const { firstName, ...otherDetails } = person2;

console.log(firstName);  // "Anna"
console.log(otherDetails); // { lastName: "Kowalska", age: 30 }

//destrukturyzacja tablic
const colors2 = ["czerwony", "zielony", "niebieski"];

const [firstColor2, secondColor2, thirdColor3] = colors2;

console.log(firstColor2);  // "czerwony"
console.log(secondColor2); // "zielony"
console.log(thirdColor3);  // "niebieski"


//pomijanie elementow
const [, , thirdColor4] = colors2;

console.log(thirdColor4); // "niebieski"