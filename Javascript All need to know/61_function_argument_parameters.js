const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [11, 21, 31, 41, 51, 61, 71, 81, 91];
const arr3 = [111, 211, 311, 411, 511, 611, 711, 811, 911];

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}

sum(arr1);
sum(arr2);
sum(arr3);
