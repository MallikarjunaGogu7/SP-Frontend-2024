// Print the even numbers from the given range (start and end value must take from the user) 

// taking the inputs from user
const start = parseInt(prompt("Enter the start value of range: "));
const end = parseInt(prompt("Enter the end value of range: "));

// checking the entered nubers are valid or not
if(isNaN(start) || isNaN(end)) {
    document.write("enter a valid numbers")
}

else{
   // printing the nubers in the given range
   for(let number = start; number<=end; number++){
      if(number%2 == 0){
         document.write(number+" ");
      }
   }
}