/* 
    typescript is a superset of javascript
    typescript doesn't have any runtime
    is tool help you do type checking, making code more readable

    you have to transpile/compile ts into js file before running it.

*/

console.log("from typescript");


// let a = 123;
// a="123";

let a = "123"

/* 
    number
    string
    boolean
    array, tuple(ts)
    object(diff)
    null undefined void(ts)
    any(ts)

    unknown(ts)
    never(ts)

    type annotation
    type alias
    type inference
    union type
    interface
    literal object type
    literal function type
    literal type
    generic type
    type assertion
*/

/* let num;
num = 123;
num = "123" */

/* //type inference
let num = 123;
num = "123" */

//type annotation
let num: number;
num = 123;
//num = "123"

let str:string;
str = "123";

let bool:boolean;
bool = true;
bool = false;

let arr:string[];

arr = ["1","2"];

let arr1:(string|number)[];

arr1 = [1,"2"];

//type alias
type StrOrNum = string | number;

let strOrNum: StrOrNum;

strOrNum = 1;
strOrNum = "2";
//strOrNum = true

let arr2:StrOrNum[];
arr2 = [1,"2"];


//tuple is an array type with restriction on length and type for element of each index

let tuple: [string,number];
tuple = ["1",2];
//tuple = [1,"2"]


let obj:object;//non-primitive type
obj = {};
obj = [];
obj = function(){};


//class,interface, extends, implements

interface Person {
    name:string;
    age:number;
}

interface Employee extends Person{
    salary?:number //optional
}

//literal object type
type Employee1 = {name:string;age:number;salary:number}



let employee: Employee;

employee = {name:"adam",age:18,salary:5000};

let employee2: {name:string;age:number;salary:number}

employee2 = {name:"adam",age:18,salary:5000}

//literal type
let num1: 123 | 246;//union type
num1 = 123;
num1 = 246;


//literal function type
let fun1:(arg1:string)=>string  = (arg1) => {
    arg1.toFixed()
    return "123"
};

//type inference
export let fun2:(arg1:string)=>string = function(arg){ return arg}

function fun3(arg1:number):string{
    return "123"
}

type MyFunType = (arg1:string) => string;


let fun4:MyFunType = (arg)=>{return "123"};


//generic type, passing another type as argument for some type;

type MyFunType1<Type> = (arg:Type) => string;

let fun5:MyFunType1<number> = (arg)=>{
    arg.toFixed();
    return "123"
}

function Fun6<Type>(arg:Type):string{
    console.log(typeof arg);
    return "123"
}

Fun6<string>("123");

interface Box<Type> {
    content:Type
}

let box:Box<string>;

box = {content:"123"};

//type assertion, change type of a variable after declaration

let box1:object;

(box1 as Box<string>).content = "123";
(<Box<string>> box1).content = "123";

//undefined null void(ts, only for type of return of function)

let num2;



function fun7(arg:string):void{
}

//any,unknown, never(meaning of this function)

function fun8(): never{
    /* while(true){

    } */
    throw new Error("123"); 
}


//unknown any
let myVar:any;
myVar = 123;
myVar="123";
myVar.toFixed()

let myVar1: unknown;
myVar1 = "123";
(myVar1 as string).split("")








//typescript scss storybook 






