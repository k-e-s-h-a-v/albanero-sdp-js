// make current user information global, to let all scripts access it
global.currentUser = {
    name: "John"
};
  
// somewhere else in code
let a = () => {console.log(currentUser.name)};  // John
a();
// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
//console.log(global.currentUser.name); // John