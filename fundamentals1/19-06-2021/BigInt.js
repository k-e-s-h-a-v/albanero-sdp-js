// In JavaScript, the “number” type cannot represent integer values 
// larger than (2^53 - 1) (that’s 9007199254740991), 
// or less than -(2^53 - 1) for negatives. 
// It’s a technical limitation caused by their internal representation.

// the "n" at the end means it's a BigInt
const bi = 1234567890123456789012345678901234567890n;
console.log(bi);