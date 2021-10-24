// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Here goes my code - geronimo!
//Make sure password is between 8 - 128 characters
function generatePassword() {
  var passwordLength = parseInt(
    prompt("Enter the length of your password between 8 and 128")
  );
  var minChar = 8;
  var maxChar = 128;
  if (isNaN(passwordLength)) {
    alert("You must choose a number!");
  }
  //a. alert the user if the password is not between 8 and 128 characters
  else if (passwordLength < minChar) {
    alert("Password length must be at least 8 characters");
    passwordLength = 0;
  }
  else if (passwordLength > maxChar) {
    alert("Password length must be at most 128 characters!");
    passwordLength = 0;
  }

  // User confirms the type of characters should be used
  else {
    var useLowerCase = confirm("Click OK to use lowercase letters");
    var useUpperCase = confirm("Click OK to use uppercase letters");
    var useNumeric = confirm("Click OK to use numbers");
    var useSpecialChar = confirm("Click OK to use special characters");
  }

  // User should selected at least one type of character for their password
  if (
    useLowerCase === false &&
    useUpperCase === false &&
    useNumeric === false &&
    useSpecialChar === false
  ) {
    alert(
      "You must choose atleast ONE type of character to use for your password!"
    );
  } else {
    // These are the strings that will be used to generate the password

    var charLower = "abcdefghijklmnopqrstuvwxyz";
    var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charNum = "0123456789";
    var charSpecial = "~!@#$%^&*()_+=-[]{};:,.<>/?";
    var charStr = "";
    var guaranteedChar = [];
    function randomNum(a) {
      var number = Math.floor(Math.random() * a.length);
      return number;
    }

    function pushChar(x, y) {
      if (y) {
        charStr += x;
        guaranteedChar.push(x[randomNum(x)]);
      }
    }

    pushChar(charLower, useLowerCase);
    pushChar(charUpper, useUpperCase);
    pushChar(charNum, useNumeric);
    pushChar(charSpecial, useSpecialChar);
  }


  for (var i = 0, passwordStr = ""; i < passwordLength; i++) {
    passwordStr += charStr[randomNum(charStr)];
  }

  var passwordArray = passwordStr.split("");

  for (var i = 0; i < guaranteedChar.length; i++) {
    passwordArray[i] = guaranteedChar[i];
  }

  // This will finally turn the array back into a single string called finalPassword
  var finalPassword = passwordArray.join("");

  //This will return the value of the generated password
  return finalPassword;
}