const myBirthday = '18.04.1982';

// There is a widespread practice to use constants 
// as aliases for difficult-to-remember values that are 
// known prior to execution.
// Such constants are named using capital letters and underscores.
// For instance, let’s make constants for colors in so-called 
// “web” (hexadecimal) format:

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(color); // #FF7F00

// When should we use capitals for a constant and 
// when should we name it normally? Let’s make that clear.
// Being a “constant” just means that a variable’s value never changes. 
// But there are constants that are known prior to execution 
// (like a hexadecimal value for red) and there are constants 
// that are calculated in run-time, during the execution, 
// but do not change after their initial assignment.
// Example:
// const pageLoadTime = /* time taken by a webpage to load */;
// is in small
// In other words, 
// capital-named constants are only used as aliases for “hard-coded” values.

a = 35;
const age = a;
console.log(age)
