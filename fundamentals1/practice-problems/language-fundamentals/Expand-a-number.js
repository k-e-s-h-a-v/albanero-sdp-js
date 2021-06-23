// Create a function that expands a number into a string as shown below:

// 25 ➞ "20 + 5"
// 70701 ➞ "70000 + 700 + 1"
// 685 ➞ "600 + 80 + 5"
// Examples
// expandedForm(70304) ➞ "70000 + 300 + 4"

// expandedForm(1037903) ➞ "1000000 + 30000 + 7000 + 900 + 3"

// expandedForm(802539) ➞ "800000 + 2000 + 500 + 30 + 9"


function expand(num){
    let numStr = num.toString().split('');
    for(let i = 0 ; i < numStr.length; i++ ){
        for(let y = numStr.length - i; y > 1; y--){
           numStr[i] += '0'; 
        }
    }
    return numStr.join('+')
}
console.log(expand(4356))
