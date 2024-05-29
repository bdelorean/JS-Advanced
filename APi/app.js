let output = document.querySelector(".output");
let out = "";

fetch(`https://dragonball-api.com/api/characters`) //alle info van deze link wordt in var characters opgeslagen
  .then((response) => response.json())
  .then((characters) => {
    //dau o variabila in cazul asta character ca sa salvez toate informatiile din link
    for (let character of characters.items) {
      console.log(characters.items);
      //for loop altijd
      out += `<div class="container"> 
      <h1>${character.name}</h1>
      <img src = "${character.image}">
      </div>
      
      `;
    }
    output.innerHTML = out;
  });
