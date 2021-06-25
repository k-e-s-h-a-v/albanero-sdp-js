function showName() {
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );
  
    // it's iterable
    // for(let arg of arguments) console.log(arg);
  }
  // shows: 2, Julius, Caesar
  showName("Julius", "Caesar");
  // shows: 1, Ilya, undefined (no second argument)
  showName("Ilya");

// arrow function do not have 'arguments'
// If we access the arguments object from an arrow function, 
// it takes them from the outer “normal” function.
function f() {
    let showArg = () => console.log(arguments[0]);
    showArg();
  }
  
  f(1,3); // 1
//   As we remember, arrow functions don’t have their own this. 
//   Now we know they don’t have the special arguments object either.