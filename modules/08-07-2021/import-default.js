// Here’s how to import the default export along with a named one:
// 📁 main.js
import {default as User, sayHi} from './user.js';
new User('John');


// And, finally, if importing everything * as an object, 
// then the default property is exactly the default export:
// 📁 main.js
import * as user from './user.js';
let User = user.default; // the default export
new User('John');