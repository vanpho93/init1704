// var x; // hoisting
// if (true) {
//     a = 100;
//     console.log(a);
// }
// block scoped
// console.log(a);
// const a = 1;
// var a;
// console.log(x);
// var x = 10;
// baz(); // TypeError: baz is not a function

var baz = function() {
  console.log('bar2');
};

baz();
console.log(typeof (1 + ''));