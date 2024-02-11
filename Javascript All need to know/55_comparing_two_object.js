const obj = {
  a: 10,
  b: 20,
};

const obj2 = {
  a: 10,
  b: 20,
};

// 1 way comparing object
if (obj.a === obj2.a && obj.b === obj2.b) {
  console.log(true);
} else {
  console.log(false);
}
//  2 nd way comparing object

console.log(JSON.stringify(obj) === JSON.stringify(obj2));
