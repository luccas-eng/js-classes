//Hoisting

function calculateAge(year){
    console.log(2020 - year);
}

calculateAge(1994);

//we can host the function call before the function declaration in JS

console.log(year);
var year = 1994;
console.log(year);
var age = 25;
console.log(age);

var retirement = function(year){
    console.log(74 - (2020 - year));
}

function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
    console.log(this);
}
foo();
console.log(age);


console.log(this);


var lucas = {
    name: 'Lucas',
    yearOfBirth: 1994,
    calculateAge: function(){
        console.log(this);
        console.log(2020 - this.yearOfBirth);

        function innerFunc() {
            console.log(this);
        }
        innerFunc();
    }
}

lucas.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

//can assign variable method to another variable
mike.calculateAge = lucas.calculateAge;
mike.calculateAge();
