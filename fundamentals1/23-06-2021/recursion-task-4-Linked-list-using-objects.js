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
function printList(list){
    console.log(list.value)
    return (list.next) ? printList(list.next) : null;
}
printList(list);

console.log('~~~~~~~~~~~~~');

function printListLoop(list) {
    let tmp = list;
    while (tmp) {
      console.log(tmp.value);
      tmp = tmp.next;
    }
  }
printListLoop(list);