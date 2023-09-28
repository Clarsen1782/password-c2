// page with generate button

// Assignment Code
var generateBtn = document.querySelector("#generate");
//prompt Length of password 8 to 128 characters
const user = prompt ('Pick a Password length between 8 and 128:')

const number = parseInt(user);
//prompt Character types check lower/uppercase numeric, special
const Uppercase = confirm('Include uppercase letters?');
const Lowercase = confirm('Include lowercase letters?');
const Number = confirm('Include numbers?');
const Special = confirm('Include special characters?');

/*if (!Uppercase && !Lowercase && !Number && !Special) {
  alert("You must select at least one character type.");
  return;
}*/

//check at least 1 character type is slected

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//alert to display password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

