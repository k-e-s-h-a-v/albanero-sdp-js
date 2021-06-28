// “var” has no block scope
// Variables, declared with var, are either function-scoped or global-scoped. 
// They are visible through blocks.
if (true) {
  var test = true; // use "var" instead of "let"
}
console.log(test); // true, the variable lives after if

if (true) {
    let test = true; // use "let"
  }
  
alert(test); // ReferenceError: test is not defined

// The same thing for loops: var cannot be block- or loop-local:
for (var i = 0; i < 10; i++) {
  var one = 1;
  // ...
}
alert(i);   // 10, "i" is visible after loop, it's a global variable
alert(one); // 1, "one" is visible after loop, it's a global variable

function sayHi() {
    if (true) {
      var phrase = "Hello";
    }
    alert(phrase); // works
  }
  sayHi();
  alert(phrase); // ReferenceError: phrase is not defined

var user = "Pete";
var user = "John"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error
alert(user); // John

// “var” variables can be declared below their use
// var declarations are processed when the function 
// starts (or script starts for globals).
// In other words, var variables are defined from the beginning of the function,
// no matter where the definition is (assuming that the definition is 
// not in the nested function).
function sayHi() {
  phrase = "Hello";
  alert(phrase);
  var phrase;
}
sayHi();

function sayHi() {
    phrase = "Hello"; // (*)
    if (false) {
      var phrase;
    }
    alert(phrase);
  }
  sayHi();

function sayHi() {
    var phrase; // declaration works at the start...
    alert(phrase); // undefined
    phrase = "Hello"; // ...assignment - when the execution reaches it.
}
sayHi();
