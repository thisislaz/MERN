//------------ .map() --------------
//map makes a copy of an array and applys our own twist to it
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
//this takes a list of items and returns an array of strings resembling html "list items"

//map with numbers
const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
console.log(cubes);
//this creates a lsit of cubed numbers [1, 8, 27, 64, 125]
//map is a function that appliesa callback function to each item in an array and returns that new array

//------------ .filter() --------------
//get an array with only some of the values, we can do something similar andf provide a callback function
//this time one that returns true if we want the value or false if we dont
const valuesNew = [1, 2, 3, 4, 5];
const evens = valuesNew.filter( val => val % 2 === 0 );
console.log(evens);

//if we want only the grocerires with the letter "o"
const groceriesNew = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceriesNew.filter( item => item.includes("o") );
console.log(oFoods); 

//we can do anything with that callback function as long as it returns true or false
//we can also chain filter and map together, putting filter first
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log(oddCubes); 