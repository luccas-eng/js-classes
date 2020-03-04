/* Functions lesson on JS */

function calculateAge(birthYear){
    return 2020 - birthYear;
}

// calculateAge(1994);

var ageLucas = calculateAge(1994);
console.log(ageLucas);

//using functions to call other functions example

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 68 - age;
    console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1994, 'Lucas');