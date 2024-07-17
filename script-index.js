/* 
===============
=== GENERAL ===
===============
*/

/* Toggle Dark and Light Mode */
const decor = document.querySelectorAll('.button img');
const da = document.querySelector('.down-arrow');
const wave1 = document.querySelector('.trans-curve-1'),
      wave2 = document.querySelector('.trans-curve-2');
const proftitle = document.querySelector(".profile-title");

if (getMode && getMode === 'dark') {
    da.classList.add('dark')
    wave1.classList.add('dark')
    wave2.classList.add('dark')
    proftitle.classList.add('dark')
    decor.forEach((dec) => dec.classList.add('dark'));
}

toggleBtn.addEventListener('click', function () {
    da.classList.toggle('dark')
    wave1.classList.toggle('dark')
    wave2.classList.toggle('dark')
    proftitle.classList.toggle('dark')
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

window.addEventListener('load', function(){
  /* If user didn't click dark mode in 15 seconds, label disappear as well */
  setTimeout(function() {
    const dmlabel = document.querySelector(".darkmode-label");
    if (dmlabel !== null) {
      dmlabel.classList.add('disappear')
    }
  }, 15000)

  /* Profile Page Animation */
  const logo = document.querySelectorAll(".profile-title path");
  const proftext1 = document.querySelector(".profile-text1");
  const proftext2 = document.querySelector(".profile-text2");
  const fancybutton1 = document.querySelector(".contactbtn");
  const fancybutton2 = document.querySelector(".resumebtn");
  const scroll_letter = document.querySelectorAll(".wavy-scroll span");
  const downarrow = document.querySelector(".down-arrow");

  const starttime = 2000;
  /* Initialize svg letters */
  proftitle.style.filter = "invert(5%) sepia(0%) saturate(942%) hue-rotate(223deg) brightness(111%) contrast(77%);"
  for (let i=0; i<logo.length; i++) {
    logo.forEach((letter) => {
      length = letter.getTotalLength();
      letter.style.strokeDasharray = length;
      letter.style.strokeDashoffset = length;
  });
  }

  /* "Hi, I am" appears */
  setTimeout(function() {
    proftext1.style.opacity = 1;
  }, starttime)

  /* "Hi, I am" Shrinks */
  nexttime = starttime + 1200;
  setTimeout(function() {
    proftext1.style.scale = 1;
  }, nexttime)

  /* "Michael Li" stroke appears */
  nexttime = nexttime + 200;
  setTimeout(function() {
    logo.forEach((letter, i) => {
      letteranim(letter, i)
    });
  }, nexttime)

  function letteranim(letter, i) {
    setTimeout(function() {
        length = letter.getTotalLength();
        letter.style.strokeDashoffset = 0;
    }, 70*i)
  }

  /* "Michael Li" fill appears */
  nexttime = nexttime + 1050;
  setTimeout(function() {
    proftitle.style.fill = 'black';
  }, nexttime)

  /* Short intro appears */
  nexttime = nexttime + 800;
  setTimeout(function() {
    proftext2.style.opacity = 1;
    proftext2.style.transform = "translateY(0)";
  }, nexttime)

  /* Two fancy buttons appear */
  nexttime = nexttime + 300;
  setTimeout(function() {
    fancybutton1.style.opacity = 1;
    fancybutton1.style.transform = "translateY(0)";
    fancybutton2.style.opacity = 1;
    fancybutton2.style.transform = "translateY(0)";
  }, nexttime)

  /* "SCROLL" appears */
  nexttime = nexttime + 1500;
  setTimeout(function() {
    scroll_letter.forEach((span, i) => {
      scrollopacity(span, i);
    })
  }, nexttime)

  function scrollopacity(span, i) {
    setTimeout(function() {
      span.style.opacity = 1;
    }, 200*i)
  }

  /* Down arrow appears */
  nexttime = nexttime + 500;
  setTimeout(function() {
    downarrow.style.opacity = 1;
  }, nexttime)
})

/* Scroll to About Me Section */
function scrolltoaboutme() {
    document.getElementById("about-me-section").scrollIntoView({block:'start', behavior:'smooth'});
}

/* Fetch scroll height of timeline */
const timeline_cont = document.querySelector('.timeline-container');
timeline_cont.style.cssText = "--scroll-height: " + timeline_cont.scrollHeight + "px";