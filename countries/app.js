let output = document.querySelector(".output");
let out = "";

fetch(`https://restcountries.com/v3.1/all/`)
  .then((response) => response.json())
  .then((countries) => {
    for (let country of countries) {
      console.log(country);
      out += `<div class="container">
    <h1>${country.name.common}
    </h1>
    <img src = ${country.flags.svg}>
    </div>`;
    }
    output.innerHTML = out;
  });
