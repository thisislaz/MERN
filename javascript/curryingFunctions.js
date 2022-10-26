// --------------- Currying ----------------
//its the idea that you only run part of a function, rather than the whole thing

//Uncurried example
function ninjaBelt(ninja, beltColor){
    console.log("Ninja "+ ninja + " has earned a " + beltColor + "belt.");
}
ninjaBelt("Lazaro", "black");

//Curried example
function ninjaBeltTwo(ninja){
    return function belt(beltColor){ //note the closure here
        console.log(`Ninja ${ninja} has earned a ${beltColor} belt!`);
    }
}
ninjaBeltTwo("Karina")("black"); //note the double invocation here