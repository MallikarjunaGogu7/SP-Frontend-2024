var arr = [];  // literal way
console.log(arr);
console.log(typeof(arr));
console.log(Array.isArray(arr));

var arr1 = "welocme";
console.log(Array.isArray(arr1));

var res= new Array();  // constructor way
console.log(res);
console.log(typeof(res));
console.log(Array.isArray(res));

const numbers = [1,2,3,4,5];
const names = ["spiderman","batman", "iron man", "superman"];

const mix = [1,2,3,"spiderman", "batman", true, function(){}];

console.log(numbers);
var res1 = new Array(1,2,3,4,5);
console.log(res1)

console.log("length is:"+numbers.length);


console.log("by using for loop")

for (let i=0; i< names.length; i++){
    console.log("value is :" + names[i])
}

console.log("by using while loop");

 let i = 0;
 while(i<names.length){
    console.log("value is:"+names[i]);
    i++
 }

 // for of loop

 for(let name of names){   // print the values
    console.log(name);
 }

 //for in loop

 for(let name in names){
    console.log(names[name]); // print indexes only if we give name
 }

 // for each loop

 names.forEach(function(element, index){
    console.log(`${index}:${element}`)
 });

 const fruits = ["apple", "banana", "orange"];


  // inserting elements in array
 // unshift() insert at beginning of array  and   push()  insert at last

 fruits.push("kiwi");
 console.log(fruits);

 fruits.unshift("sapota");
 console.log(fruits);

  // removing elemntes : shift() and pop()

  fruits.shift();   // here shift() removes first element "sapota"
  console.log(fruits);


