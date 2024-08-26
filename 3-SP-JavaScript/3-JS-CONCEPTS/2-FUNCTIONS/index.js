// function without parameter

function fun(){
    console.log("hava a fun");
    console.log("hiii")
}
fun();//function calling

// function with parameter

function add(a,b){
    console.log(a+b);
}
add(2,3);

// function return type

function mul(a,b){
    return (a*b);        // note : here return keyword won't print output , it just return the ouput
}
console.log(mul(2,3));   // here with console.log we are printing the output at console

// function expression

const name = function peru(){
    console.log("mallikarjuna");       
}
name();//function called with the variable name insted of function name

// function anonymous

const divide = function(a,b){   //there is no  function name
    return a/b;                 // and we call the fucntion with variable name
}
console.log(divide(2,4));          

// arrow function

const age = (x)=>{                   // in arrow function there is no function and function name
    console.log(`age is : ${x}`);    // instead there is ()=>{ statements }
}
age(21);

//iife function(immediate invoked function express)

(
    ()=>{
        console.log("deadpool");
    }
)();

// default parameter function
function f(sp="dp"){
    console.log(sp);
}
f();

