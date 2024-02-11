let isRunning = true;

while (isRunning) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (random_number === 9) {
    console.log("Winner winner chicken dinner");
    isRunning = false;
  } else {
    console.log("you got the " + randomNumber);
  }
}
