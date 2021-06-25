function sumAll(...args) { // args is the name for the array
    let sum = args.reduce((accumulator, current) => accumulator + current);
  
    return sum;
  }
  
  console.log( sumAll(1) ); // 1
  console.log( sumAll(1, 2) ); // 3
  console.log( sumAll(1, 2, 3) ); // 6
