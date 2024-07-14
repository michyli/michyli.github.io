/* 
====================
=== CONTACT PAGE ===
====================
*/
/* Contact Form Submit Button*/
let cntbtn = document.querySelector(".contact-button");
let emailinput = document.querySelector(".email-input");

function isEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}

function active() {
  if ($(".contact-inputs").get().every(e => e.value) && isEmail(emailinput.value)) {
    // Every '.contact-inputs' has a non-blank value
      cntbtn.classList.toggle("is_active");
  }
}

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + "px";
}