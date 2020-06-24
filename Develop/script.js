// Assignment Code




// Write password to the #password input
function writePassword() {

const generateBtn = document.querySelector("#generate");

const charType = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_"
console.log(charType.length);



for (let i = 0; i <generateBtn; i++) {
  password = password + charType.charAt(Math.floor(Math.random() * Math.floor(charType.length -1))); 
console.log(generateBtn);
    }

 document.querySelector("#password").charType = password;

  
}









  

 
  
  const password = ""
  const passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


    
  



