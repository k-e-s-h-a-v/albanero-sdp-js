function f(x) {
    console.log(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms

function delay(func, ms) {
    return function(){
        setTimeout(()=> func.apply(this, arguments), ms);
    }
}


// solution from website that i cant understand
function delay(f, ms) {
    return function(...args) {
      let savedThis = this; // store this into an intermediate variable
      setTimeout(function() {
        f.apply(savedThis, args); // use it here
      }, ms);
    };
  }