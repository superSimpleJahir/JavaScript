const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array.forEach((value, index, array) => {
  console.log(value, index, array);
});

// create my foreach methode
const myForeach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i] ,i ,arr);
  }
};

myForeach(array, function (value, index, array) {
  console.log(value, index, array);
});
