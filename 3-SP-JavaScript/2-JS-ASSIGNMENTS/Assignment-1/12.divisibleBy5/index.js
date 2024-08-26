//Check given number is divisible by 5 or not? 

function fun(num){
    if (num % 5 ==0){
        return `${num} is divisible by 5`
    }

    else{
        return `${num} is not divisible by 5`
    }
}

console.log(fun(100))