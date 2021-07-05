// Below you can find the “rethrow” example. Rewrite it using async/await 
// instead of .then/catch.

// And get rid of the recursion in favour of a loop in demoGithubUser: 
// with async/await that becomes easy to do.

// class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpError';
//       this.response = response;
//     }
//   }
  
//   function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new HttpError(response);
//         }
//       });
//   }
  
//   // Ask for a user name until github returns a valid user
//   function demoGithubUser() {
//     let name = prompt("Enter a name?", "iliakan");
  
//     return loadJson(`https://api.github.com/users/${name}`)
//       .then(user => {
//         console.log(`Full name: ${user.name}.`);
//         return user;
//       })
//       .catch(err => {
//         if (err instanceof HttpError && err.response.status == 404) {
//           console.log("No such user, please reenter.");
//           return demoGithubUser();
//         } else {
//           throw err;
//         }
//       });
//   }
  
//   demoGithubUser();
const prompt = require('prompt');
const fetch = require('node-fetch');
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }
  
  async function demoGithubUser() {
    let user;
    while(true) {
      let name = "k-e-s-h-a-v";
  
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break;
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
          console.log("No such user, please reenter.");
        } else {
          throw err;
        }
      }
    }
  
  
    console.log(`Full name: ${user.login}.`);
    return user;
  }
  
  demoGithubUser();