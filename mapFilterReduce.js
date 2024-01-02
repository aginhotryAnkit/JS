// Here we are going to learn about the map filter and reduce function. 

//Map Function 
let arr = [10,20,30,40,50,5,7];

let mappedArr = arr.map((x)=> {
    return x*2;
});

//map function is used to manupulate each elements and apply a user defined function logic on it. 
//map function accept a callback function as an argument. and run call this function
//function function accept three arguments -> elemetn,index(optional),array(optional)
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array that map was called upon.

//using these three argument of array

let newArr = arr.map(function (ele, index, arr){
    // console.log("element :",ele);
    // console.log("index :",index);
    // console.log("orginal array :",arr);
});
//third argument is the orignal array where the map apply.

// console.log(mappedArr);

//Filter Function () -> 

//Filter function is used to filter the element of the array like want
//to filter event number in the array or odd or which  is divisable by 2
//or grater than 2, 3 or etc like situvation where we are using filter 
//function 

let evenArr = arr.filter((x)=>x%2==0);
let oddNumber = arr.filter((x)=>x%2!=0);
//filter only listen the True or False if the values is true iw will be inserted if false it's not
//so make a function or logic like that your function should be return true of false for the element
//which is passed as and argument in the callback function of the filter
// console.log(evenArr);
// console.log(oddNumber);


// Reduce function () -> 
//reduce function is used to reduce all the element of the array into one single element 
//reduce callback function accept four argument first is accumulater and second is element 
// reduce accept two argument first is callback and second one is the inti
// value of the accumulater that is passed as an first argument in the callback function

let sum = arr.reduce(function (accumulater, element, index, array){
    return accumulater +=element;
},0);

//accumulater is nothing is a value that is remain same in the entire of the 
//callback function no matter if its run for multiple values in the array
//we can pass the initisial value of accumulator in the second argument of the 
//reduce function.
//we are using reduce at these situvation where we are neet to get the one value 
//out from the all values of the given array.

console.log(arr);
console.log(sum);
