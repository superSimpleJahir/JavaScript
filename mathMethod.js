/*=============Math.PI()=============*/
const pi = Math.PI;
console.log(pi.toFixed(4));

/*=============Math.abs()=============*/
// The Math.abs() static method returns the absolute value of a number.Return value The absolute value of x. If x is negative (including -0), returns -x. Otherwise, returns x. The result is therefore always a positive number or 0.
const a = 30;
const b = 20;
console.log(b - a);
// return -10;
console.log(Math.abs(b - a));
// return 10;

/*=============Math.ceil()=============*/
// The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.Return value The smallest integer greater than or equal to x. It's the same value as -Math.floor(-x).
console.log(Math.ceil(2.0099));
console.log(Math.ceil(2.9099));
console.log(Math.ceil(2.6099));

/*=============Math.floor()=============*/
// The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.Return value The largest integer smaller than or equal to x. It's the same value as -Math.ceil(-x).
console.log(Math.floor(5.99999));
console.log(Math.floor(3.6999));
console.log(Math.floor(4.299));

/*=============Math.imul()=============*/
// The Math.imul() static method returns the result of the C - like 32 - bit multiplication of the two parameters.Return value The result of the C-like 32-bit multiplication of the given arguments.
console.log(Math.imul(5, 5));
console.log(Math.imul(5, 7));
console.log(Math.imul(11, 8));

/*=============Math.min()=============*/
// The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.Return value The smallest of the given numbers. Returns NaN if any of the parameters is or is converted into NaN. Returns Infinity if no parameters are provided.
console.log(Math.min(2, 4, 65, 443, 0.4, -33, -0.99));

/*=============Math.max()=============*/
// The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters. Return value The largest of the given numbers. Returns NaN if any of the parameters is or is converted into NaN. Returns -Infinity if no parameters are provided.

console.log(Math.max(2, 4, 65, 443, 0.4, -33, -0.99));
/*=============Math.pow()=============*/
// The Math.pow() static method returns the value of a base raised to a power.That is 𝙼𝚊𝚝𝚑.𝚙𝚘𝚠(𝚡,𝚢)=�� The exponent value of the expression. Returns the value of a base expression taken to a specified power.

console.log(Math.pow(7, 2));
// return 49;
console.log(Math.pow(7, 3));
// return 343;
console.log(Math.pow(4, .5));
// return 2;

/*=============Math.round()=============*/
// The Math.round() static method returns the value of a number rounded to the nearest integer.
console.log(Math.round(0.9));
// Expected output: 1
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Expected output: -5 -5 -6


/*=============Math.random()=============*/
// The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor((Math.random() * 10) + 1));

const max = 6;
const min = 1;
console.log(Math.floor(Math.random() * (max - min + 1) + min));

/*=============Math.sqrt()=============*/
// The Math.sqrt() static method returns the square root of a number. The square root of x, a nonnegative number. If x < 0, returns NaN.
// function calcHypotenuse(a, b) {
//   return Math.sqrt(a * a + b * b);
// }
// console.log(calcHypotenuse(3, 4));
// // Expected output: 5
// console.log(calcHypotenuse(5, 12));
// // Expected output: 13
// console.log(calcHypotenuse(0, 0));
// // Expected output: 0