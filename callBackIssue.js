// There is a lot of trust issue  with callback show it with this code

console.log("Code Execution Started");

//this set time callback function need to be called after the 2 secs
setTimeout(() => {
    console.log("Callback Executed");
}, 2000);

var startTime = new Date().getTime();
var endTime  = startTime+5000;

console.log(startTime);
console.log(endTime);

while(startTime<endTime){
    //this loop is running until 5 second sec is not passed
    startTime = new Date().getTime();
}

console.log("Code Execution Ended..");


/**
 * Now there is a trust issue with the settime out function in the given example
 * we have declare a callback function which is need to run after the 2 seconds
 * but function did't run after the 2 second because after the settimeout function
 * there is while loop witch is run by 5 second and when program is run a call function
 * is register in the web api and after the that rest of the code means while loop
 * is running by 5 second after but in that time settimeout function need to be executed
 * but did't executed. The reason behind not executed is that there is an callback queue 
 * and event loop in the js environment event loop is keep checking if the callstack is empty
 * then it will get the callback function from the callback queue and and put inside the
 * callstack and callstack is executed it. here because callstack is still executed the
 * GEC [global execution context]. and when the whole code inside the GEC is run
 * then GEC pop off the callstack and and at that time event loop check callstack is empty
 * it will quickly pick the callback from the the callback queue and put the callback function
 * inside the callstack and callstack executed callback function.
 * 
 * that how the whole program is being executed.
 * "ILU..."💕
 */