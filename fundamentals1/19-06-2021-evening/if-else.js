let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  console.log( 'Too early...' );
} else if (year > 2015) {
  console.log( 'Too late' );
} else {
  console.log( 'Exactly!' );
}

// the operator '?'
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
console.log( message );


let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
//above code can be written as
let result = (a + b < 4) ? 'Below' : 'Over';

let message;
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
// above code can be written as
let message = (login == 'Employee')? 'Hello' : 
(login == 'Director')? 'Greetings': 
(login == '') ? 'No login': 
'';