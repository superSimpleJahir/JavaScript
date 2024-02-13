const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const qb = array.map((value, index, array) => {
//   return (value*value*value, index, array);
// });

// console.log(qb);


const myMap = (arr, callback) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = callback(arr[i], i, arr);
    newArray.push(temp);
  }
  return newArray;
};

let newArray = myMap(array, (value, index, array) => {
  return value * value *value;
});
console.log(newArray);

// console.log(array);
