let user = {
    name: "John",
    age: 30
  };
  
let key = prompt("What do you want to know about the user?", "name");
// access by variable
console.log( user[key] ); // John (if enter "name")


// We can use square brackets in an object literal, 
// when creating an object. That’s called computed properties.
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.apple ); // 5 if fruit="apple"
// The meaning of a computed property is simple: [fruit] means 
// that the property name should be taken from fruit.
// So, if a visitor enters "apple", bag will become {apple: 5}.
// Essentially, that works the same as:
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};
// take property name from the fruit variable
bag[fruit] = 5;
// …But looks nicer.

// We can use more complex expressions inside square brackets:
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

// In real code we often use existing variables as values for property names.
function makeUser(name, age) {
    return {
      name: name,
      age: age,
    };
  }
  let user = makeUser("John", 30);
  alert(user.name); // John
//   In the example above, 
//   properties have the same names as variables. 
//   The use-case of making a property from a variable is so common, 
//   that there’s a special property value shorthand to make it shorter.
  
//   Instead of name:name we can just write name, like this:
  function makeUser(name, age) {
    return {
      name, // same as name: name
      age,  // same as age: age
    };
  }
//   We can use both normal properties and shorthands in the same object:
  let user = {
    name,  // same as name:name
    age: 30
  };


// As we already know, 
// a variable cannot have a name equal to one of 
// language-reserved words like “for”, “let”, “return” etc.
// But for an object property, there’s no such restriction:
let obj = {
  for: 1,
  let: 2,
  return: 3
};
alert( obj.for + obj.let + obj.return );  // 6


let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( user[key] ); // John, 30, true
  }

  let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    alert(code); // 1, 41, 44, 49
  }


// So, to fix the issue with the phone codes,
// we can “cheat” by making the codes non-integer. 
// Adding a plus "+" sign before each code is enough.
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}