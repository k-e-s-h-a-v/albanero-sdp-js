// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4] } and returns an array of objects like { name: "John", topNote: 5 }.

// If student has no notes (an empty array) then let's assume topNote: 0.

// Examples
// getStudentsWithNamesAndTopNotes([
//   { "name": "John", "notes": [3, 5, 4] },
//   { "name": "Max", "notes": [1, 4, 6] },
//   { "name": "Zygmund", "notes": [1, 2, 3] }
// ])
// ➞ [
//   { "name": "John", "topNote": 5 },
//   { "name": "Max", "topNote": 6 },
//   { "name": "Zygmund", "topNote": 3 }
// ]
// Notes
// Try solving this challenge with an arrow function.

function getStudentsWithNamesAndTopNotes(arr){
    let ans = [];
    for (let student of arr){
        ans.push({student['name'],});
    }
}
getStudentsWithNamesAndTopNotes([
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] }
  ]);