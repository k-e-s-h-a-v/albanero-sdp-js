// || //OR
// OR "||" finds the first truthy value
result = value1 || value2 || value3;
alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)
alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickname = "SuperCoder";
alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// only the second message is printed:
true || alert("not printed");
false || alert("printed");


// && //AND
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 3, the last one

(x > 0) && alert( 'Greater than zero!' );
// is same as 
if (x > 0) alert( 'Greater than zero!' );

// Precedence of AND && is higher than OR ||
// The precedence of AND && operator is higher than OR ||.
// So the code a && b || c && d is essentially the same as 
// if the && expressions were in parentheses: (a && b) || (c && d).


alert( !true ); // false
alert( !0 ); // true
// A double NOT !! is sometimes used for converting a value to boolean type:
alert( !!"non-empty string" ); // true
alert( !!null ); // false

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
// The precedence of NOT ! is the highest of all logical operators, 
// so it always executes first, before && or ||.