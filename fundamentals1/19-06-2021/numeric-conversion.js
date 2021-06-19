let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number

alert( "6" / "2" ); // 3, strings are converted to numbers

let age = Number("an arbitrary string instead of a number");
console.log(age); // NaN, conversion failed

//******************* conversion table ***************************
// Value	        Becomes
// undefined	    NaN
// null	            0
// true and false	1 and 0
// string	        Whitespaces from the start and end are removed. 
//                  If the remaining string is empty,
//                  the result is 0. Otherwise, 
//                  the number is “read” from the string. An error gives NaN.

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0