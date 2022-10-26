//Object.freeze()
const arr = [1,2,3,4,5];
arr.push(300); //even though arr is declared with const we can still push new values into it

//inorder to prevent this we can use Object.freeze()
const newArr = Object.freeze([1,2,3,4,5]);
newArr.push(300);//we're no longer allowed to change newArr

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);

//if we decide to add "thyme", we can use spread to make a COPY of the list and add "thyme" to it
const needThyme = [ ...groceryList, {"item":"thyme", "haveIngredient": false} ];
//the ...groceryList(spread) is making us a copy of the objects
//then we declare an array with  a new "thyme" object

//---------------- concat() --------------------
//we can also use .concat() to glue together the arrays and recievce a new one
const needThymeYet = groceryList.concat( [ { "item":"thyme", "haveIngredient": false } ] );

//---------------- Slice() --------------------
// if we already have thyme and want to set it to true
const gotTheThyme = [ ...needThyme.slice(0,5), { ...needThyme[5], "haveIngredient": true}]
//slice is a function that can take 2 parameters and return an array of the values that have indexes between those two parameters.
//followed by a comma and a new object
//inside the new object we use spread operator to copy over the attributes fromn the ingredient at index 5 and overwrite its haveIngredient key top be true

//removing celery
const notNeceCelery = [ ...gotTheThyme.slice(0,2), ...gotTheThyme.slice(3)];
//the first slice is getting us the ingredients at indexes 0 and 1
//the second slice is giving us all the ingredients with indexexs from 3 to the end

//---------------- sort() --------------------
//sort manipulates the array it was run upon instad of giving us a new one
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
items.sort(); //this will throw an error
//can get around this by using spread operator
const sortedItems = [...items].sort(); //returns the grocery list items in sorted manner

//sorting does not work well with numbers
const numbers = [10, 5 ,3, 12, 22, 8];
numbers.sort(); //this returns [10, 12, 22, 3, 5, 8 ]
//sort converts the values into strings before sorting

//if we want to sort off of an attribute
//sorting the ingredient based on its name
const sortedGroceries = [...groceryList].sort( (a,b) => a.item > b.item ? 1: -1);
//wrote a callback function inside of sort letting it know what attribute to use when sorting
