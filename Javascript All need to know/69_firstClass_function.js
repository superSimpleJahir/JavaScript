//! What is first class function?

function fan(a, b) {
  return a + b;
}

//! 1. A function can be stored in a variable
let sum = fan;
console.log(sum(10, 20));

//! 2. A function can be stored in an Array
let arr = [];
arr.push(fan);
console.log(arr[0](10, 10));

//! 3. A function can be stored in an Object
let obj = {
  sum: fan,
};
console.log(obj.sum(10, 20));

//! 4. We can create function as need
setTimeout(function () {
  console.log("I heve created...");
}, 1000);



//! 5. We can pass function as an arguments
//! 6. We can return functon from another function
function add(a, b) {
  return a + b;
}

function manipulite(a, b, fun) {
  let c = a + b;
  let d = a - b;
  return function () {
    let e = add(a, b);
    return c + d + e;
  };
}

console.log(manipulite(20, 10, add)());
