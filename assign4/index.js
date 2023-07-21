alert('hello')

function calculateBMI(mass, height) {
    return mass / (height * height);
}


let lucas_mass = Number(prompt("Enter Lucas's mass in kg: "));
let lucas_height = Number(prompt("Enter Lucas's height in meters: "));

let peter_mass = Number(prompt("Enter Peter's mass in kg: "));
let peter_height = Number(prompt("Enter Peter's height in meters: "));



let lucas_bmi = calculateBMI(lucas_mass, lucas_height);
let peter_bmi = calculateBMI(peter_mass, peter_height);

let lucasHigherBMI = lucas_bmi > peter_bmi;

let comparisonResult = `Lucas' BMI (${Math.round(lucas_bmi * 100) / 100}) is ${lucasHigherBMI ? "lower" : "higher"} than Peter's (${Math.round(peter_bmi * 100) / 100})!`;



console.log("\nBMI Results:");
console.log("Lucas's BMI: " + Math.round(lucas_bmi * 100) / 100);
console.log("Peter's BMI: " + Math.round(peter_bmi * 100) / 100);
console.log("Peter's BMI is higher than Lucas's BMI: " + lucasHigherBMI);
console.log(comparisonResult);

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}



while (true) {
    let celsiusTempInput = prompt("Enter the temperature in Celsius (or type 'exit' to stop): ");
    if (celsiusTempInput === null || celsiusTempInput.toLowerCase() === 'exit') {
        break;
    }
    let celsiusTemp = Number(celsiusTempInput);
    if (!isNaN(celsiusTemp)) {
        let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
        let roundedFahrenheitTemp = Math.round(fahrenheitTemp * 100) / 100;
        console.log(`${celsiusTemp}°C is ${roundedFahrenheitTemp}°F.`);
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
}


while (true) {
    let fahrenheitTempInput= prompt("Enter the temperature Fahrenheit in  (or type 'exit' to stop): ");
    if (fahrenheitTempInput === null || fahrenheitTempInput.toLowerCase() === 'exit') {
        break;
    }
    let fahrenheitTemp = Number(fahrenheitTempInput);
    if (!isNaN(fahrenheitTemp)) {
        let celsiusTemp = fahrenheitToCelsius(fahrenheitTemp);
        let roundedcelsiusTemp = Math.round(celsiusTemp * 100) / 100;
        console.log(`${fahrenheitTemp}°C is ${roundedcelsiusTemp}°F.`);
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
}












