function shout(string) {
  return string.toUpperCase() //why this syntax? method- functions stored as object properties
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(`${string.toUpperCase()}`)
}

function logWhisper(string) {
  console.log(`${string.toLowerCase()}`)
}

function sayHiToGrandma(string) {
  var uppercase = "HELLO";
  var lowercase = "hello";
  var love = "I love you, Grandma.";

    if (string === uppercase){
      return "YES INDEED!"
    }

    else if (string === lowercase) {
      return "I can\'t hear you!"
    }

    else if (string === love) {
      return "I love you, too."
    }

}
