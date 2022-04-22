const a = {
    b:"adam",
    fun:function(){

        console.log("this",this.b);

        const arrowFun = () =>{
            console.log("this",this.b);
        }

        arrowFun();
    }
}

//a.fun();

const aa = {
    b:"john",
}

aa.fun = a.fun;
aa.fun();


//function: 'this' refer to the obj that invoke it
//arrow function: this refer to the code context(inherited from outer function)