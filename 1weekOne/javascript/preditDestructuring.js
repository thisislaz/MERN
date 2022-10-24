const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

//old way
var email = person.email;
var firstAnimal = animals[0];

//new way
const {email} = person;
const [firstAnimal] = animals;

//old way
var email = person.email;
var password = person.password;
var firstAnimal = animals[0];
var secondAnimal = animals[1];
var thirdAnimal = animals[2];

//new way
const { email, password } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;

//if the value already exists before the object is called, do it like this
const password = 12344;
const {password: hashedPassword } = person;

const personTwo = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  }

const { addresses: [whiteHouse, sherlock] } = personTwo;

//skip the first address and only want the city of the second but using an alternate varible name
const { addresses: [ , { city: London }]} = personTwo;

//this can be done to any depth as long as the content exxists
const { addresses: [,,,, {city: london}]} = personTwo;//this one throws an error because there are not 5 addreses