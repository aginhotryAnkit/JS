//promised is nothing but a object with some data and with the promise return we attached a function to the promise
//promise has two states pending and fulfilled....

//definition: a promised object is a placeholder that is places unit we not getting the result from an asyc operation. 
//(states of the promised)
//1. pending: - The promise is still in the works.
//2. fulfilled: - The promise resolves successfully and returns a value.
//3. rejected: - The promise fails with an error.
//4. settled: - The promise has been fulfilled or rejected.

//returning a promised from an promise is called as promise chain

let profileUrl = "https://api.github.com/users/aginhotryAnkit";

let gitProfileData = fetch(profileUrl);

console.log(gitProfileData);

gitProfileData.then(function (data){
    console.log(data);
});

//we can also write like this
fetch(profileUrl).then(function (data){
    console.log(data);
});


//promise chain 
// fetch(profileUrl).then(function (data){
//     return data;
// }).then(function(data2){
//     return data2;
// }).then(function (data3){
//     return data3;
// });