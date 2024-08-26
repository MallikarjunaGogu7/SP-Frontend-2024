let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num2 = [11, 12, 13, 14, 15, 16, 17, 18,19]
let num3 = [20,30,40]
// delete num[0]
// console.log(num);
// console.log(num.length); // delete method not effect on length

//concat
let newArray = num.concat(num2)
console.log(newArray) // creat new array but not change the existing arrys

let newnewArray = num.concat(num2,num3)  // concat many arrays
console.log(newnewArray)


//sort()

// let sortNum = [7,9,4,5,3,2,1,6,8];
// console.log(sortNum.sort())

/**
 * sort() takes an optional compare function . if this function is provided as the first argument valuse returned from the compare function
as basis of sorting */

let bigNum = [500,2,11,88,999]
let res = 

