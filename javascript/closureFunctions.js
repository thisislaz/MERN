// ------------- Closures ------------
// its a function that is returned from another function. Interesting behaviors sprout

function outer(){
    let count = 0; //this is a count variable that is scoped to the function
    //there is an inner function that increments count and then console logs it
    function inner(){
        count++;
        console.log(count);
    }
    //we're returning the inner function
    return inner;
}

const counter = outer(); //counter is the function that we returned from calling the outer function
counter(); // logs "1"
counter(); // logs "2"
counter(); // logs "3"
counter(); // logs "4"
counter(); // logs "5"

//so that means that the count variable still exists!
// and it is being changed even though we arent inside of the outer function
//can we access count out here?
// console.log(count); //doesnt work!

/* 

What actually happened is that the count variable was instantiated when the outer function was called. Then since we returned the inner function, it got stored in "counter". Now every time we called the counter function it had access to the "enclosed" variables from the outer function.

Closures are tough to wrap your head around at first. Just remember that the inner function in a closure is the one that is returned and accessed outside of the function definition.

*/