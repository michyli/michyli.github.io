/* 
====================
=== PROJECT PAGE ===
====================
*/
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

/* Fetch scroll height of flipcard container */
const flipcard_container = document.querySelector('.project-container');

if (mainproj_tab.classList.contains('active')) {
  flipcard_container.style.height = mainproj_cont.scrollHeight + "px";
} else if (sideproj_tab.classList.contains('active')) {
  flipcard_container.style.height = sideproj_cont.scrollHeight + "px";
}

/* Flip Card */
const flipcards_main = document.querySelectorAll(".main-project-container .flipcard");
flipcards_main.forEach((card) => {
  /* card.style.transitionDelay = int("--fcnum") * 50 + "ms"; */
  card.addEventListener('click', function() {
    if (card.classList.contains('flipped')) {
      card.classList.remove("flipped");
    } else {
      flipcards_main.forEach((cd) => cd.classList.remove('flipped'))
      card.classList.toggle("flipped");
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
      card.classList.toggle("flipped");
    }
  })
})