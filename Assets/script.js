// Assignment Code
//-----------------------------New code starts here-----------------------------------------
const upperCase="ABCDEFGHIJKLMNOPQRSTUV";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const specialChar="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const numbers="0123456789";
//define and initialize password length 
let passwordLength=8;

// function which returns randume element from a given string
let strElement="";
function  getRandumStrElement(strElement){
    return strElement[Math.floor(Math.random()*strElement.length)];
}

//this function prompts and captures a valid password length and charactor types  and  generates randum password with the requsted length and selected charactor types. It also display an alert if the entry is not valid.

function generatePassword(){
  passwordLength = Number(prompt("Please enter password length between 8 and 128"));
  let tempPassword="";
  //Validate if passwored length requested is between 8 and 128.
  if ( passwordLength>=8 &&  passwordLength<=128) { 
    let Upper=confirm("Do you want to iclude upper case letters?\nOK to confirm   or   Cancel to exclude");
    let Lower=confirm("Do you want to iclude lower case leters?\nOK to confirm   or   Cancel to exclude");
    let Num=confirm("Do you want to iclude numbers?\nOK to confirm  or   Cancel to exclude");
    let spChar=confirm("Do you want to iclude special characters?\n OK to confirm   or   Cancel to exclude");

    //validate if user includes at list one of the charactor types 
    if (Upper || Lower || Num || spChar ) {

      for (let i = 0; i < passwordLength; i++) {
        if (Upper){
          tempPassword += getRandumStrElement(upperCase);
          
          if (tempPassword.length==passwordLength) {
              break;//loop breakes if passwored length is equal to user request
          }
        }
        if (Lower){
          tempPassword += getRandumStrElement(lowerCase);
          if (tempPassword.length==passwordLength) {
              break;//loop breakes if passwored length is equal to user request
          }
        }
        if (Num){
          tempPassword += getRandumStrElement(numbers);
          if (tempPassword.length==passwordLength) {
              break;//loop breakes if passwored length is equal to user request
          }
      
        }
        if (spChar){
          tempPassword += getRandumStrElement(specialChar);
          if (tempPassword.length==passwordLength) {
              break;//loop breakes if passwored length is equal to user request
          }
      
        }
        
      } 

    }else {
      alert("Please include at least one charactor type.");
    }  

  } else {
   alert("Please enter a valid password length between 8 and 128");
  }
  return tempPassword;
}
//-----------------------------------------New code ends here --------------------------------------
//--------------------------Starter Code starts here-----------------------------------------------
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
