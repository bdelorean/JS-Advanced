const person = {
  name: "Bianca",
  age: 25,
  height: 1.7,
  weight: "60kg",
  talk: function () {
    return "Ik ben aan het praten";
  },
  run: function () {
    return "Ik ben aan het rennen";
  },
  rename: function (newName) {
    return (this.name = newName); //zonder 'this'hij zal kijken buiten object ...dus met this kijkt hij binnen object
  },
  introduceSelf: function () {
    return `Hoi mijn naam is ${this.name} en ik ben ${this.age} jaar oud`; //omdat ik nog in object zit moet ik this gebruiken en niet person.name...zit je buiten het object dan doe je person.name
  },
  hobby: ["lezen", "singen", "skaten", "wandelen"],
  pushHobby: function (newHobby) {
    this.hobby.push(newHobby);
  },
  alive: true,
  changeLiveStatus: function () {
    return (this.alive = false);
  },
};
console.log(person.introduceSelf());
person.rename("koe");
console.log(person.name);
console.log(person.introduceSelf());
let outputPerson = document.querySelector(".outputPerson");
person.pushHobby("dansen");
console.log(person.hobby);

outputPerson.innerHTML += `<h1>Ik ben ${person.height} m lang</h1>
<p> ${person.introduceSelf()}</p>
<p>${person.hobby}</p> 
<p>${person.alive}</p>
<p>${person.changeLiveStatus()}</p>
<p>${person.hobby}</p>`; //zo kan jij de content van een functie laten zien

const newPerson = {
  //sprean operator == kopieer alles van het object person ( ...)
  ...person,
  name: "Sanne", // veranderen de naam van de eerste object
  height: 1.9, //ook height
};

outputPerson.innerHTML += `
<div>
<h1>Ik ben ${newPerson.height} m lang</h1>
<p> ${newPerson.introduceSelf()}</p>
</div>`;
