// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  //prompt length between 8 and 128
  const user = parseTnt(prompt("Please pick a password length between 8 and 128?"));
  
  if (isNaN(user) || number < 8 || number > 128) {
      alert("Please choose a number between 8 and 128.");
      return;
  }
  //prompt uppercase, lowercase, numbers, special
  const uppercase = confirm('Include uppercase letters?');
  const lowercase = confirm('Include lowercase letters?');
  const numbers = confirm('Include numbers?');
  const special = confirm('Include special characters?');

  if (!uppercase || !lowercase || !number || !special) {
    alert("Please choose at least one character typeof.");
    return;
  }
  //validate input
  const charset = (
    (uppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
    (lowercase ? 'abcdefghijklmnopqrstuvwxyz' : '') +
    (numbers ? '0123456789' : '') +    
    (special ? '!@#$%^&*()_-+=<>?' : '')
  );

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
}

 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button/ show password in alert
generateBtn.addEventListener("click", writePassword);
