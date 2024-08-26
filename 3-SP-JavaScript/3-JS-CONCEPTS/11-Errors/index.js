console.log("line 1 executed successfully")
try{
    console.log("welcome"); //


}catch(error)
{
    console.log("i am finally block");

}

console.log("line 2 executed succesfully")
console.log("line 3 executed successfully")
console.log("line 4 executed successfully")

//by using throw keyword

let x= 16;

console.log("execution started")
if(x<15)
{
    throw Error("x should be greeter than 15")
    console.log("enter valid number")
}

console.log("out of the block")