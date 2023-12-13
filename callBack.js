setTimeout(callbackFunction2, 2000); // its a settime out function its asyc function 

function normalFun(y){ //function are also called first chitizen or first class function because we can use a function like a value and pass to an other function as a value in the argument.
    y(); //this is called callback function because its up to the function when it will be called and where.
}

var callbackFunction = function (){
    console.log("I am a callback function called from normalFunction where i'm passed as argument");
};

function callbackFunction2(){
    console.log("I am a callback function called from setTimeOut where i'm passed as argument");
};

normalFun(callbackFunction); //here normalFun is called and a function passed in as an argument so here that what is callback function called.


// "CallBack :A Function which is pass as an argument into another function is called as callback function"
// "Async    :Because of the javascript we can use all the asyc things"
// "Async    :Becasue all the callback function as saved by the browser and used when use when an spacfic event is happen"
// "JavaScript is Single Threaded Syncronous Language it means we can do one time at a time in an spacific order"
// "Becasue JavScript have only one CallBack that's why its called Single Threaded and Callback done its job in a spacfic order"
// "which means callback function behave just like stack where it's used LILO[Last in Last out] to maintane its order"
// "SetTimeOut:  settimeout function is asyc function because its accept one callback function which means when the whole program is bean executed and"
// "the callback is empty the the global execulation contaxt is executed its reamin the memory and saved anywhere  else and when the spacifc time is done its called"
// "and also event listiner like click event is accept the callback function so most of the develop used to remove the event listion becasue"
// "this is not garbage collected automatically and its remain the memroy even the callstack is empty  its slow down"
// "the our main program or the website so that we need to remove the event listner manully and its a good practice"
// "its all about the CallBack Functions -----Ankit Agnihotry :)"
