var name = "Lucas";
var age = 25;

if (age < 13){
    console.log(name + ' is a boy');
} else if (age >= 13 && age < 20){
    console.log(name + ' is a teenager');
} else if (age >= 20 && age < 30){
    console.log(name + ' is a young man');
} else {
    console.log(name + ' is a man');
}

// && - operator when all is true
// || - when on value is true
// ! - inverts true/false value