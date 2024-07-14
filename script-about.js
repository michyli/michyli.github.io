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