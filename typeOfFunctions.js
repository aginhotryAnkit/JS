//Function statement aka Function Declaration its a jargon 
function hello(){
    console.log("hello world");
}

//Function expression 
var hii = function (callback){
    console.log("Hii")
    console.log(callback());
};

//Annonymous function

// function () {
//     console.log("its an annymous function becuase its has not identifyer and because as a value in a var if you use this this its throw and error because javscript engine or a compiler treat it like function staement");
// }

//Named function expression
var namedFunctionExpression = function helloHi(){
    console.log("when you give a name to a expression function is become a function expression name");
}

//first class function 
hii(callback)// here we are passing a function as an argument
function callback(){
console.log("first class function aka first citizen function they are called first claas function becsue we can use a function like a value and pass to a anotehr functin as a pramter and we can also return a function to an another function that's amazing javscript functions are.. amazing")    
}

//Diff betwen parameter and arguments
function x(parm1, parm2){ // when the function is declare and need to take some value at the call time so that declartion called as parmeter
    var arg1 = 10;
    var arg2 = 20;
    x(arg1,arg2) // as you can see when a value pass when the function are called as argument 
}

//Arrow function
// arrow function are compact alternate to function expression its traditional function introduce is ECMA Script 2019
// In JavaScript, an arrow function is a shorter way to write a function. It's like a shorthand for creating functions. Here's a simple breakdown:

// Basic Syntax:

// Instead of writing a function like this:
function add(a, b) {
  return a + b;
}

// You can use an arrow function:
const add = (a, b) => a + b; //arrow function 


// No Need for the function Keyword:
// With arrow functions, you don't need to use the function keyword. You just write the parameters, an arrow (=>), and then the expression you want to return.

// Single Expression Shortcuts:
// If your function has only one expression, like the a + b in the example, you can omit the curly braces {} and the return keyword. The result is implicitly returned.

// Useful for Short Functions:
// Arrow functions are often used for shorter functions, especially when you need a quick, simple way to define them.