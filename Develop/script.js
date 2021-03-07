// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//password data
let passwordLength;
let confirmLower;
let confirmUpper;
let confirmNumber;
let confirmSpecial;


let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

function generatePassword() {
  let userChoices = '';
  let result = '';
  //While loop to make sure criteria length is met
 while(1) {
    passwordLength = prompt("Indicate the number of characters for your password? Please choose between 8 and 128");
    if(passwordLength === null){
      return result;
    }
    if(!passwordLength) {
      alert("Character length required");

    } else if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = alert("Password must be 8-128 characters long")

    } else {
      break;
    }
  }
  //select character types - at least one has to be selected to move forward
  confirmUpper = confirm("Would you like to add upper case letters?");
  confirmLower = confirm("Would you like to add lower case letters?");
  confirmNumber = confirm("Would you like to add numbers?");
  confirmSpecial = confirm("Would you like to add special characters?");
  
  if (confirmUpper) {
    userChoices += upperCase.join('');
  }
  if (confirmLower) {
    userChoices += lowerCase.join('');
  }
  if (confirmNumber) {
     userChoices+= numbers.join('');
  }
  if (confirmSpecial) {
    userChoices += special.join('');
  }
   //for loop to generate random password with the chosen character types by user
  for(let i = 0; i < passwordLength; i++){
    result += userChoices.charAt(Math.floor(Math.random() * userChoices.length));
  }

  return result;
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}




  





















