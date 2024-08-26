// Print the odd number from the given range (start and end value must take from the user) 

const start = parseInt(prompt("Enter the start value: "));

const end = parseInt(prompt("Enter the end value: "));

// chcking if the inputs are valid numbers

if(isNaN(start) || isNaN(end)) {
    document.write ("enter valid numbers")
}

// printing the range of numbers

for(let numbers=start; numbers<=end; numbers++){
    if(numbers%2 == 1) {
        document.write (numbers+" ")
    }
}