import { course } from "./data/course.js";
import { renderLesson } from "./pages/lesson.js";
import { getProgress } from "./progress.js";

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

    renderLesson(
      app,
      course,
      moduleId,
      lessonId,
      pageIndex
    );
  }
}

/* -----------------------
   TOTAL PAGE COUNT
------------------------ */
function getTotalPages() {

  let total = 0;

  course.modules.forEach(module => {
    module.lessons.forEach(lesson => {
      total += lesson.pages.length;
    });
  });

  return total;
}

/* -----------------------
   COMPLETED PAGE COUNT
------------------------ */
function getCompletedPages() {

  const progress = getProgress();

  let count = 0;

  Object.values(progress).forEach(module => {
    Object.values(module).forEach(lesson => {
      count += lesson.length;
    });
  });

  return count;
}

/* -----------------------
   HOME PAGE
------------------------ */
function renderHome() {

  const totalPages = getTotalPages();
  const completedPages = getCompletedPages();

  const percentage =
    totalPages === 0
      ? 0
      : Math.round((completedPages / totalPages) * 100);

  app.innerHTML = `
    <div class="navbar">
      🧠 Numerical Methods Learning Platform
    </div>

    <div style="padding:20px;">

      <h1>Welcome to Your Learning Lab</h1>

      <p>
        Explore structured modules,
        simulations,
        worked examples,
        and numerical computing concepts.
      </p>

      <h3>
        Progress:
        ${completedPages}/${totalPages}
        pages completed
      </h3>

      <div class="progress">
        <div
          class="progress-bar"
          id="progressBar"
          style="width:${percentage}%">
        </div>
      </div>

      <p>${percentage}% Complete</p>

      <h2>Modules</h2>

      <div
        style="
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(250px,1fr));
          gap:15px;
        "
      >

        ${course.modules.map(m => {

          const pagesInModule =
            m.lessons.reduce(
              (sum,l) => sum + l.pages.length,
              0
            );

          return `
            <div
              class="card"
              onclick="openModule('${m.id}')"
            >
              <h3>${m.title}</h3>

              <p>
                ${m.lessons.length}
                lessons
              </p>

              <p>
                ${pagesInModule}
                pages
              </p>
            </div>
          `;
        }).join("")}

      </div>

    </div>
  `;
}

/* -----------------------
   OPEN MODULE VIEW
------------------------ */
window.openModule = function(moduleId) {

  const module =
    course.modules.find(
      m => m.id === moduleId
    );

  if (!module) return;

  app.innerHTML = `
    <div class="navbar">
      📘 ${module.title}

      <button
        style="float:right;"
        onclick="goHome()"
      >
        Home
      </button>
    </div>

    <div class="container">

      <div class="sidebar">

        <h3>Lessons</h3>

        ${module.lessons.map(l => `
          <div
            class="card"
            onclick="
              openLesson(
                '${moduleId}',
                '${l.id}',
                0
              )
            "
          >
            ${l.title}
          </div>
        `).join("")}

      </div>

      <div class="content">

        <h1>${module.title}</h1>

        <p>
          Select a lesson from the sidebar.
        </p>

      </div>

    </div>
  `;
};

/* -----------------------
   OPEN LESSON
------------------------ */
window.openLesson = function(
  moduleId,
  lessonId,
  pageIndex = 0
) {

  window.location.hash =
    `lesson-${moduleId}-${lessonId}-${pageIndex}`;
};

/* -----------------------
   HOME
------------------------ */
window.goHome = function() {
  window.location.hash = "";
};

/* -----------------------
   LISTENERS
------------------------ */
window.addEventListener(
  "hashchange",
  router
);

window.addEventListener(
  "load",
  router
);
