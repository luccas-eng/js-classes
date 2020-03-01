//Challenge 1

//BMI comparison 
// mass: kg, height: meter
var mass, height;
mass = 76.2; //kg
height = 1.74; // meters

var BMI = (mass / (height^2));
var LucasBMI = BMI;

var mass, height;
mass = 70.2; //kg
height = 1.70; // meters

var BMI = (mass / (height^2));
var CarlosBMI = BMI;

var isHigher = CarlosBMI >= LucasBMI;

console.log(LucasBMI);
console.log(CarlosBMI);
console.log('Is Carlos BMI higher than Lucas BMI? Result ---> ' + isHigher)