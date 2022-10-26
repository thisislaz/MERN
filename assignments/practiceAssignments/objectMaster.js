const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
//pokemon whose name starts with b
const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
// console.log(bListPkmn);

//array of just the ids
const pkmnIds = pokémon.map( p => p.id )
// console.log(pkmnIds);

// ----------- one ----------------
const pokemonIdDivisibleByThree = pokémon.filter( (onePokemon) => {
    if (onePokemon.id %3 === 0 ) {
        return true;
    } else {
        return false;
    }
} )
// console.log(pokemonIdDivisibleByThree);

// ----------- two ----------------
const fireType = pokémon.filter( (pokemonElem) => {
    return pokemonElem.types.includes("fire");
} )
// console.log(fireType);

// ----------- three ----------------
const multipleTypes = pokémon.filter( (pokemonElem) => {
    if(pokemonElem.types.length > 1){
        return true;
    } else {
        return false;
    }
} )
// console.log(multipleTypes);

// ----------- four ----------------
const namesOfPokemon = pokémon.map( (pokemonElem) => {
    return pokemonElem.name;
} )
// console.log(namesOfPokemon);

// ----------- five ----------------
const namesAndIdAboveNineNine = pokémon.filter( (pokemonElem) => {
    if(pokemonElem.id > 99){
        return true;
    } else {
        return false;
    }
} ).map( (pokemonElem) => {
    return pokemonElem.name;
} )
// console.log(namesAndIdAboveNineNine);

// ----------- six ----------------
const namesOfPosionTypes = pokémon.filter( (pokemonElem, index) => {
    if(pokemonElem.types.length == 1 && pokemonElem.types == "poison" ){
        return true;
    } else {
        return false;
    }
} ).map( (pokemonElem) => {
    return pokemonElem.name;
} )
// console.log(namesOfPosionTypes);

// ----------- seven ----------------
const firstTypeOfSecondTypeFlying = pokémon.filter( (pokemonElem) => {
    if(pokemonElem.types.length > 1 && pokemonElem.types[1] == "flying"){
        return true;
    } else {
        return false;
    }
} ).map( (pokemonElem) => {
    return `${pokemonElem.name}'s first type is ${pokemonElem.types[0]}.`;
} )
// console.log(firstTypeOfSecondTypeFlying);

// ----------- eight ----------------
const numberOfNormalTypes = pokémon.filter( (pokemonElem) => {
    if(pokemonElem.types.includes("normal")){
        return true;
    } else {
        return false;
    }
} ).length;
console.log(numberOfNormalTypes);