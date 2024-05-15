const car = {
  //properties = eigenschappen van een object
  brand: "Audi",
  color: "Red",
  model: "Q2",
  bouwjaar: 2024, //number zonder " " schrijven
  //methods = functionaliteiten van een object
  drive: function () {
    return "I am driving";
  },
  //maak een methode genaamd brake en return de tekst 'I am brake'
  brake: function () {
    return "I am brake";
  },
};

console.log(car.brand);
console.log(car.color);
console.log(car.model);
console.log(car.brake());

let output = document.querySelector(".output");
output.innerHTML = 
 `<h1> De naam van de auto is: ${car.brand} </h1>
 <p>Het model van de auto is: ${car.model}</p>
 `;
