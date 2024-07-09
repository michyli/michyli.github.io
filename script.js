/* 
===============
=== GENERAL ===
===============
*/

/* Toggle Dark and Light Mode */
const toggleBtn = document.querySelector('.toggle');
const body = document.querySelector('body');
const decor = document.querySelectorAll('.button img');
const da = document.querySelector('.down-arrow');
const wave1 = document.querySelector('.trans-curve-1'),
      wave2 = document.querySelector('.trans-curve-2');

let getMode = localStorage.getItem('theme');
if (getMode && getMode === 'dark') {
  toggleBtn.classList.add('dark')
  body.classList.add('dark')
  da.classList.add('dark')
  wave1.classList.add('dark')
  wave2.classList.add('dark')
  decor.forEach((dec) => dec.classList.add('dark'));
}

toggleBtn.addEventListener('click', function () {
  toggleBtn.classList.toggle('dark')
  body.classList.toggle('dark')
  da.classList.toggle('dark')
  wave1.classList.toggle('dark')
  wave2.classList.toggle('dark')
  decor.forEach((dec) => dec.classList.toggle('dark'));

  /* Dark Mode label disappear on first click of dark mode button */
  if (!document.querySelector(".darkmode-label").classList.contains('disappear')) {
    document.querySelector(".darkmode-label").classList.add('disappear')
  }

  if(!body.classList.contains('dark')){
    return localStorage.setItem('theme', 'light');
  }
  return localStorage.setItem('theme', 'dark');
});

/* If user didn't click dark mode in 15 seconds, label disappear as well */
setTimeout(function() {
  const dmlabel = document.querySelector(".darkmode-label");
  if (!dmlabel.classList.contains('disappear')) {
    dmlabel.classList.add('disappear')
  }
}, 15000)

/* Cursor Change */
const cursorinner = document.querySelector(".inner");
const cursorouter = document.querySelector(".outer");
const cursor = document.querySelectorAll(".cursor");

document.addEventListener('mousemove', function (e) {
  const posX = e.clientX;
  const posY = e.clientY;
  cursor.forEach((cur) => {
    cur.style.left = `${posX}px`;
    cur.style.top = `${posY}px`;
  })
  
  cursorouter.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration:50, fill:"backwards"})
})
/* Cursor click effect */
document.body.addEventListener('mousedown', () => {
  cursorinner.classList.add("click-hover");
  cursorouter.classList.add("click-hover");
})
document.body.addEventListener('mouseup', () => {
  cursorinner.classList.remove("click-hover");
  cursorouter.classList.remove("click-hover");
})

/* Cursor hover over button effect */
const buttonhovercursor = $(".cursorbtnhover")
buttonhovercursor.on("mouseenter", function() {
  cursorinner.classList.add("btn-hover");
  cursorouter.classList.add("btn-hover");
})
buttonhovercursor.on("mouseleave", function() {
  cursorinner.classList.remove("btn-hover");
  cursorouter.classList.remove("btn-hover");
})

/* Cursor hover over text effect */
const contenthovercursor = $(".cursorcontenthover");
contenthovercursor.on("mouseenter", function() {
  cursorinner.classList.add("text-hover");
  cursorouter.classList.add("text-hover");
})
contenthovercursor.on("mouseleave", function() {
  cursorinner.classList.remove("text-hover");
  cursorouter.classList.remove("text-hover");
})

/* Nav Bar */
$('.open-overlay').click(function() {
  var overlay_navigation = $('.overlay-navigation'),
    nav_item_1 = $('nav li:nth-of-type(1)'),
    nav_item_2 = $('nav li:nth-of-type(2)'),
    nav_item_3 = $('nav li:nth-of-type(3)'),
    nav_item_4 = $('nav li:nth-of-type(4)'),
    nav_item_5 = $('nav li:nth-of-type(5)'),
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom');

  overlay_navigation.toggleClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {

    top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
    middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
    bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
    nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
    nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
    nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
    nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
    nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
  } else {
    top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
    middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
    bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
    nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
    nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
    nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
    nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
    nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
  }
})

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

/* Appear on Scroll Animations */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
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
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements2 = document.querySelectorAll('.hiddenstay');
hiddenElements2.forEach((el) => observer2.observe(el));

/* Fetch scroll height of timeline */
const timeline = document.querySelector('.timeline-container');
if (timeline !== null) {
  timeline.style.cssText = "--scroll-height: " + timeline.scrollHeight + "px";
}

/* 
=====================
=== ABOUT ME PAGE ===
=====================
*/
/* Course Taken Accordion */
const coursetaken = document.querySelectorAll(".course-list");
coursetaken.forEach(cour => {
  cour.addEventListener("click", () => {
    cour.classList.toggle("active")

    /* Change accordion extended height to fit content */
    let content = cour.querySelector(".courses")
    if (cour.classList.contains("active")) {
      content.style.height = `${content.scrollHeight}px`;
    }
    else {
      content.style.height = "0px";
    }
  })
}) 

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