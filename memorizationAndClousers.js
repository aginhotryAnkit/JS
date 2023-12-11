// function fabbonaci(num, cache={}){
//     if(cache[num]) return cache[num];
//     if(num==0) return 1;
//     if(num==1) return 1;
//     if(num==2) return 1;
//     var result =  fabbonaci(num-2)+ fabbonaci(num-1);
//     cache[num] = result;
//     return result;
// }


// function makeadder(x){
//     return function add(y){
//         return x+y
//     }
// }


function displayName(){

    var name = "ankit";//local variable
    return function namePrint(){
        console.log(name);
    }
}

// console.log(name);
var myfun = displayName();
myfun()//print the local variable of displyName funciton on gloabl scope