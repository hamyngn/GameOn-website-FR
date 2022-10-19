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
/* function saveValue(e){
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

inputValue("fname") == getSavedValue("fname");
inputValue("lname") == getSavedValue("lname");
 */
function checkInt(num) {
  return Number.isInteger(parseFloat(num));
}

function validate() {
    if(inputValue("fname").length < 2) {
      // alert(formData[1].querySelector("#lname").value);
      formData[0].setAttribute("data-error-visible", "true");
      return false;
    }
   /*  if(inputValue("fname").length < 2) {
      document.getElementById("fname-invalid").style.display="block";
      document.getElementById("fname").classList.add("red-border");
      return false;
    } */
    if (inputValue("lname").length < 2) {
      document.getElementById("lname-invalid").style.display="block";
      document.getElementById("lname").classList.add("red-border");
      return false;
    }
    if (inputValue("email") == "") {
      document.getElementById("email-invalid").style.display="block";
      document.getElementById("email").classList.add("red-border");
      return false;
    }
    if (inputValue("birthdate") == "") {
      document.getElementById("birthdate-invalid").style.display="block";
      document.getElementById("birthdate").classList.add("red-border");
      return false;
    }
    if (checkInt(inputValue("quantity"))==false) {
      document.getElementById("quantity-invalid").style.display="block";
      document.getElementById("quantity").classList.add("red-border");
      return false;
    }
    if (inputValue("location") == "") {
      document.getElementById("location-invalid").style.display="block";
      document.getElementById("location").classList.add("red-border");
      return false;
    }
    if (subcribeForm["conditions"].checked == false) {
      document.getElementById("conditions-invalid").style.display="block";
      document.getElementById("conditions").classList.add("red-border");
      return false;
    }
    modalSucceed.style.display = "block";
    return true;
  }









