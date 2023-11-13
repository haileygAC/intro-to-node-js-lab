let name = process.argv[2];
let age = process.argv[3];

function dogAge(name, age) {
    let humanAge = age;
    let dogYearsAge;
    if (age === 1) { 
        dogYearsAge = 15
    } else if (age === 2) {
        dogYearsAge = 24
    } else {
        dogYearsAge = ((age - 2) * 5) + 24
    }
    console.log(`Your dog ${name}, is ${humanAge} years old, but that is ${dogYearsAge} years old in dog years!`)
}