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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal
function closeModal() {
  modal.style.display = "none";
}

function openModalSucceed() {
  modalbg.style.display = "none";
  modalSucceed.style.display = "block";
}

function validate() {
  openModalSucceed();
  return true;
}








