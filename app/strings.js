// Write a function that returns the character from a string at a given position
function letterAtPosition(str, position) {
  //finds the position in the string
  let i = str.charAt(position);
  //shows on console
  console.log(i)
  //sends i to memory to be used
  return i;
}

// Write a function that will join two strings with an optional seperating character 
function concat(str1, str2, seperator = " ") {
  //combines the two strings, places seperator between
  let i = str1.concat(seperator, str2)
  console.log(i)
  return i;
}

// Write a function that will capitalize the letter at a given position and return it
function capitalizer(str, position) {
  //finds the position in the string, then capitalizes it
  return str.charAt(position).toUpperCase()
  //capitalizes
  console.log(capitalizer);
}