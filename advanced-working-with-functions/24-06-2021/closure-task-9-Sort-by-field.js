let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

// // by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);
// console.log(users);
// // by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// console.log(users);

function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}


console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));
console.log(users.sort(byField('surname')));
