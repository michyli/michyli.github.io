/* 
====================
=== PROJECT PAGE ===
====================
*/
/* Toggle Dark and Light Mode */
const projnav = document.querySelectorAll('.project-tab');

if (getMode && getMode === 'dark') {
    projnav.forEach((tab) => tab.classList.add('dark'));
}

toggleBtn.addEventListener('click', function () {
  projnav.forEach((tab) => tab.classList.toggle('dark'));
  
  if(!body.classList.contains('dark')){
    return localStorage.setItem('theme', 'light');
  }
  return localStorage.setItem('theme', 'dark');
});



/* Project Nav Bar */
const mainproj_tab = document.querySelector(".main-project-tab");
const sideproj_tab = document.querySelector(".side-project-tab");
const mainproj_cont = document.querySelector(".main-project-container")
const sideproj_cont = document.querySelector(".side-project-container")

mainproj_tab.addEventListener('click', function() {
  mainproj_tab.classList.add("active");
  sideproj_tab.classList.remove("active");

  sideproj_cont.classList.remove("active");
  setTimeout(() => {
    mainproj_cont.classList.add("active");
  }, 400)
})

sideproj_tab.addEventListener('click', function() {
  sideproj_tab.classList.add("active");
  mainproj_tab.classList.remove("active");

  mainproj_cont.classList.remove("active");
  setTimeout(() => {
    sideproj_cont.classList.add("active");
  }, 400)
})

/* Flip Card Basic Mechanics*/
const flipcards_main = document.querySelectorAll(".main-project-container .flipcard");
flipcards_main.forEach((card) => {
  /* card.style.transitionDelay = int("--fcnum") * 50 + "ms"; */
  card.addEventListener('click', function() {
    if (card.classList.contains('flipped')) {
      card.classList.remove("flipped");
    } else {
      flipcards_main.forEach((cd) => cd.classList.remove('flipped'))
      card.classList.add("flipped");
    }
  })
})
const flipcards_side = document.querySelectorAll(".side-project-container .flipcard");
flipcards_side.forEach((card) => {
  card.addEventListener('click', function() {
    if (card.classList.contains('flipped')) {
      card.classList.remove("flipped");
    } else {
      flipcards_side.forEach((cd) => cd.classList.remove('flipped'))
      card.classList.add("flipped");
    }
  })
})

/* Automatic resize section based on how many flipcards there are */
const flipcard_container = document.querySelector('.project-container');
var stylemain = window.getComputedStyle(mainproj_cont),
      gapmain = stylemain.getPropertyValue('gap').replace('px', '');
var styleside = window.getComputedStyle(sideproj_cont),
      gapside = styleside.getPropertyValue('gap').replace('px', '');
var cardcount_main = mainproj_cont.childElementCount;
var cardcount_side = sideproj_cont.childElementCount;

$(window).resize(function (e) {
  var fc_heightmain = flipcards_main[0].clientHeight;
  var fc_heightside = flipcards_side[0].clientHeight;
  if ($(window).width() > 800) {
    if (mainproj_tab.classList.contains('active')) {
      flipcard_container.style.height = cardcount_main * fc_heightmain + (cardcount_main - 1) * gapmain + 'px';
    } else if (sideproj_tab.classList.contains('active')) {
      flipcard_container.style.height = cardcount_side * fc_heightside + (cardcount_side - 1) * gapside + 'px';
    }
  } else {
    if (mainproj_tab.classList.contains('active')) {
      flipcard_container.style.height = cardcount_main * fc_heightmain + (cardcount_main - 1) * gapmain + 70 + 'px';
    } else if (sideproj_tab.classList.contains('active')) {
      flipcard_container.style.height = cardcount_side * fc_heightside + (cardcount_side - 1) * gapside + 70 + 'px';
    }
  }
});
$(window).trigger("resize");