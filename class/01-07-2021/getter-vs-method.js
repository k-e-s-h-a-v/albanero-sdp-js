// 1. Using the extra get keyword makes the functionality and privacy aspects of 
// the code clearer to other developers;
// 2. A getter won’t accept any arguments as parameters;
// 3. A getter cannot have it’s value reassigned.
// These 3 things don’t mean you can’t get the same result with a standard method, 
// but am I right that with the first point, 
// this ‘clarity’ is key to the privacy aspect, 
// and the added restrictions of the second and 
// third points help protect the properties from unwanted manipulation?

// In terms of the following advantages for using getters, given in the lesson:

// can perform actions on data when retrieving properties;
// can return different values using conditional statements;
// can access the properties of the calling object using this;
// … all of these things can also be done with a standard method 
// as can be shown with the following code:

// using a getter

// const robot = {
//   _name: '07XYSW',
//    get name () {             // name () {
//     if (typeof this._name === 'string' && this._name.length === 6) {
//       return this._name
//     } else {
//       return 'Invalid Robot Name'
//     }
//   }  
// }

// console.log(robot.name)     // console.log(robot.name())

/*
Make the 2 changes in the comments to run the same code with a standard
method (i.e. remove the keyword get, and add brackets to the method call)
*/


const robot = {
    _name: '07XYSW',
     name : function () {    
         this._name = 'keshav';         
    }  
  }
//   robot.name()
  console.log(robot._name)     // console.log(robot.name())
  