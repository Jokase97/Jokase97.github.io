// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //We will need to have variables to define the parameters of the password generation
  //length 8-128 characters
  //character types (lower, upper, numeric, special characters)

  var characters = {
    lowerChars: "abcdefghijklmnopqrstuvwxyz",
    upperChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numChars: "1234567890",
    specialChars: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '"'
  }

  var charsToUse = ""

  do{
    var passwordLength = parseInt(window.prompt("Please enter a password length from 8 to 128"), 10);
  }while(isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8);

  if(confirm("Press OK to add lowercase characters to the password")){
    charsToUse = charsToUse + characters["lowerChars"]
  }
  if(confirm("Press OK to add uppercase characters to the password")){
    charsToUse = charsToUse + characters["upperChars"]
  }
  if(confirm("Press OK to add numeric characters to the password")){
    charsToUse = charsToUse + characters["numChars"]
  }
  if(confirm("Press OK to add special characters to the password")){
    charsToUse = charsToUse + characters["specialChars"]
  }

  if(charsToUse.length == 0){
    alert("At least one character type must be confirmed.")
    return ""
  }

  var password = ""
  for(let i = 0; i < passwordLength; i++){
    password = password + charsToUse[Math.floor(Math.random()*charsToUse.length)]
  }

  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(password.length != 0){
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
