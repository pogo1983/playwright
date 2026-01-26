//zad 1
const car = {
  brand:"Toyota",
  model:"Corolla",
  year:2020

}

const{brand,model,year}=car

console.log(brand)
console.log(model)
console.log(year)

//bez destrukturyzacji
const car2 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

// Bez destrukturyzacji - tradycyjnie:
const brand2 = car2.brand;
const model2 = car2.model;
const year2 = car2.year;

console.log(brand2);  // "Toyota"
console.log(model2);  // "Corolla"
console.log(year2);   // 2020


//zadanie 2
//destrukturyzacja tablic
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


//zadanie 3 zagniezodzona destrukturyzacja obiektow
const student = {
  name: "Ewa",
  address: {
  city: "Warszawa",
  street: "Miodowa"
  }
};

const { address: { street } } = student;

console.log(street); // "Miodowa"

//tradycyjnie bez destrukturyzacji
const street2 = student.address.street;
console.log(street2);  // "Miodowa"


//zadanie§4 destrukturyzacja w funkcji
function displayCarInfo({ brand, model, year }) {
  console.log(brand);  // "Toyota"
  console.log(model);  // "Corolla"
  console.log(year);   // 2020
}

const car3 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

displayCarInfo(car3);