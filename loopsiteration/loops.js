/* Loops and Iteration */

for (var i = 0; i < 10; i++){
    console.log(i)
}

// iteration over array items
var lucas = ['Lucas', 'Costa', 1994, 'dev', 'true'];

for (var i = 0; i < lucas.length; i++){
    console.log(lucas[i]);
}

//while looop

var i = 0;
while(i < lucas.length){
    console.log(lucas[i]);
    i++;
}

//continue and break statements
for (var i = 0; i < lucas.length; i++){
    if(typeof lucas[i] !== 'string') continue; {
        console.log(lucas[i])
    }
}

//looping backwards
for (var i = lucas.length - 1; i >= 0; i--){
    console.log(lucas[i]);
}