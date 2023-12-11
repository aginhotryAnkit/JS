var a=100;
let b=100;
const c=200;

// let name ="ankit"

{
    var a=10; //var hava a global scope thats why pointing to a same memory location this is why a=100 become a = 10; and its remain 10 as global level
    let b=10; //let and const have block scope global let and block level let have diff memeory scope thats why it's not change the value in block using block memrory and in gloval using global memory and also follow lexical memroy means inner block can access the memory of it's parent
    const c=20; //same with const [cosnt have block scope] [upper c and in this block c have diff memroy localtiopn caleed gloval memory and block memory]
    // var name = "kajal"; //this cause illiggal shadowing because we are chaging the declaration of the variable
    console.log(a);
    console.log(b);
    console.log(c);
}


console.log(a); //shadowing variable whoes name is a
console.log(b);
console.log(c);
// console.log(name);


// "Shadowing" :- showing is a tern means show or overlap someting with something i know its lel confustion but in javscript shwoding means overlap the varibale value;
//In Simple Terms JS shadowing means when a variable is declare in inner scope with same name variable already resent with some valuein outter scope so in this case inner varibale overlap or we can say overside the outer variable value this incodent is called as Shadowing in Javscript. Note:- Shding and Overloading Two are diff concept.
// "Illegal Shadowing" :- chnageing the declaration while shadowing a variable called illigal shadowing in JS