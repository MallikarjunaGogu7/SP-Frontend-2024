//Convert given rupees into dollars? 

function rupeeToDollar(rupees, exchangeValue){
    return rupees * exchangeValue;
}
const rupees = 5000;
const exchangeValue = 0.012;  // cause rupee to dollar exchange rate is 0.012
const res = rupeeToDollar(rupees,exchangeValue);
console.log(res, "dollars");

// other type
// var rupees = parseInt(prompt("Please enter rupees:"));
// var dollars = rupees / 64;
// console.log(dollars + " Dollars");