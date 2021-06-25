let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
function printReverseList(list) {
    if (list.next) {
      printReverseList(list.next);
    }
    console.log(list.value);
  }
printReverseList(list);
console.log('~~~~~~~~~~~~~~~~~~')
function printReverse(list) {
    let arr=[];
    let tmp = list;
    while (tmp){
        arr.unshift(tmp.value)
        tmp = tmp.next;
    }
    for (i of arr){
        console.log(i);
    }
}
printReverse(list)

