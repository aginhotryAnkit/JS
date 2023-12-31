console.log("Start");

hello();
setTimeout(hello, 0);

function hello(){ //this is now become asyc function because we can use it later
    console.log("asyc function");
}

console.log("End");

