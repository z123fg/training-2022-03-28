/* 
    DOM manipulation,
    Event binding,
    ajax request
*/


//console.log("jQuery",$);




class MyJQuery {
    #elements;
    constructor(selector){
        this.#elements = document.querySelectorAll(selector);//nodelist,array
        //console.log(this.#elements)
    }
    static print(){
        console.log("print")
    }
    html(innerHTML){
        this.#elements.forEach(element=>{
            element.innerHTML = innerHTML
        })
    }

    hide(){
        this.#elements.forEach(element=>{
            element.style.display="none";
        })
    }

    show(){
        
        this.#elements.forEach(element=>{
            element.style.removeProperty("display")
        })
    }

    on(eventType, cb){
        this.#elements.forEach(element=>{
            element.addEventListener(eventType, cb);
        })
    }
}

const $$ = function(selector){

    return new MyJQuery(selector)
}

//$$("button.continue").html("Next Step...")

/* var hiddenBox = $( "#banner-message" );

hiddenBox.hide();

$( "#button-container button" ).on( "click", function( event ) {
  hiddenBox.show();
}); */

$$.ajax = function(option){
    const {data, url, type="GET",complete, success, error} = option;
    //console.log(data, url, type,complete, success, error)
    const promise = fetch(url, {
        method:type,
        ...(type === "GET"||"DELETE"?{}:{body:JSON.stringify(data)})
    }).then(res=>{
        console.log("res",res);
        return res.json();
    }).then(result=>{
        success?.(result,undefined,undefined);
    }).catch((err)=>{
        error?.(undefined,undefined,err);
    }).finally(()=>{
        complete?.(undefined,undefined)
    });

    console.log("promise",promise)
}

$$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    data: {
      zipcode: 97201
    },
    success: function( result ) {
        console.log("request succeed",result)
      //$( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
    }
  });
