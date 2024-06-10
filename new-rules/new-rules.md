# New Rules JavaScript
## Functions

```
//normal function
function changeName{
    
}
//arrow function
const changeName = () => {

}
```
## For loop 
//oude manier
let cars = ['Bmw','Audi','Vw']
console.log(cars[1])// hij gaat de Audi laten zien
Om alle elementen onder elkaar te laten zien moet een for loop gebruiken 
```
for(let i=0; i < cars.length; i++){
    console.log(cars[i]);
 }

```
### for-of loop 
//nieuwe manier
```
for(let car of cars){
    console.log(car)
}
``````
// elke element van de array krijgt tijdelijk de naam 'car' dus hij gaat elke rond een element van de array laten zien //