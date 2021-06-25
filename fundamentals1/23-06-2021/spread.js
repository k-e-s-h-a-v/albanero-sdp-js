let arr = [3, 5, 1];
console.log( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)
console.log('~~~~~~~~~~~~~~~~')
// We also can pass multiple iterables this way:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log( Math.max(...arr1, ...arr2) ); // 8
console.log('~~~~~~~~~~~~~~~~')
// We can even combine the spread syntax with normal values:
console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25
console.log('~~~~~~~~~~~~~~~~')
// Also, the spread syntax can be used to merge arrays:
arr = [3, 5, 1];
arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
console.log(merged); // [0,3,5,1,2,8,9,15] (0, then arr, then 2, then arr2
console.log('~~~~~~~~~~~~~~~~')
// any iterable can be spread using spread syntax.
// spread syntax to turn the string into array of characters:
let str = "Hello";
console.log( [...str] ); // [H,e,l,l,o]
console.log('~~~~~~~~~~~~~~~~')
// Array.from converts an iterable into an array
console.log( Array.from(str) ); // [H,e,l,l,o]