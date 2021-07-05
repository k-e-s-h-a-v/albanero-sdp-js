// Promises VIII: Old Callback API
// You may run into some old asynchronous API that requires you to pass in a callback. 
// Take the setTimeout() function for example:

const { reject } = require("async")

// setTimeout(() => saySomething("1 second passed"), 1000)
// What if an error occured in the saySomething() function. How could you handle it? 
// Wrap it with a Promise!

// There are some elements missing in the wait function, it should return a promise. 
// Create an error handler and assign the error to ERR inside the handler.

// Notes
// Do not change the function saySomething().
// You should not have to erase any of the existing code.
// Check Resources if you get stuck.

function saySomething(str) {
	throw "what the heck"
}

let ERR = ""

const wait = () => new Promise (() => {
	setTimeout( saySomething , 1000)
});

console.log(wait().then(() => saySomething("1 second has passed")));