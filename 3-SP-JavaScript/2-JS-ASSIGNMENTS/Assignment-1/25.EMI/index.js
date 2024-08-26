/**
 * formula for emi is :   p*r*(1+r)**N / (1+r)**N 
 */

function calculateEMI(principal, annualRate, tenureInYears) {
    let monthlyRate = annualRate / (12 * 100); // Convert annual rate to monthly and into decimal
    let tenureInMonths = tenureInYears * 12;  // Convert tenure to months

    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) /
              (Math.pow(1 + monthlyRate, tenureInMonths) - 1);

    return emi;
}

// Example usage:
let principal = 500000;       // Loan amount
let annualRate = 4;           // Annual interest rate in percent
let tenureInYears = 5;        // Tenure in years

let emi = calculateEMI(principal, annualRate, tenureInYears);
console.log("Monthly EMI: ₹" + emi.toFixed(2));
