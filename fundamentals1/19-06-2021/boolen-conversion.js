alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

//******************* conversion table ***************************
// Value	                        Becomes
// 0, null, undefined, NaN, ""	    false
// any other value	                true