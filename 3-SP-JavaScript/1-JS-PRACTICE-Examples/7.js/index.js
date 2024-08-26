function largestValue(num1,num2){
    if(num1>num2){
        return num1;
    }
    else if(num2>num1){
        return num2;
    }
    else{
        return `${num1} and ${num2} are equal`
    }
}
console.log(largestValue(7,7));