// Print the numbers for given range (start and end value must take from keyboard) 

// Taking the input from user

const start = parseInt(prompt("Enter the start value: "));

const end = parseInt(prompt("Enter the end value: "));

// check if inputs are valid numbers

if(isNaN(start) || isNaN(end)) {
    console.log("Please enter valid number for the range: ");
}
else{
    // printing the numbers in given range
    for(let number = start; number <= end; number++) {
        document.write(number+" ");
    }
}