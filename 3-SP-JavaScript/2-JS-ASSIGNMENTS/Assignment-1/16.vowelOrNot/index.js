// function vowel(character){
//     if(character=="a"||"e"||"i"||"o"||"u"||"A"||"E"||"I"||"O"||"U"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(vowel("c"));

function checkVowel(ch){
    const arr = ["a","e","i","o","u"];
    if( arr.includes(ch)){
        return "it is a vowel"
    }
    else{
        return "it is consonant"
    }

}

var res = checkVowel("e")
console.log(res);
