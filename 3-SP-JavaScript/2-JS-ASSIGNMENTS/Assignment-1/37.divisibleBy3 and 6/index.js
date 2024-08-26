// Print the number which are divisible both 3 and 6 for given range (start and end value must be taken from the user) 

// taking the input start and end value from user

const start = parseInt(prompt("enter the start value: "));
const end = parseInt(prompt("enter the end value: "));

// check if the numbers are valid or not

if(isNaN(start) || isNaN(end)){
    document.write("please enter valid numbers: ")
}

//printing the range of numbers from user

for(let numbers = start; numbers<= end; numbers++){
    if (numbers % 3 == 0 && numbers % 6 ==0){
        document.write(numbers+"<br>") // here break is used for value print line after line
    }
}