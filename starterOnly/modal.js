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

function inputValue(id) {
  return subcribeForm[id].value;
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
    subcribeForm[idList[i]].value = localStorage.getItem(idList[i]);
    if(idList[i] === "location") {
      for(let j = 1; j < subcribeForm["location"].length; j++) {
        if (document.getElementById("location"+[j]).value === localStorage.getItem("location"+[j])) {
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

function validate() {
    if(inputValue("fname").length < 2) {
      setAtt(0);
      return false;
    }
    if (inputValue("lname").length < 2) {
      setAtt(1);
      return false;
    }
    if (inputValue("email") == "") {
      setAtt(2);
      return false;
    }
    if (inputValue("birthdate") == "") {
      setAtt(3);
      return false;
    }
    if (checkInt(inputValue("quantity"))==false) {
      setAtt(4)
      return false;
    }
    if (inputValue("location") == "") {
      setAtt(5);
      return false;
    }
    if (subcribeForm["conditions"].checked == false) {
      setAtt(6);
      return false;
    }
    modalSucceed.style.display = "block";
    return true;
  }






