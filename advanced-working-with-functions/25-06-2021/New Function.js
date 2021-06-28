let a = 3;
function abc(){
let a = 4;
let func = new Function('a','console.log(a+2)');
return func
}
abc()(a);