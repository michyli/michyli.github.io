/* 
====================
=== CONTACT PAGE ===
====================
*/
/* Toggle Dark and Light Mode */
const contact = document.querySelectorAll('.contact-inputs');

if (getMode && getMode === 'dark') {
    contact.forEach((box) => box.classList.add('dark'));
}

toggleBtn.addEventListener('click', function () {
  contact.forEach((box) => box.classList.toggle('dark'));
  
  if(!body.classList.contains('dark')){
    return localStorage.setItem('theme', 'light');
  }
  return localStorage.setItem('theme', 'dark');
});


/* Fetch total height of the window */
document.body.style.cssText = "--total-height: " + $(document).height() + "px";
console.log(body)
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