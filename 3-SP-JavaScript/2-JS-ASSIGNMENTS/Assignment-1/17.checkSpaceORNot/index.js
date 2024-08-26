//Check given character is space or not? 

function checkSpace(char){
    if(char==" "){
        return `you entered a space`
    }
    else{
        return ` its not a space`
    }
}

console.log(checkSpace("g"));
console.log(checkSpace(""));
console.log(checkSpace(" "));
