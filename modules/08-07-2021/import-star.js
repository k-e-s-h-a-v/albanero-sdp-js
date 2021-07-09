// // 📁 main.js
// import {sayHi, sayBye} from './say.js';

// sayHi('John'); // Hello, John!
// sayBye('John'); // Bye, John!


// But if there’s a lot to import, 
// we can import everything as an object using import * as <obj>, for instance:
// 📁 main.js
import * as say from './say.js';
say.sayHi('John');
say.sayBye('John');
// say is object here