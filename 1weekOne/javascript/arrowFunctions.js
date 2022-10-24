var sayHello = function(name){
    console.log('Hello' + name);
}

//it can be rewritten as
const sayHello = (name) => {
    console.log(`Hello ${name}`);
}

//another way of writting the above
const sayHello = name => console.log(`Hello ${name}`);

var sqaure = function(n){
    return n * n;
}
//the above is now written as
const square = n => n * n;
//with arrow funstions the result of our experssions is implicitly returned to the caller.

// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
    return { 
        firstName: 'John',
        lastName: 'Wick'
    }
}
/**
  * The example below wouldn't work because the 
  * brackets are interpreted as opening the body of the 
  * function rather than brackets to create an object literal 
  */
// const returnObj = () => { firstName: 'John', lastName: 'Wick' }
// surrounding the implicit return with parenthesis solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

class Deck {
    constructor() {
      const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
      const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
      const deck = [];
      for (const suit of suits) {
        for (const face of faces) {
          deck.push(this.createCard(suit, face));
        }
      }
      this.deck = deck;
    }
  }

//new way
class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
          faces.forEach(face => {
            deck.push(this.createCard(suit, face));
          });
        });
      }
  }