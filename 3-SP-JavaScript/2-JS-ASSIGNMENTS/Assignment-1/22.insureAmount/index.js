function calculateInsuranceAmount(amount, rate) {
    return amount * (rate / 100);
}

let amount = 1000;  // Example amount
let rate = 20;      // Insurance rate in percent

let insuranceAmount = calculateInsuranceAmount(amount, rate);
console.log("Insurance Amount: $" + insuranceAmount);
