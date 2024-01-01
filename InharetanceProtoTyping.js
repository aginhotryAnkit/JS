//what is inheritance and how can we use in the functional programming language like Javascript

let person = {
    "name":"ankit",
    "class":"BCA",
    "rollNo":"1190211055"
}

let student = {
    "college_name":"babu banaras das university lucknow"
}

student.__proto__ = person; //here inhabitance comes into the picture

console.log(student.rollNo); //output ankit


/**student haven't property called name with we use it how its it because javascript engine
try to find name current object when its not get its goes to the prototype to prototype anf try to get
and this is called prototype chain and end up with null 

this is called prototype chaining 
*/


   