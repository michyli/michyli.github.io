/* Toggle Dark and Light Mode */
const toggleBtn = document.querySelector('.toggle');
const body = document.querySelector('body');
const decor = document.querySelectorAll('.button img');
const da = document.querySelector('.down-arrow');
const wave1 = document.querySelector('.trans-curve-1'),
      wave2 = document.querySelector('.trans-curve-2'),
      wave3 = document.querySelector('.trans-curve-3');

let getMode = localStorage.getItem('theme');
if (getMode && getMode === 'dark') {
  body.classList.add('dark')
  toggleBtn.classList.add('dark')
  da.classList.add('dark')

  wave1.classList.add('dark')
  wave2.classList.add('dark')
  wave3.classList.add('dark')

  for (let i = 0; i < decor.length; i++) {
    decor[i].classList.add('dark');
  }
}

toggleBtn.addEventListener('click', function () {
  body.classList.toggle('dark')
  toggleBtn.classList.toggle('dark')
  da.classList.toggle('dark')

  wave1.classList.toggle('dark')
  wave2.classList.toggle('dark')
  wave3.classList.toggle('dark')

  for (let i = 0; i < decor.length; i++) {
    decor[i].classList.toggle('dark');
  }

  if(!body.classList.contains('dark')){
    return localStorage.setItem('theme', 'light');
  }
  return localStorage.setItem('theme', 'dark');
});

/* Responsive Menu Icon */
const triggerMenu = document.querySelector(".menu"),
  header = document.querySelector(".header"),
  close = document.querySelector(".dark-part");

triggerMenu.addEventListener("click", () => {
  header.classList.add("active");
});
close.addEventListener("click", () => {
  header.classList.remove("active");
});

/* Pre-Loading Screen */
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-wrapper');
  setTimeout( function() {
    loader.classList.add('loader-wrapper-hidden')
    /* Ensure no scrolling when page is still on loading screen */
    document.body.classList.remove('no-scroll')
  }, 800);
  loader.addEventListener('transitioned', () =>{
    
    document.body.removeChild('load')
  })
})

/* Refresh to top of the page */

history.scrollRestoration = "manual";
$(window).on('beforeunload', function(){
  setTimeout(() => {
    $(window).scrollTop(0);
  }, 1200);
});

/* Scroll to Bottom function */
function scrolltobottom() {
  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, 200);
  
}

/* Scroll to top Button */
$(".backtotop").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

/* Appear on Scroll Animations */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

/* Appear and Stay Animation */
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements2 = document.querySelectorAll('.hiddenstay');
hiddenElements2.forEach((el) => observer2.observe(el));

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

/* Course Taken Accordion */
const coursetaken = document.querySelectorAll(".course-list") 
coursetaken.forEach(cour => {
  cour.addEventListener("click", () => {
    cour.classList.toggle("active")
  })
}) 