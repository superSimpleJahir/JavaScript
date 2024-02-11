let arr = [1, 2, 3, 45, 67, 4, 643, 74, 34, 23];

let reverseArray = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reverseArray.push(arr[i]);
}
// console.log(reverseArray);

for (let i = 0; i < arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp
}
console.log(arr);
