// Number of Even or Odd Digits
// Create a function that takes in an array of integers returns 
//the number of even or odd digits for each number, depending on the parameter.

// Examples
// countDigits([22, 53, 99, 61, 777, 8], "odd") ➞ [0, 2, 2, 1, 3, 0]

// countDigits([22, 53, 99, 61, 777, 8], "even") ➞ [2, 0, 0, 1, 0, 1]

// countDigits([54, 113, 89, 10], "odd") ➞ [1, 3, 1, 1]

// countDigits([54, 113, 89, 10], "even") ➞ [1, 0, 1, 1]


console.log(countDigits([22, 53, 99, 61, 777, 8], "odd"));
console.log(countDigits([22, 53, 99, 61, 777, 8], "even"));
console.log(countDigits([54, 113, 89, 10], "odd"));
console.log(countDigits([54, 113, 89, 10], "even"));

function countDigits(arr, how) {
	if(how === 'odd'){
		return arr.map(e => e.toString().split('').reduce((sum, ele) => parseInt(ele) % 2 !== 0 ? sum + 1 : sum, 0));
	} else {
		return arr.map(e => e.toString().split('').reduce((sum, ele) => parseInt(ele) % 2 === 0 ? sum + 1 : sum, 0));
	}
}