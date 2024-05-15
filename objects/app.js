let marvels = ["film1", "film2", "film3", "film4"];
const addMarvels = () => {
  marvels.push("film5");
};
addMarvels();
for (let marvel of marvels) {
  console.log(marvel);
}
