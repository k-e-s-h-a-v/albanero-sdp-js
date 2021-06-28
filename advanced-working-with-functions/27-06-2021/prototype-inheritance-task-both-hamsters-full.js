let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach = [food];
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple
// *******************************************************
// this works too
  let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  
  // Speedy one found the food
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // Lazy one's stomach is empty
  alert( lazy.stomach ); // <nothing>