<<<<<<< Updated upstream
let output = document.querySelector(".output");
let out = " ";
fetch("https://dragonball-api.com/api/characters")
  .then((response) => response.json())
  .then((cars) => { //altijd clg cars
    // loop door array met objecten
    for (let car of cars) {
      out += `
    <h2>${car.brand}</h2>
    <h3>${car.model}</h3>
=======
let output = document.querySelector(".cars");
let out = "";

fetch("./cars.json")
  .then((response) => response.json())
  .then((cars) => {
    for (let car of cars) {
      out += `
        <h2>${car.name}</h2>
        <p>${car.model}</p>
        <p>${car.weight}</p>
        <p>${car.color}</p>
>>>>>>> Stashed changes
    `;
    }
    output.innerHTML = out;
  });
