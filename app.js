alert("welcome")



function validateAllForms()  {
let userName = document.getElementById("name").value;
let userEmail = document.getElementById("mail").value;
let userPassword = document.getElementById("password").value;
let userAge = document.getElementById("age").value;
let confirmPassword = document.getElementById("confirm_password").value;
let form = document.getElementById("validation_form");

if (userName === "" || userEmail === "" || userPassword === "" || userAge === "" || confirmPassword === "") {
    alert("Please fill in all fields");
    return;
}

//.. Defining helper function ....//
    function validateUsername(name){
    const words = name.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length >= 2;
}

    function validateUserEmail(email){
    return email.includes("@") && email.includes(".") && email.indexOf("@") < email.lastIndexOf(".");
}


function validateAge(age) {
    const ageToint = parseInt(age);
    return !isNaN(ageToint) && ageToint >= 18;
}

//.... VALIDATING THE CONFIRM PASSWORD ....//
function confirmPasswordValidate(confirm_Password) {
   return confirm_Password === userPassword;
} 

//..... VALIDATING username .....//
if (!validateUsername(userName)) {
    alert("Invalid Username. Username Must not be empty and contain at least 2 words.");
    userName.focus();
  return false;
}
//..... VALIDATING email .....//
if (!validateUserEmail(userEmail)) {
    alert("Please enter a valid email!. Email must follow a valid email format (e.g. example@domain.com).");
    userEmail.focus();
  return false; // Don't proceed
}
//..... VALIDATING AGE .....//
if (!validateAge(userAge)) {
    alert("You must be at least 18 years or older to submit this form");
    userAge.focus();
        return false;
}

//.. validating password ..//
function hasMinimumLength(password){
    return password.length >= 8
}
function hasUppercase(password) {
    return /[A-Z]/.test(password)
}

function hasNumber(password) {
    return /[0-9]/.test(password)
}

function hasSpecialCharacter(password) {
    // Common special characters
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return specialChars.test(password);
}


if (!hasMinimumLength(userPassword) || !hasUppercase(userPassword) || !hasNumber(userPassword) || !hasSpecialCharacter(userPassword)) {
  alert("Please password most have at least 8 characters, with one uppercase letter, one number, and one special character.");
  userPassword.focus();
  return false; // Don't proceed
}

//..... VALIDATING confirm password .....//
if (!confirmPasswordValidate(confirmPassword)) {
    alert("Does not match. Must match the Password field.");
    confirmPassword.focus();
  return false;
}

//alert("Please Fix All Error's")
return true;
}

//... Submission  ..////
 document.getElementById("validation_form").addEventListener("submit", event => {
    event.preventDefault();

    const isValid = validateAllForms();

    if (isValid) {
        alert(`You are now a valid user, This is how your info is saved to the system:
            ${userName},
            ${userEmail},
            ${userAge},
            `)
    }
})

