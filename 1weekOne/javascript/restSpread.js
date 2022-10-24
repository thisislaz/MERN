// //extracting the first couple animals from our list
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// const [firstAnimal, secondAnimal] = animals;

// if we want remaining animals from the end of the assignment
const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
console.log(otherAnimals);

const person = {
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
  };

  //grabbing the first name and last name from person
  const {firstName, lastName, ...attributes } = person;
  console.log(attributes);

//this is how to make a complete copy of the object
const personCopy = { ...person };

//the copy shows the info insde the original only
console.log(personCopy  === person);//false
console.log(personCopy.addresses === person.addresses);//true 