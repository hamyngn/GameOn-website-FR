// add class responsive to id myTopnav 
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modal = document.querySelector(".modal");
const modalSucceed = document.querySelector(".modal-succeed");
const subcribeForm = document.forms["reserve"];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalSucceed.style.display = "none";
}

//close modal
function closeModal() {
  modal.style.display = "none";
}

function inputValue(name) {
  return subcribeForm[name].value;
}

function saveValue(e){
  const id = e.id;
  const val = e.value;
  localStorage.setItem(id, val); 
}

function getSavedValue(val){
  if (!localStorage.getItem(val)) {
    return "";
  }
  return localStorage.getItem(val);
}

const idList = ["fname","lname","email","birthdate","quantity", "location", "conditions"];
function getValue() {
  for(let i=0; i < idList.length; i++) {
    subcribeForm[idList[i]].value = getSavedValue(idList[i]);
    if(idList[i] === "location") {
      for(let j = 1; j < subcribeForm["location"].length; j++) {
        if (document.getElementById("location"+[j]).value === getSavedValue("location"+[j])) {
          document.getElementById("location"+[j]).checked = true;
        }
      }
    }
  } 
}
window.onload = getValue;

function checkInt(num) {
  return Number.isInteger(parseFloat(num));
}

function setAtt(i) {
  formData[i].setAttribute("data-error-visible", "true");
}
/* Regex
- /.../ : contains a regex
- ^\w : begins with latin alphabet and number (a-z, A-Z, 0-9 and underscore)
- + : 1 or manytimes
- ([\.-]?\w+)* : matches 0 or more occurrences of [\.-]?\w+. 
- [\.-]?\w+ : matches 0 or 1 occurrences of "\.-", a . or - must follow by a word character. 
- The @ matches itself. 
- .\w{2,3} matches a . followed by two or three word characters
- $ : the end of input
*/

const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validateEmail() {
  return inputValue("email")
  .toLowerCase()
  .match(validRegex);
}
function focusInput(id) {
  document.getElementById(id).scrollIntoView();
  document.getElementById(id).focus();
}

function validate() {
    if(inputValue("fname").length < 2) {
      setAtt(0);
      focusInput("fname");
      return false;
    }
    if (inputValue("lname").length < 2) {
      setAtt(1);
      focusInput("lname");
      return false;
    }
    if (!validateEmail()) {
      setAtt(2);
      focusInput("email");
      return false;
    }
    if (inputValue("birthdate") == "") {
      setAtt(3);
      focusInput("birthdate");
      return false;
    }
    if (checkInt(inputValue("quantity"))==false) {
      setAtt(4);
      focusInput("quantity");
      return false;
    }
    if (inputValue("location") == "") {
      setAtt(5);
      focusInput("location");
      return false;
    }
    if (subcribeForm["conditions"].checked == false) {
      setAtt(6);
      focusInput("conditions");
      return false;
    }
    modalSucceed.style.display = "block";
    localStorage.clear();
    return true;
  }