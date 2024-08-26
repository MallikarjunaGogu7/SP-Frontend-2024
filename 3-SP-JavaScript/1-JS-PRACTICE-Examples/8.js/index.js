
// higher order function using for calcleter

function add(a,b){
    return  a+b;
}

function sub(a,b){
    return a-b;
}

function mul (a,b){
    return a*b;
}

function devision(a,b){
    return a/b;
}
function modulo(a,b){
    return a%b;
}

function calculator(a,b,calculate){
    return calculate(a,b);
 }

 console.log(calculator(2,4,devision));