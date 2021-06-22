// Method shorthand
// There exists a shorter syntax for methods in an object literal:
// these objects do the same
user = {
  sayHi: function() {
    alert("Hello");
  }
};
// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
};
//this
let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  };
  user.sayHi(); // John

  
  let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert( user.name ); // leads to an error
    }
  };
  let admin = user;
  user = null; // overwrite to make things obvious
  admin.sayHi(); // TypeError: Cannot read property 'name' of null


// “this” is not bound
// In JavaScript, keyword this behaves unlike most other programming languages. 
// It can be used in any function, even if it’s not a method of an object.
// There’s no syntax error in the following example:
function sayHi() {
  alert( this.name );
}

let user = { name: "John" };
let admin = { name: "Admin" };
function sayHi() {
  alert( this.name );
}
// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

function sayHi() {
    alert(this);
  }
  sayHi(); // undefined

// Arrow functions are special: they don’t have their “own” this. 
// If we reference this from such a function, it’s taken from the outer “normal” function.
// For instance, here arrow() uses this from the outer user.sayHi() method:
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};
user.sayHi(); // Ilya