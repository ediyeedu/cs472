/*function foo(){
    console.log(arguments);
}
function foo(arg1){
    console.log(arg1);
}
function foo(arg1,arg2){
    console.log(arg1,arg2);
}
function foo(arg1,arg2,arg3){
    console.log(arg1,arg2,arg3);
}
foo();
foo(1);
foo(1,2);
foo(1,2,3);*/
/*const str = 'Hello';
const arr = [...str];
console.log(arr);*/

//console.log("hHello world")
// alert("example of alert")
// console.log(typeof true)
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof {})
// console.log(typeof [])
// a=5
// console.log(a)
// var a = 10;
// console.log(a)

// const x=5;
// console.log(x);
// if(x==5){
//     var y=2*x;
//     let x=4;
//     console.log(x);
//     console.log(y);
// }
// console.log(y);
// console.log(x);
// function sum(x,y){
//     return x+y;
// }
// console.log(sum());
// let x = 10;
// function main() {
// let x;
// console.log("x1: " + x);
// if (x > 0) {
// let x = 30;
// console.log("x2: " + x);
// }
// x= 40;
// let f = function(x) { console.log("x3: " + x); }
// f(50);
// }
// main();
    function order(a,b){
        if(a>b) return 1;
        if(a==b) return 0;
        if(a<b) return -1;
    }
    let arr = [9,2,8,4];
arr.sort(order);
console.log(arr);
