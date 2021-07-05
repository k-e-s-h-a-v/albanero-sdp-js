let user = { name: 'John' };
let admin = user;
admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference

let a = {};
let b = a; // copy the reference
alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

let a = {};
let b = {}; // two independent objects
alert( a == b ); // false

// cloning
let user = {
    name: "John",
    age: 30
  };
  let clone = {}; // the new empty object
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  alert( user.name ); // still John in the original object

//cloning using object.assign
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
// now user = { name: "John", canView: true, canEdit: true }

// If the copied property name already exists, it gets overwritten:
let user = { name: "John" };
Object.assign(user, { name: "Pete" });
alert(user.name); // now user = { name: "Pete" }



let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  let clone = Object.assign({}, user);
  alert( user.sizes === clone.sizes ); // true, same object
  // user and clone share sizes
  user.sizes.width++;       // change a property from one place
  alert(clone.sizes.width); // 51, see the result from the other one
//   To fix that, we should use a cloning loop that examines 
//   each value of user[key] and, if it’s an object, then replicate its structure as well. 
//   That is called a “deep cloning”.
//   We can use recursion to implement it. Or, to not reinvent the wheel, 
//   take an existing implementation, for instance _.cloneDeep(obj)
//   from the JavaScript library lodash.