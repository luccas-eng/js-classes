var Lucas = {
    birthYear: 1994,
    calcAge: function() {
        this.age = 2020 - this.birthYear;
    },
    firstName: 'Luke',
    lastName: 'Aham',
    family: ['Ale', 'Neide', 'Rob', 'Valde', 'Biga'],
    job: 'Developr',
    isMarried: false,
};

console.log(Lucas.firstName);
console.log(Lucas['lastName']);
var x = 'birthYear';
console.log(Lucas[x]);

Lucas.job = 'Designer';
Lucas['isMarried'] = true;
console.log(Lucas);

//different waty to declare objects

var bob = new Object();
bob.Name = 'Roberto';
bob.birthYear = 1979;
bob['family'] = 'Lucas';
console.log(bob)


// console.log(Lucas.calcAge());
Lucas.calcAge();
console.log(Lucas.calcAge());
console.log(Lucas)