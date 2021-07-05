let user = {
    name: "John"
};

Object.defineProperty(user, "name", {
    configurable: false,
    writable: false
});

user.name = "Pete"; // works fine
// delete user.name; // Error

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log( JSON.stringify(descriptor, null, 2 ) );
