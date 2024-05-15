const book = {
  titel: "I hid my voice",
  autor: "Parinoush Saniee",
  publisher: "Polirom",
  year: 2004,
  sales: 1458752,
  price: "25$",
};
let outputBooks = document.querySelector(".outputBooks");
outputBooks.innerHTML = `
<p>De titel van het book is: ${book.titel}</p>
<p>De autor van het book is: ${book.autor}</p>
<p>De publisher van het book is: ${book.publisher}</p>
<p>De year van het book is: ${book.year}</p>
<p>De sales van het book are: ${book.sales}</p>
<p>De price van het book is: ${book.price}</p>
`;
