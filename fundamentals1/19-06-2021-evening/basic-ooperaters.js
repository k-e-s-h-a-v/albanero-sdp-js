// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

console.log( 5 % 2 ); // 1, a remainder of 5 divided by 2
console.log( 8 % 3 ); // 2, a remainder of 8 divided by 3

console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16

// plus loves strings more
// others love numbers more
let s = "my" + "string";
console.log(s); // mystring
console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
console.log(2 + 2 + '1' ); // "41" and not "221"
console.log('1' + 2 + 2); // "122" and not "14"
console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers

// unary' +' is Same as Number(....) but storter
// No effect on numbers
let x = 1;
console.log( +x ); // 1
let y = -2;
console.log( +y ); // -2
// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0

let apples = "2";
let oranges = "3";
console.log( apples + oranges ); // "23", the binary plus concatenates strings
// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5
// the longer variant
console.log( Number(apples) + Number(oranges) ); // 5


// high Precedence means high priority
// Precedence	Name	        Sign
// 17	        unary plus	    +
// 17	        unary negation	-
// 16	        exponentiation	**
// 15	        multiplication	*
// 15	        division	    /
// 13	        addition	    +
// 13	        subtraction	    -
// 3	        assignment	    =


// Assignment = returns a value
// The call x = value writes the value into x and then returns it.
// eg:
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log( a ); // 3
console.log( c ); // 0

// Chaining assignments
let a, b, c;
a = b = c = 2 + 2;
console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4

// Modify-in-place
let n = 2;
n = n + 5;
n = n * 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
console.log( n ); // 14
n *= 3 + 5;
console.log( n ); // 16  (right part evaluated first, same as n *= 8)

// Increment/decrement
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
console.log( counter ); // 3
counter--;        // works the same as counter = counter - 1, but is shorter
console.log( counter ); // 2
// all operators return a value. Increment/decrement is no exception. 
// The prefix form returns the new value while the postfix 
// form returns the old value (prior to increment/decrement).
let counter = 1;
let a = ++counter; // prefix increment
console.log(a); // 2
a = counter++; // postfix increment
console.log(a); // 2

let counter = 0;
counter++;
++counter;
console.log( counter ); // 2, the lines above did the same

let counter = 1;
console.log( 2 * ++counter ); // 4

let counter = 1;
console.log( 2 * counter++ ); // 2, because counter++ returns the "old" value