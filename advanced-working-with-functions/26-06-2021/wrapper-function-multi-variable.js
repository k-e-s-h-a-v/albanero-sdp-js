let worker = {
  slow(min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }
    let result = func.call(this, ...arguments); // (**)
    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}
worker.slow = cachingDecorator(worker.slow, hash);

alert( worker.slow(3, 5) ); // works
alert( "Again " + worker.slow(3, 5) ); // same (cached)

// In the line (*) it calls hash to create a single key from arguments. 
// Here we use a simple “joining” function that turns arguments (3, 5) 
// into the key "3,5". More complex cases may require other hashing functions.
// Then (**) uses func.call(this, ...arguments) to pass both the context and 
// all arguments the wrapper got (not just the first one) to the original function.