/* Toggle Dark and Light Mode */
const toggleBtn = document.querySelector('.toggle');
const body = document.querySelector('body');

let getMode = localStorage.getItem('theme');
if (getMode && getMode === 'dark') {
  body.classList.add('dark')
  toggleBtn.classList.add('dark')

}

toggleBtn.addEventListener('click', function () {
  body.classList.toggle('dark')
  toggleBtn.classList.toggle('dark')

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

/* Course Taken Accordion */
const coursetaken = document.querySelectorAll(".course-list") 
coursetaken.forEach(cour => {
  cour.addEventListener("click", () => {
    cour.classList.toggle("active")
  })
}) 