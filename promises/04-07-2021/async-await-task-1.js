// Rewrite this example code from the chapter Promises 
// chaining using async/await instead of .then/catch:

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }
// loadJson('no-such-user.json')
//   .catch(alert); // Error: 404

const fetch = require('node-fetch');
async function loadJson(url) { 
    let response = await fetch(url);
  
    if (response.status == 200) {
      let json = await response.json(); 
      return json;
    }
  
    throw new Error(response.status);
  }
  
  loadJson('https://no-such-user.json')
    .catch(console.log); // Error: 404 (4)