// class User {
//     asd() {return 'something'}
// }
// console.log(typeof User); // function
// a = new User();
// console.log(a.__proto__.__proto__.__proto__);

// class Rabbit {}

// console.log( Rabbit.prototype.__proto__ === Object.prototype ); // (1) true
// console.log( Rabbit.__proto__); // (2) false (!)
// console.log( Rabbit.__proto__ === Function.prototype ); // as any function by default

// // error, no such function in Rabbit
// console.log ( Rabbit.getOwnPropertyNames({a: 1, b: 2})); // Error

class CoffeeMachine {

    #waterAmount = 0;
  
    get waterAmount() {
      return this.#waterAmount;
    }
  
    set waterAmount(value) {
      if (value < 0) value = 0;
      this.#waterAmount = value;
    }
  }
  
  let machine = new CoffeeMachine();
  
  machine.waterAmount = 100;
  console.log(machine.waterAmount); // Error