//The number type represents both integer and floating point numbers.
let n = 123;
n = 12.345;

// Infinity represents the mathematical Infinity ∞. 
// It is a special value that’s greater than any number.
// We can get it as a result of division by zero:
console.log( 1 / 0 ); // Infinity
//similarly for -Infinity
console.log(- 1 / 0 ); // -Infinity

// Or just reference it directly:
console.log( Infinity ); // Infinity


// NaN represents a computational error. 
// It is a result of an incorrect or an undefined mathematical operation, 
console.log( "not a number" / 2 ); // NaN, such division is erroneous

// NaN is sticky. Any further operation on NaN returns NaN:
console.log( "not a number" / 2 + 5 ); // NaN
