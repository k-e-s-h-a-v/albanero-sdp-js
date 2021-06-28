function printNumber(start, end){
    let id = setInterval(() => {
        console.log(Math.trunc(start+id._idleStart/1000 ));
        if (start+id._idleStart/1000 >= end) clearInterval(id);
    },1000)
}
printNumber(7, 14)