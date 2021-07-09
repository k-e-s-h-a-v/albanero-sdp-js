// Export default
// In practice, there are mainly two kinds of modules.

// Modules that contain a library, pack of functions, like say.js above.
// Modules that declare a single entity, e.g. a module user.js exports only class User.
// Mostly, the second approach is preferred, so that every “thing” resides 
// in its own module.

// Naturally, that requires a lot of files, as everything wants its own module, 
// but that’s not a problem at all. 
// Actually, code navigation becomes easier if files are well-named and 
// structured into folders.

// Modules provide a special export default (“the default export”) 
// syntax to make the “one thing per module” way look better.

// Put export default before the entity to export:

// 📁 user.js
export default class User { // just add "default"
  constructor(name) {
    this.name = name;
  }
}

// There may be only one export default per file.
// …And then import it without curly braces:

// 📁 main.js
import User from './user.js'; // not {User}, just User

new User('John');


// As there may be at most one default export per file, 
// the exported entity may have no name.
// For instance, these are all perfectly valid default exports:
export default class { // no class name
  constructor() { 
    //
   }
}
export default function(user) { // no function name
  alert(`Hello, ${user}!`);
}
// export a single value, without making a variable
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


// The “default” name
// In some situations the default keyword is used to reference the default export.
// For example, to export a function separately from its definition:
function sayHi(user) {
  alert(`Hello, ${user}!`);
}
// same as if we added "export default" before the function
export {sayHi as default};


// Or, another situation, let’s say a module user.js 
// exports one main “default” thing, and a few named ones (rarely the case, but it happens):
// 📁 user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}