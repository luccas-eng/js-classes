var name = 'Lucas';

function first(){
    var a = 'Hello ';
    console.log(a)
    second();
    var x = a + name;
    console.log(x)
}

function second(){
    var b = 'Hi ';
    console.log(b)
    third();
    var z = b + name;
    console.log(z)
}

function third(){
    var c = 'Hey ';
    var z = c + name;
    console.log(c + z)
}

first();