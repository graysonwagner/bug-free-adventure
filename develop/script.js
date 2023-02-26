



var generateButton = document.querySelector("#generate")
var passwordText = document.querySelector("#password")
var copyButton = document.querySelector("#copy")


// Possible outcomes
var password = ''
var specialCharacterList = '@#$%^&*()'
var numericCharactersList = '1234567890'
var lowercaseCharactersList = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseCharactersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var possibleCharacterList = ''

function makePassword() {
  var passwordLength = prompt('How many characters would you like in your password? (8-128)');

    passwordLength = parseInt(passwordLength)
    if (passwordLength > 128 || passwordLength < 8) {
        alert('Password length must be between 8 and 128 characters.')
        return;
    }
    
    if (Number.isNaN(passwordLength) === true) {
        alert('This must be a number.')
        return;
    }

    var specialCharacters = confirm('Do you want special characters?')
    var numericCharacters = confirm('Do you want numbers?')
    var lowercaseCharacters = confirm('Do you want lowercase letters?')
    var uppercaseCharacters = confirm('Do you want uppercase Characters?')

    if (specialCharacters === true) {
        possibleCharacterList += specialCharacterList
    }

    if (numericCharacters === true) {
        possibleCharacterList += numericCharactersList
    }

    if (lowercaseCharacters === true) {
        possibleCharacterList += lowercaseCharactersList
    }

    if (uppercaseCharacters === true) {
        possibleCharacterList += uppercaseCharactersList
    }

    if (specialCharacters === false && numericCharacters === false && lowercaseCharacters === false && uppercaseCharacters === false) {
        alert('Select at least one character')
        return;
    }

    for (var i = 0; i < passwordLength; i++) {
        password += possibleCharacterList.charAt(Math.floor(Math.random() * possibleCharacterList.length));
    }

    // Password sent to textbox!
    passwordText.textContent = password
}
// Clipboard function
function clipboard() {
  passwordText.select();
  passwordText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + passwordText.value);
}
generateButton.addEventListener("click", makePassword);

copyButton.addEventListener("click", clipboard);