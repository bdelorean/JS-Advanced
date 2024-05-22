let output = document.querySelector(".persons");
let out = "";

fetch("./persons.json")
  .then((response) => response.json())
  .then((persons) => {
    out += `
    <h1 class="titel">You have ${persons.length} birthdays today</h1>`; // buiten for loop plaatsen anders krijg je bij elk object die titel

    for (let person of persons) {
      out += `
     
      <div class = "person-display">
        <div>
       <img class = "person-img" src = "${person.img}">
       </div>
       <div class = "person-info">
        <h2>${person.name}</h2>
        <p>${person.age}</p>
        </div>
        </div>
        
        `;
    }
    out += `<button class="btn">Clear all</button>`; // na het for loop plaatsen want je wilt het onder objecten  hebben
    output.innerHTML = out;
    document.querySelector(".btn").addEventListener("click", () => {
      output.innerHTML = "";
    });
  });
