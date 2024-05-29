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
    `;
    }
    output.innerHTML = out;
  });
