import { course } from "./data/course.js";
import { renderLesson } from "./pages/lesson.js";

const app = document.getElementById("app");

let currentModule = null;
let currentLesson = null;
let currentPage = 0;

/* -----------------------
   ROUTER
------------------------ */
function router() {

  const hash = window.location.hash.replace("#", "");

  if (!hash) {
    renderHome();
    return;
  }

  const parts = hash.split("-");

  if (parts[0] === "lesson") {
    const moduleId = parts[1];
    const lessonId = parts[2];
    const pageIndex = parseInt(parts[3] || 0);

    currentModule = moduleId;
    currentLesson = lessonId;
    currentPage = pageIndex;

    renderLesson(app, course, moduleId, lessonId, pageIndex);
  }
}

/* -----------------------
   HOME PAGE (NEW PREMIUM DASHBOARD)
------------------------ */
function renderHome() {

  app.innerHTML = `
    <div class="navbar">
      🧠 Numerical Methods Learning Platform
    </div>

    <div style="padding:20px;">

      <h1>Welcome to Your Learning Lab</h1>

      <p>Explore structured modules with simulations and deep theory.</p>

      <div class="progress">
        <div class="progress-bar" id="progressBar"></div>
      </div>

      <h2>Modules</h2>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:15px;">

        ${course.modules.map(m => `
          <div class="card" onclick="openModule('${m.id}')">
            <h3>${m.title}</h3>
            <p>${m.lessons.length} lessons</p>
          </div>
        `).join("")}

      </div>

    </div>
  `;

  updateProgressBar();
}

/* -----------------------
   OPEN MODULE VIEW
------------------------ */
window.openModule = function(moduleId) {

  const module = course.modules.find(m => m.id === moduleId);

  app.innerHTML = `
    <div class="navbar">
      📘 ${module.title}
      <button style="float:right;" onclick="goHome()">Home</button>
    </div>

    <div class="container">

      <div class="sidebar">
        <h3>Lessons</h3>

        ${module.lessons.map(l => `
          <div class="card" onclick="openLesson('${moduleId}','${l.id}',0)">
            ${l.title}
          </div>
        `).join("")}

      </div>

      <div class="content">
        <h1>${module.title}</h1>
        <p>Select a lesson from sidebar</p>
      </div>

    </div>
  `;
};

/* -----------------------
   OPEN LESSON
------------------------ */
window.openLesson = function(moduleId, lessonId, pageIndex = 0) {
  window.location.hash = `lesson-${moduleId}-${lessonId}-${pageIndex}`;
};

/* -----------------------
   HOME BUTTON
------------------------ */
window.goHome = function() {
  window.location.hash = "";
};

/* -----------------------
   PROGRESS BAR (BASIC LOGIC HOOK)
------------------------ */
function updateProgressBar() {

  const bar = document.getElementById("progressBar");
  if (!bar) return;

  // simple placeholder progress (can be upgraded later)
  let progress = Math.random() * 60 + 20;

  bar.style.width = progress + "%";
}

/* -----------------------
   ROUTE LISTENER
------------------------ */
window.addEventListener("hashchange", router);
window.addEventListener("load", router);
