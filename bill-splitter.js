
let bill = process.argv[2];
let tipPercentage = process.argv[3];
let numGuests = process.argv[4];

let tipAmount = bill * (tipPercentage);
let total = bill + tipAmount;
let amountOwedPerGuest = total / numGuests;

// let bill = 100;
// let tipPercentage = 0.20;
// let numGuests = 4;
// let tipAmount = bill * tipPercentage;
// let total = bill + tipAmount;
// let amountOwedPerGuest = total / numGuests;

console.log("Each guest owes: $" + amountOwedPerGuest)
