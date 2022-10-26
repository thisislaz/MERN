//functional programming
// .map() .filter()

const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];

//--------------- .map() ----------------
                                //this is a callback function, never name it, as it is an annoymous function
const newAnimals = animals.map( function(animalElement) {
        return animalElement + " is cool."
    }
)
// console.log(newAnimals);
// console.log(animals); //original is unchanged

//if the function gets named it looks like this
function changeAnimals(aniamlElement){
    // console.log(this); // this shows object information on the node backend side of things
    return aniamlElement + " is cool.";
}
const namedFunctionExample = animals.map( changeAnimals );
// console.log(namedFunctionExample);

//arrow function example, returns the same thing
const newAnimalsArrow = animals.map( (animalElement) => {
    // console.log(this); // shows empty {}
    return animalElement + " is cool.";
} );

//one liner of the above
const newAnimalsArrowOneLiner = animals.map( animalElement => animalElement + "is cool.");

//more practice, a way to remember how the callback functions are structured
// const moreAnimals = animals.map( () => {} )
const moreAnimals = animals.map( (animal) => {
    return `${animal} is very cool.`;
} )
// console.log(moreAnimals);

//map() also takes a second parameter, which is the index
const moreAnimalsPrac = animals.map( (animal, index) => {
    return `${index} - ${animal} is very cool.`;
} )
// console.log(moreAnimalsPrac);

//--------------- .filter() ----------------
const filteredAnimals = animals.filter( (eachOneElement, index) => {
    if (eachOneElement.length <= 5) { //this is the test we want it to pass
        return true;
    } else{
        return false;
    }
} )
// console.log(filteredAnimals);

//more sasync
const filteredAnimalsEfficient = animals.filter( (a) => {
    return a.length <= 5;  
} )
// console.log(filteredAnimalsEfficient);

//one-liner
const filteredAnimalsEfficientlyLessWords = animals.filter( a => a.length <= 5 )
// console.log(filteredAnimalsEfficientlyLessWords);

const people = [
    {name: "bob", age:30},
    {name: "mary", age:31},
    {name: "sue", age:28},
    {name: "george", age:38},
];
//filter people with age greater than or equal to 30
const greaterThanThirty = people.filter( (person) => {
    if (person.age >= 30) {
        return true;
    } else {
        return false;
    }
} )
console.log(greaterThanThirty);

//shorthand
const greaterThanThirtyShorthand = people.filter( (person) => {
    return person.age >= 30;   
} ) 
console.log(greaterThanThirtyShorthand);

//adding to an objects element
console.log(greaterThanThirtyShorthand.map( (elem) => {
    return elem.age+=1;
}));
//with the ${}
console.log(greaterThanThirtyShorthand.map( (elem) => {
    return `${elem.name} is ${elem.age+=1} after two years`;
}));