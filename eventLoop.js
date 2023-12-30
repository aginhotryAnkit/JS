//Event Loop Tutorial

console.log("Hello");
var global = 10;
setTimeout(function (){
    let local = 20;
    console.log("callback");
}, 2000);

console.log("Bye");