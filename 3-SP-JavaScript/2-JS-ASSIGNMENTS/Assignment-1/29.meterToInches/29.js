// Find the number of inches for the given meters? 

const METERS_TO_INCHES = 39.3701;

function meterToInches(meters){
    return meters*METERS_TO_INCHES;
}

const meters = parseFloat(prompt("enter the meters: "))

const inches = meterToInches(meters);

document.write("given meters to inches conversion is"+inches)