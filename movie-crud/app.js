const moviesContainer = document.querySelector("#movies-container");
const movieURL = `http://localhost:3000/movies`;
const movieForm = document.querySelector("#movie-form");

fetch(`${movieURL}`)
  .then((response) => response.json())
  .then((movies) => {
    let out = "";
    for (let movie of movies) {
      out += `
<div id="single-movie">
<img src="./img/${movie.img}" width="300" height="400"/>
<h3> ${movie.title}</h3>
<p>Year: ${movie.year}</p>
<p> ${movie.rating}</p>
<button data-id="${movie.id}" data-action="edit">Edit</button>
<button data-id="${movie.id}" data-action="delete">Delete</button>
</div>
`;
    }
    moviesContainer.innerHTML = out;
  });
movieForm.addEventListener("submit", () => {
  const titleInput = movieForm.querySelector("#title").value;
  const yearInput = movieForm.querySelector("#year").value;
  const imageInput = movieForm.querySelector("#coverImage").value;
  console.log(imageInput);
  const ratingInput = movieForm.querySelector("#rating").value;

  fetch(`${movieURL}`, {
    method: 'POST',
    body: JSON.stringify({
    title: titleInput,
    year: yearInput,
    img: imageInput,
    rating: ratingInput,
    }),
    headers: {
    'Content-Type': 'application/json',
    },
    });
    
});
