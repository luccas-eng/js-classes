var name = "Lucas";
var job = "Fullstack Developer";

switch (job){
    case "Frontend Developer": 
    console.log(name + " is studing to become a " + job);
    break;
    case "Backend Developer":
    console.log(name + " is studing to become a " + job);
    break;
    case "Fullstack Developer":
    console.log(name + " is studing to become a " + job);
    break;
}

job = "Backend Developer";
switch (true) {
    case job === "Frontend Developer": 
    console.log(name + " is studing to become a " + job);
    break;
    case job === "Backend Developer":
    console.log(name + " is studing to become a " + job);
    break;
    case job === "Fullstack Developer":
    console.log(name + " is studing to become a " + job);
    break;
}