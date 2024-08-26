// //Find the average of given five numbers. 

// function avg(arr){ 
//     let sum = 0;
//     for (let i=0;i<arr.length;i++){
//         sum = sum+arr[i];                   //with array
//     }
//     return sum / arr.length;  
// }
// let arr = [10,20];
// console.log(avg(arr));

//taking five numbers from user
var n1,n2,n3,n4,n5 ,avg;

n1=parseInt(prompt("enter 1st number"));
n2=parseInt(prompt("enter 2st number"));
n3=parseInt(prompt("enter 3st number"));
n4=parseInt(prompt("enter 4st number"));
n5=parseInt(prompt("enter 5st number"));

avg=n1+n2+n3+n4+n5/5;

document.write("average is:"+avg);