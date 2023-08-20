const score = 400;
console.log(score);

const balance = new Number(100.849);
console.log(balance);

// number ke string a convart korar jonne to string use kora hoi 
console.log(balance.toString());
console.log(balance.toString().length);

// toFixed() use kora hoi e-commmerce website balance chake korar jonne dosomiker pore koiti number thakbe toFixed() at maddome bole deoa jai 
console.log(balance.toFixed(2));

// toPrecision() use kora aktu kostokar karon ati decimol first Number theke count kore thake jodi number ti koiti dokhar hobe ati jana thake ta hole toPrecision usr use kora valo na jana thakle use kora uchit na 
const otherNumber = 130.5678;
console.log(otherNumber.toPrecision(5));


// Number.MAX_SAFE_INTEGER The Number.MAX_SAFE_INTEGER static data property represents the maximum safe integer in JavaScript (253 – 1).
console.log(Number.MAX_SAFE_INTEGER);

// The Number.MAX_VALUE static data property represents the maximum numeric value representable in JavaScrip
console.log(Number.MAX_VALUE);

// The Number.MIN_SAFE_INTEGER static data property represents the minimum safe integer in JavaScript, or -(253 - 1).
console.log(Number.MIN_SAFE_INTEGER);

// The Number.MIN_VALUE static data property represents the smallest positive numeric value representable in JavaScript.
console.log(Number.MIN_VALUE);

// Return value The boolean value true if the given value is a finite number. Otherwise false.
console.log(Number.isFinite(1 / 0));
console.log(Number.isFinite(10 / 5));
console.log(Number.isFinite(0 / 0));


// Return value The boolean value true if the given value is an integer. Otherwise false.If the value is NaN or Infinity, return false. 
console.log(Number.isInteger(2));
console.log(Number.isInteger(2.3004));

// Return value The boolean value true if the given value is a number that is a safe integer. Otherwise false.
console.log(Number.isSafeInteger(22));
console.log(Number.isSafeInteger(22.444));

// Return value A floating point number parsed from the given string. Or NaN when the first non-whitespace character cannot be converted to a number.
console.log(Number.parseFloat('1qw111'));
console.log(Number.parseFloat('qw111'));
console.log(Number.parseFloat('123.321'));

// Return value An integer parsed from the given string. If the radix is smaller than 2 or bigger than 36, or the first non-whitespace character cannot be converted to a number, NaN is returned.
console.log(Number.parseInt(1222.332));

