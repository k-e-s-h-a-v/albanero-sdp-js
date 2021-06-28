name = { 
    firstname: "Keshav", 
    lastname: "Raj", 
}
let printFullName = function (hometown, state) { 
    console.log(this.firstname + " " + 
                this.lastname + " from " + 
                hometown + " , " + state);
}

printFullName.call(name, "Begusarai", "Bihar"); 
let name2 = {
    firstname: "Sachin", lastname: "Tendulkar", 
}
// function borrowing 
printFullName.call(name2, "Mumbai", "Maharashtra"); 
printFullName.apply(name2, ["Mumbai", "Maharashtra"]); 
// bind method 
let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra"); 
console.log(printMyName); 
printMyName(); 
