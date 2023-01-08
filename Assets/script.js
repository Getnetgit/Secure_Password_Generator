// Assignment Code
//-----------------------------New code starts here-----------------------------------------
const upperCase="ABCDEFGHIJKLMNOPQRSTUV";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const specialChar="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const numbers="0123456789";
//define and initialize password length 
let passwordLength=8;

// This function returns randume element from a given string
let strElement="";
function  getRandumStrElement(strElement){
    return strElement[Math.floor(Math.random()*strElement.length)];
}

//This function will randumly reorder elements in a given string.
let stringVar=""; 
  function reorderStrElements(stringVar){
  
  let tempArray=stringVar.split("");
  for (let i = 0; i < tempArray.length; i++) {
    let tempChar="";
    let j=Math.floor(Math.random()*tempArray.length);
    if (i!=j) {
      //switch two elemants in an array randumly 
      tempChar=tempArray[j];
      tempArray[j]=tempArray[i];
      tempArray[i]=tempChar;
    } else {
      i=i-1;
    }
  }
  stringVar=tempArray.join("");
  return stringVar;
}


//this function prompts and captures a valid password length and charactor types  and  generates randum password with the requsted length and selected charactor types. It also display an alert if the entry is not valid.

function generatePassword(){
  passwordLength = Number(prompt("Please enter password length between 8 and 128"));
  let generatedPassword="";
  //Validate if passwored length requested is between 8 and 128.
  if ( passwordLength>=8 &&  passwordLength<=128) { 
    let Upper=confirm("Do you want to iclude upper case letters?\nOK to confirm   or   Cancel to exclude");
    let Lower=confirm("Do you want to iclude lower case leters?\nOK to confirm   or   Cancel to exclude");
    let Num=confirm("Do you want to iclude numbers?\nOK to confirm  or   Cancel to exclude");
    let spChar=confirm("Do you want to iclude special characters?\n OK to confirm   or   Cancel to exclude");

    //validate if user includes at list one of the charactor types 
    if (Upper || Lower || Num || spChar ) {
       let noOfCharType= Number(Upper + Lower + Num + spChar)
      // This loop will get randum element from each selected charactor set and concatniate to generated password untill passwordLength met.
      for (let i = 0; i < passwordLength; i++) {
        
        if (Upper){
          generatedPassword += getRandumStrElement(upperCase);
          
          if (generatedPassword.length==passwordLength) {
              break;//loop breakes if passwored length is equal to user request
          }
        }
        if (Lower){
          generatedPassword += getRandumStrElement(lowerCase);
          if (generatedPassword.length==passwordLength) {
              break;//loop breakes if passwored length is equal to user request
          }
        }
        if (Num){
          generatedPassword += getRandumStrElement(numbers);
          if (generatedPassword.length==passwordLength) {
              break;//loop breakes if passwored length is equal to user request
          }
      
        }
        if (spChar){
          generatedPassword += getRandumStrElement(specialChar);
          if (generatedPassword.length==passwordLength) {
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
  //The following code will randumly reorder elements in the generated passwored string to avoid predictablity of character types in the previous itration like upper > lower > number > special charactore  and returns result
  return reorderStrElements(generatedPassword);
}
//-----------------------------------------New code ends here --------------------------------------
//--------------------------Starter Code starts here-----------------------------------------------
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password.length);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
