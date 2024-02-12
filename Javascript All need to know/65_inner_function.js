function greetings(greet, name) {
  function getFirstName() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return "";
    }
  }

  console.log(greet + " " + getFirstName());
}

greetings("Good Morning", "jahirul islam");
