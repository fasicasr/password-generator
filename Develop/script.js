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
let userChoices = [];

let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  //Alerts (pop up) when user doesn't choose character amount or the amount is under 8 or above 123 characters
  passwordLength = prompt("Indicate the number of characters for your password? Please choose between 8 and 128");

  if(!passwordLength) {
    alert("Character length required");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password must be 8-128 characters long")
  
  } else { 
    confirmLower = confirm("Would you like to add lower case letters?");
    confirmUpper = confirm("Would you like to add upper case letters?");
    confirmNumber = confirm("Would you like to add numbers?");
    confirmSpecial = confirm("Would you like to add special characters?");
  };

  if (confirmUpper) {
    userChoices.push(upperCase);
  }
  if (confirmLower) {
    userChoices.push(lowerCase);
  }
  if (confirmNumber) {
    userChoices.push(numbers);
  }
  if (confirmSpecial) {
    userChoices.push(special);
  }

  return userChoices.join('');
}
//   // Loop for random selection
//   for (let i = 0; i < passwordLength; i++) {
//     generatePassword.push(userChoices[(Math.floor(Math.random()*userChoices.length))]);
//   }
  
//   return (generatePassword.join(''));
// } 

  





















