function a(){
    var xx = 20;
    b();
    function b(){
        console.log(xx);
    }

}


var x = 10;
a();
