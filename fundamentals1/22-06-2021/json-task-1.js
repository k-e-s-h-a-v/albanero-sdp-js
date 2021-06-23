let user = {
    name: "John Smith",
    age: 35
  };

str = JSON.stringify(user);
console.log(str);
json = JSON.parse(str);
console.log(json);