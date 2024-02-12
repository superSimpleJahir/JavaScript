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
