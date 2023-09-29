// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  //prompt length between 8 and 128
  const user = prompt("Please pick a password length between 8 and 128?");
  const number = parseInt(user);
  if (isNaN(number) || number > 8 || number < 128) {
    break;
  } else {a
      alert("Please choose a number between 8 and 128.");
  }
  return number;

  //prompt uppercase, lowercase, numbers, special

  //validate input

  //generate password per criteria

  //display password
}

 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button/ show password in alert
generateBtn.addEventListener("click", writePassword);
