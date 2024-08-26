const pi = 3.14;
const radius = 5;
//const radius = parseFloat(prompt("enter the radius of the cirle:"));  // use this instead of above for user input


function area(radius){
    return pi * radius**2
}
const res = area(radius);
console.log("the area of circle is:",res);