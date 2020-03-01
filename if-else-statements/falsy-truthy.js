//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values
//note to self: JS has a common pattern to check if a variable is defined;

var height;

if (height){
    console.log("Variable is defined");
} else {
    console.log("Variable has NOT been defined")
}

//in this first case, JS evaluates if the variable is defined;

var height;

height = 0;

if (height || height === 0){
    console.log("Variable is defined");
} else {
    console.log("Variable has NOT been defined")
}

//note the equal equal operator compares the data only, the triple equality operator evaluates the datatype and also de value.