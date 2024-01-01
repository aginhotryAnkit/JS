//what is inheritance and how can we use in the functional programming language like Javascript

let person = {
    "name":"ankit",
    "class":"BCA",
    "rollNo":"1190211055",
    intro: function (){
        return (`My name is ${this.name}. I'm the student of ${this.class}. My roll number is ${this.rollNo}`);
    }
}

let student = {
    "name":"kajal"
}

student.__proto__ = person; //here inhabitance comes into the picture

console.log(person.intro()); //output ankit
console.log(student.name); //output ankit


Function.prototype.hello = function (){
    return "hello world";
};

function testFun(){

}
console.log(testFun.hello()); //hello world is called

/**student haven't property called name with we use it how its it because javascript engine
try to find name current object when its not get its goes to the prototype to prototype anf try to get
and this is called prototype chain and end up with null 

this is called prototype chaining 
*/


   