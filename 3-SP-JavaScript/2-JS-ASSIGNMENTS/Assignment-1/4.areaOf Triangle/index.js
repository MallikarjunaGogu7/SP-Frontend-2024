const base = parseFloat(prompt("enter a base of the triangle:")); // passing the input from user as prompt
const height = parseFloat(prompt("enter a height of the triangle:"));


function area(base,height){
    return 0.5 * base * height ;  // formula for area of triangle using base and height 
}

let res = area(base,height);
document.write(`area of the triangle is : ${res}`);