// find mathode

let arr = [1,2,3,45,67,4,643,74,34,23,45]

let value = 0;
let isFound = false

for (let i = 0; i < arr.length; i++) {
  if(arr[i] === value){
    console.log(`Data Found at index ${i}.`);
    isFound = true
  }
}

if (!isFound) {
  console.log("Data Not Found.");
}