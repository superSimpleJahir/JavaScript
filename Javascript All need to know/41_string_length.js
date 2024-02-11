let str = "Md Jahirul";
let lengthNumber = 0;

while (true) {
  if (str.charAt(lengthNumber) === "") {
    break;
  } else {
    lengthNumber += 1;
  }
}

console.log(lengthNumber);
console.log(str.length);
