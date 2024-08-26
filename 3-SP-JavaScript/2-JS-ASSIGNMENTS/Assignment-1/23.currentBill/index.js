
//Find the current bill for the given number of units (domestic-10rs per unit, indurstial-15rs per unit)

function currentBill(unit,type){

    let rate;

    if(type==="domestic"){
        rate= 10;
    }
    else if(type==="industrial"){
        rate= 15;
    }
    else {
        return "Invalid connection type";
    }

    return unit*rate;
    
     
}

let bill = currentBill(100,"industrial");
console.log(bill)