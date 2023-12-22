// parameter and argument => when we are defning a function or creating a functrion at that time when we passed a variable to function that
// is called parameter and at the time of function call giving the value to the function is called arguments

function display(x,y){ //the function accept two argument x and y so here x and y called as argument of the function
    console.log(x,y);
}
display(10,20); //10,20 is argument that we are passing to the function

//Now Start


//function statement 
function pocoloco(){
    console.log("Poco Loco");
}


//function expression 
var hello =function () { //its also called annonymous function because this function have't its identifyer depend upon the variable hello
    console.log("Hello Poco Loco");
}


//function named expression 
var hello = function helloPocoLoco(){
    console.log("Hello Poco Loco");
}

//arrow functions 
var arrow = (x) => console.log(x); //single line of code
var add = (x,y)=> { //with multiple line of code
    var result = x+y;
    console.log(`${x}+ ${y} = ${result}`);
}
((x,y)=>{console.log(x+y)})(10,20); //without assigning to a variable

//immidiate invoking function expression IIFC ES6
(function (){console.log("this is a function called when a compiler execluete this line of code ");})();

//constrctor function
function student(name,age){
    console.log("Your name is "+name);
    console.log("Your Age:" +age);
}
var ankaj = new student("ankaj",10);
console.log(typeof ankaj); //its a object because we creating a obj using new Keyword.

//Higer order function
function hii(name){
    return function (){
        console.log("Hello "+name())
    }
}

hii(function () {return "ankit"})(); //this is a higer order function because its accept a function in argument and return a function also.

//CallBack Function 
function Poco(loco){
    loco(loco); //calling a function which is accept in the parameter
}

function loco(){
    console.log("Poco Loco");
}

Poco(loco); //here we are passing a function as an argument so poco function is become the callback function. this abiltiy of the function where we are usinga function as a paramter also called fist class fucntion of cist class citizen

