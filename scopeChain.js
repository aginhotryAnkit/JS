function one(){
    console.log(a); //this a is refer to the global scope thats why printed the 50. because this function is present in the global scope
}


function two(){
    var a = 10;

    function three(){
        console.log(a); //this is inside a function so that first search in local scope then parent so that is printed as 10
    }
    one();
    three();
}


var a = 50;
two();

//output 50, 10
