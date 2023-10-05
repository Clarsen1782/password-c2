// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz".split("")
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numberChars = "0123456789".split("")
var specialChars = "$%#&".split("")

function generatePassword () {
  //prompt length between 8 and 128
  const passLength = parseInt(prompt("Please pick a password length between 8 and 128?"));
  
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
      alert("Please choose a number between 8 and 128.");
      return;
  }
  //prompt uppercase, lowercase, numbers, special
  const uppercase = confirm('Include uppercase letters?');
  const lowercase = confirm('Include lowercase letters?');
  const numbers = confirm('Include numbers?');
  const special = confirm('Include special characters?');
  var chrChoises = [] 

  if (!uppercase || !lowercase || !numbers || !special) {
    alert("Please choose at least one character typeof.");
    return "";
  }
if (uppercase) {
  chrChoises = chrChoises.concat(upperCaseChars);
}
if (lowercase) {
  chrChoises = chrChoises.concat(lowerCaseChars);
}
if (numbers) {
  chrChoises = chrChoises.concat(numberChars);
}
if (special) {
  chrChoises = chrChoises.concat(specialChars);
}
let generatePassword = '';

for (var i = 0; i < passLength; i++) {
      Math.floor(Math.random() * chrChoises.passLength);
}
}
  
 // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
