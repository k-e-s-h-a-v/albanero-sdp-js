function printNumbers(start, end) {
  setTimeout(function print() {
    console.log(start);
    if (start++ < end) {
      setTimeout(print, 1000 //rest of the calls
      );
    }
  }, 1000 //only for first call
  );
}
printNumbers(3, 6);
console.log(printNumbers.start);