let a = (1 + 2, 3 + 4);
console.log( a ); // 7 (the result of 3 + 4)
// Here, the first expression 1 + 2 is evaluated and its result is thrown away. 
// Then, 3 + 4 is evaluated and returned as the result.

// Please note that the comma operator has very low precedence, 
// lower than =, so parentheses are important in the example above.

// Without them: a = 1 + 2, 3 + 4 evaluates + first, 
// summing the numbers into a = 3, 7, then the assignment operator = assigns 
// a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.