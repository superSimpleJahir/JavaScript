// jodi function ar kono parameter deoa na hoi kinttu function ar argument deoa hoi tahole oi value gula dorar janne arguments key world use kora hoi. akhon arguments akti array dey.

function add() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  console.log(sum);
}

add(10, 20, 30, 3, 3, 4);
add(10, 20, 30, 3, 3, 5);
