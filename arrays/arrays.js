//in JS you can have a mix of data types into an array

var Lucas = ['Mark', 'Smith', 1994, 'Developer', true];

// search for builtin methods for use with arrays: pop, push...

console.log(Lucas.indexOf(1994));

//note: when useing arrays and searching items by indexOf, -1 is returned when there is no element inside that array as ex
var ind = Lucas.indexOf('Designer') === -1 ? 'Lucas is NOT a Designer' : 'Lucas is a Designer';
console.log(ind);