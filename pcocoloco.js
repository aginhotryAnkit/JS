/*====================================================
             Find pairs which equals to 15
======================================================*/
let obj1 = {
    "name":"ankit",
    "getIntro":function (){
        return "my name is "+this.name
    }
}

// console.log(obj1.getIntro());


let obj2 = {
    "name":"kajal",
    "class":"bca"
}

obj2.__proto__ = obj1; //inharetacne


// console.log(obj2.nameeeee);
// console.log(obj2.class);
// console.log(obj2.getIntro());


let arr = [10,20,30,40,50];

Array.prototype.myLength = function (){
    let count = 0;
    for(let i=1;i<=5;i++){
        count++;
    }
    return count;
}


Array.prototype.pocoLoco = function (name){
    return "Poco Loco "+name
}


// console.log(arr.pocoLoco("Kajal"));



// console.log(arr.myLength());


((x,y)=>{console.log(x+y)})(10,20);