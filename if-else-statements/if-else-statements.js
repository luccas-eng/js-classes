//if else statements basics in JS

var name = 'Lucas';
var civilStatus = 'single';
var isMarried = Boolean;

//note to self: when a boolean value was instanced first in here, the primitive value was set to false.
if (civilStatus === 'married') {
    console.log(name + 'is married.');
    isMarried = true;
} else {
    console.log(name + ' will hopefully marry soon.');
}

if (isMarried === true) {
    console.log(name + ' is married.')
} else {
    console.log(name + ' still single.')
}