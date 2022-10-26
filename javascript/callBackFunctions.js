// //setTimeout
// setTimeout( function() { 
//     console.log("start")
// }, 3000);

// console.log('end');

//it expects a function and a number
//the number is in miliseconds

//callback functions are functions that are passed into another function to be called by that function


typeof( "hello");
// outputs 'string'
typeof( function() {})
//outputs 'function'

//declare a variable and set it equal to a function and then call that function using the variable name
var exampleFunction = function(message){
    console.log(message);
};

exampleFunction("Hello from the examaplefFnction");

//we can also pass a function as a parameter into a parent function
function parentFunction(callback){
    callback("information from the parent function");
}

parentFunction( exampleFunction );

//these sorts of functions are often used with anonymous functions and we could rewirte our example to be called like this
parentFunction( function(message){
    console.log(message);
})

/* 
//common uses of callback functions
when code needs to run after an event(user clicks a button, user visits "localhost:5000/home")
making API calls
querying a database
*/