//Check given number is divisible by 2,3 and 4 or not?

function fun(num){

    if(num%2==0 & num%3==0 & num%4==0){
        return`${num} is divisible by 2,3 and 4 `
    }

    else{
        return`${num} is not divisible by 2,3 and 4`
    }
}

console.log(fun(10))