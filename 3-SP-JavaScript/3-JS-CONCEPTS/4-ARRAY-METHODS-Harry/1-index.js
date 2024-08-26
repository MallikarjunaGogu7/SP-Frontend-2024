// toString()
// converts an array to a string of comma seperated values
let num = [1,2,3,4];
let b = num.toString() // b is now a string
console.log(b);

//join()
//join all the elements using a seperator
let c = num.join("_");
console.log(c, typeof(c))

//pop() --> removes last element from the array 
let n = num.pop()
console.log(n) // return popped element
console.log(num) // return the remaining arrayafter popped

//push() --> add the new element at last position
let r = num.push(4)
console.log(num,r)

//shift() --> removes first element  and returns it
let y = num.shift()
console.log(y,num)

//unshift() --> add  element to the beginning , return it
let z = num.unshift(99);
console.log(z,num) // returns new array length and array
