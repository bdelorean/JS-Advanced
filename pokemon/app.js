let output = document.querySelector(".output");
let out = "";
fetch("./pokemons.json")
  .then((response) => response.json())
  .then((pokemons) => {
    for (let pokemon of pokemons) {
      out += `<div class="container d-flex flex-column justify-content-center align-items-center">
        <img src = "${pokemon.img}" >
        <h1>${pokemon.name}</h1>
        </div>
        `;
    }
    output.innerHTML = out;
  });
