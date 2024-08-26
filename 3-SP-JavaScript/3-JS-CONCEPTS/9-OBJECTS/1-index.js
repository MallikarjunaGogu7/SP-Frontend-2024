/**
 * javascript --> const is not posssible to change
 * but in arrays, objects --> it is possible  to change
 * 
 * 
 */



let obj = {}
console.log(obj)
console.log(typeof(obj))

const person={
    name:"peter parker",
    age:21,
    address:"new york"
}

console.log(person);
//dot notation
console.log(person.name);
console.log(person.age);
console.log(person.address);

let animal = {
    name:"lion",
    age:36,
    display:function(){
        consnole.log(this.name+" "+this.age)
    }
}

console.log(animal);
console.log(animal.name+" "+animal.age);
// animal.display();
// animal["display"](); // array notation

person.name="bahubali";
console.log(person.name)
console.log(person.age)
delete person.age;
console.log(person.age)

let student = {
    name:"peter",
    age:16,
    address:"new york",
    marks:{
        telugu:99,
        hindi:98,
        english:100
    }
}

console.log(student)
console.log(student.marks)
console.log(student.marks.english)

//sey and Map

let res = new Set();

res.add("welcome");
res.add("world");
res.add("to")
res.add("world")
res.add("sleeping")
res.add("world")
res.add("here")

 console.log(res)
// res.delete("world")
// res.clear();
// console.log(res.size)

for(let sleep of res){
    console.log(sleep)  // print valus
}


//
let fname = {name:"satya"}
let lname = {name:"soma"}
let add = {address:"hyd"}

let finalResult = new Set();

 finalResult.add(fname)
 finalResult.add(lname)
 finalResult.add(add)

 console.log(finalResult)

 for(let names of finalResult){
    console.log(names.name)
 }

 let res1 = new Set(["satya","soma","prakash"]);
 console.log(res1)
 for(let ss of res1){
    console.log(ss)
 }

 //map
 let mobj = new Map();
 mobj.set("1","satya")
 mobj.set(2,"soma")
 mobj.set(true,"boolean")

 console.log(mobj)
 console.log(mobj.get(2))
 console.log(mobj.get("1"))
 mobj.delete("1")//deleting
 console.log(mobj.get("1"))// getting same object 


 let myval = new Map(
    [
        ["1","welcome"],
        ["2","to"],
        ["3","sleeping"],
        ["4","world"],
        ["5","here"]
    ]
 );

 for(let vals of myval.keys())
 {
    console.log(vals)
 }

 for(let vals of myval.values())
    {
       console.log(vals)
    }