
var generateBtn = document.querySelector("#generate");
var numberOfCharacters;
var useUpperCase;
var useLowerCase;
var useNumbers;
var useSpecialCharacters;
var selectedCharacters = []
var randomCharacters = ""
var randomPassword = [];
var finalPassword = "";

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var nums = ["1","2","3","4","5","6","7","8","9","0",];
var specialCharacters = ["!","@","#","$","%","^","&","*","(","(","_","-","+","=","{","}","[","]","|",";",":","<",",",">",".","?","/",];

function generatePassword(){
  numberOfCharacters = parseInt(prompt("How many characters would you like to use? Please select a number from 8-128"));
  if (numberOfCharacters < "8" || numberOfCharacters > "128"){
    alert("Please choose a number of characters from 8-128");
    generatePassword();
  }else{

    useUpperCase = confirm("Do you want to use uppercase letters?");

    if(useUpperCase){
      selectedCharacters.push(...upperCase)
    }


    useLowerCase = confirm("Do you want to use lowercase letters?");

    if(useLowerCase){
      selectedCharacters.push(...lowerCase)
    }


    useNumbers = confirm("Do you want to use numbers?");

    if(useNumbers){
      selectedCharacters.push(...nums)
    }


    useSpecialCharacters = confirm("Do you want to use special characters?");

    if(useSpecialCharacters){
      selectedCharacters.push(...specialCharacters)
    }

    
    for(var x = 0; x < numberOfCharacters; x++){
      randomCharacters = selectedCharacters[(Math.floor(Math.random() * (selectedCharacters.length)))];
      randomPassword.push(...randomCharacters);
    }

    finalPassword = randomPassword.join("");
    
  }  

  return(finalPassword);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);