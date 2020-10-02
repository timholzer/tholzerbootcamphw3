// Assignment Code
var generateBtn = document.querySelector("#generate");

//array of all upper/lower/number/special
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", ];

//add other variables here




//on button click - prompt "how long do you want your password to be? Has to be between 8-128 characters"
document.getElementById("generate").addEventListener("click", function(){
  var passLength = prompt("how long do you want your password to be? Has to be between 8-128 characters");
  console.log(passLength); 
});

//parseInt prompt to passLength
//if passLength is between 8-128 then move on, if not ask prompt again
//confirm "do you want upper case, lower, etc"
//if no confirms then alert "no options were checked, try again" then loop back to the confirms
//have a var array that has the arrays for the selected password types
//var array length
//randint of array -1 to select the input and loop through passlength
//return string


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
