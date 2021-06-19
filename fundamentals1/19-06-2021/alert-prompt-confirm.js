alert("Hello");//shows a message.

let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!
//shows a message asking the user to input text. 
// It returns the text or, if Cancel button or Esc is clicked, null.

let is18 = confirm("Are you 18+ ?");
alert( is18 ); // true if OK is pressed
// shows a message and waits for the user to press “OK” or “Cancel”. 
// It returns true for OK and false for Cancel/Esc.