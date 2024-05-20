const bag = {
  name: "Furla-Nuvola",
  color: "white",
  type: "schoulder bag",
  price: 425,
  img: "./img/bag.jpg",
};
let displayProduct = document.querySelector(".displayProduct");

function createImg() {
  let image = document.createElement("img");
  image.setAttribute("src", "./img/bag.jpg");
  image.setAttribute("width", 200);
  image.setAttribute("height", 250);
  displayProduct.append(image);
  displayProduct.innerHTML += `<h1>${bag.name}</h1>
<div>
<p>${bag.color}</p>
<p>${bag.type}</p>
<p>${bag.price}</p>
</div>
`;
}
createImg();

//je hebt een beetje onhandig gedaan met de afbeelding ik zal je laten zien hoe het makkelijker gaat.
//je hebt de functie createImg ook niet nodig.

displayProduct.innerHTML += `
  <h1>${bag.name}</h1>
  <div>
    <p>${bag.color}</p>
    <p>${bag.type}</p>
    <p>${bag.price}</p>
    //dit is het enige ;)
    <img src="${bag.img}"> 
  </div>
  `;
