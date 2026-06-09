import { course } from "./data/course.js";
import { renderLesson } from "./pages/lesson.js";

const app = document.getElementById("app");

/* -----------------------------
   STATE
------------------------------ */
let state = {
  moduleId: null,
  lessonId: null,
  pageIndex: 0
};

/* -----------------------------
   ROUTER
------------------------------ */
function router() {
  const hash = window.location.hash.replace("#", "");

  if (!hash) {
    renderHome();
    return;
  }

  const parts = hash.split("-");

  if (parts[0] === "lesson") {
    state.moduleId = parts[1];
    state.lessonId = parts[2];
    state.pageIndex = parseInt(parts[3] || "0");

    const module = findModule(state.moduleId);
    const lesson = findLesson(module, state.lessonId);

    if (!module || !lesson) {
      app.innerHTML = "<h2>Content not found</h2>";
      return;
    }

    renderLesson(app, course, state.moduleId, state.lessonId, state.pageIndex);
  }
}

/* -----------------------------
   HOME PAGE (ALL MODULES FIXED)
------------------------------ */
function renderHome() {

  app.innerHTML = `
    <div class="navbar">
      🧠 Numerical Methods Learning Platform
    </div>

    <div style="padding:20px;">

      <h1>Welcome to Your Learning Lab</h1>

      <p>Structured modules with deep theory + simulations</p>

      <div class="progress">
        <div class="progress-bar" style="width:70%"></div>
      </div>

      <h2>Modules</h2>

      <div style="
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap:15px;
      ">

        ${course.modules.map((m) => `
          <div class="card" onclick="openModule('${m.id}')">
            <h3>${m.title}</h3>
            <p>${m.lessons ? m.lessons.length : 0} lessons</p>
          </div>
        `).join("")}

      </div>

    </div>
  `;
}

/* -----------------------------
   OPEN MODULE (FIXED FULL LIST)
------------------------------ */
window.openModule = function(moduleId) {

  const module = findModule(moduleId);

  if (!module) {
    app.innerHTML = "<h2>Module not found</h2>";
    return;
  }

  app.innerHTML = `
    <div class="navbar">
      📘 ${module.title}
      <button style="float:right;" onclick="goHome()">Home</button>
    </div>

    <div class="container">

      <div class="sidebar">
        <h3>Lessons</h3>

        ${module.lessons.map((lesson) => `
          <div class="card" onclick="openLesson('${module.id}','${lesson.id}',0)">
            ${lesson.title}
          </div>
        `).join("")}

      </div>

      <div class="content">
        <h1>${module.title}</h1>
        <p>Select a lesson to start learning</p>
      </div>

    </div>
  `;
};

/* -----------------------------
   OPEN LESSON
------------------------------ */
window.openLesson = function(moduleId, lessonId, pageIndex = 0) {
  window.location.hash = `lesson-${moduleId}-${lessonId}-${pageIndex}`;
};

/* -----------------------------
   HOME
------------------------------ */
window.goHome = function() {
  window.location.hash = "";
};

/* -----------------------------
   HELPERS
------------------------------ */
function findModule(moduleId) {
  return course.modules.find(m => m.id === moduleId);
}

function findLesson(module, lessonId) {
  if (!module) return null;
  return module.lessons.find(l => l.id === lessonId);
}

/* -----------------------------
   ROUTE LISTENERS
------------------------------ */
window.addEventListener("hashchange", router);
window.addEventListener("load", router);

/* -----------------------------
   INITIAL LOAD
------------------------------ */
router();
