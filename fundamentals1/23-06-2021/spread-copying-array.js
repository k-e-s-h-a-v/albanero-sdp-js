let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters
                        // then put the result into a new array

// do the arrays have the same contents?
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
console.log(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
console.log(arr); // 1, 2, 3, 4
console.log(arrCopy); // 1, 2, 3