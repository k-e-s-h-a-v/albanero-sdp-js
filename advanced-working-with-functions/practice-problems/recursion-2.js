// Converting One Binary String to Another
// Write a function that returns the minimum number of 
// swaps to convert the first binary string into the second.

// Examples
// minSwaps("1100", "1001") ➞ 1

// minSwaps("110011", "010111") ➞ 1

// minSwaps("10011001", "01100110") ➞ 4

// Notes
// Both binary strings will be of equal length.
// Both binary strings will have an equal number of zeroes and ones.
// A swap is switching two elements in a string (swaps do not have to be adjacent).

function minSwaps(b1, b2) {
    let ans = 0;
    for (let i = 0; i <= b1.length; i++) {
        ans += b1[i]==b2[i] ? 0 : 1;
    }
    return ans/2;
}

console.log(
    minSwaps("10011001", "01100110")
);