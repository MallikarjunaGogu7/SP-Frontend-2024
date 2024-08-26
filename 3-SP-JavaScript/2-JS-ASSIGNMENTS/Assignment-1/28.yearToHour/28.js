// Find the number of years for the given number of hours? 


// Conversion factor: 1 year = 8760 hours
const HOURS_IN_A_YEAR = 8760;

// Function to convert hours to years
function convertToYears(hours) {
    return hours / HOURS_IN_A_YEAR;
}

// Get user input for the number of hours
let hours = parseFloat(prompt("Enter the number of hours: "));

// Convert the given hours to years
let years = convertToYears(hours);

// Print the result
document.write(`${hours} hours is approximately ${years} years.`);
