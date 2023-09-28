// Assignment Code
var generateBtn = document.querySelector("#generate");
//prompt Length of password 8 to 128 characters
const user = prompt ('Pick a Password length between 8 and 128:')

const number = parseInt(user);
//prompt Character types check lower/uppercase numeric, special
const upperCase = confirm('Include uppercase letters?');
const lowerCase = confirm('Include lowercase letters?');
const numeric = confirm('Include numbers?');
const special = confirm('Include special characters?');

//check at least 1 character type is slected
const allChars = upperCase + lowerCase + numeric + special;
if (!upperCase, !lowerCase, !numeric, !special) {
  alert("You must have at least one Character Type!")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//alert to display password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

