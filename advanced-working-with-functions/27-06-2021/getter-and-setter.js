let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
};

console.log(user.name); // John
console.log(user.surname); // Smith

// set fullName is executed with the given value.
user.fullName = "Alice Cooper Ajax";

console.log(user.name); // Alice
console.log(user.surname); // Cooper

console.log(user); 