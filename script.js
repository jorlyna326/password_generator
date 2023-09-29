//arrays for password options
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

const specCharacter = ["!", "#", "$", "%", "&", "*", "?", "@", "^" ];
const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];

// Assignment Code
var generateBtn = document.querySelector("#generate");
let pwArr = [];
let pwObj = {};
let pw = [];

//prompts for password length (8-122) Alert if not valid
//prompts for uppercase => PasswordArr
//prompts for lowercase => PasswordArr
//prompts for numbers => PasswordArr
//prompts for symbol s=> PasswordArr


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
