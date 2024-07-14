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

if (getMode && getMode === 'dark') {
    da.classList.add('dark')
    wave1.classList.add('dark')
    wave2.classList.add('dark')
    decor.forEach((dec) => dec.classList.add('dark'));
}

toggleBtn.addEventListener('click', function () {
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
    if (dmlabel !== null) {
      dmlabel.classList.add('disappear')
    }
  }, 15000)


/* Scroll to About Me Section*/
function scrolltoaboutme() {
    document.getElementById("about-me-section").scrollIntoView({block:'start', behavior:'smooth'});
}

/* Fetch scroll height of timeline */
const timeline = document.querySelector('.timeline-container');
if (timeline !== null) {
  timeline.style.cssText = "--scroll-height: " + timeline.scrollHeight + "px";
}