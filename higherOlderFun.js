//Higher Order Function 
let radius = [3,1,2,4];

//Norma; Approch where the code is repeated
function calculateArea(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result.push(Math.PI*element*element);
    }
    return result;
}

function calculateCircumFerence(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result.push(2*Math.PI*element*element);
    }
    return result;
}

// console.log(calculateArea(radius));
// console.log(calculateCircumFerence(radius));


//This is the functional approch and based of DYI don't repeat yourself
function calculate(arr,logic){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result.push(logic(element));
    }
    return result;
}

var area = function (ele){
    return Math.PI*ele*ele;
}

var circumFerence = function (ele){
    return 2*Math.PI*ele*ele;
}

console.log(calculate(radius,circumFerence));





