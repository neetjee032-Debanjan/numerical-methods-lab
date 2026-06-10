import { course } from "./data/course.js";
import { renderLesson } from "./pages/lesson.js";
import { getProgress } from "./progress.js";

const app = document.getElementById("app");

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
   COUNTERS
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

function getTotalLessons() {

  let total = 0;

  course.modules.forEach(module => {
    total += module.lessons.length;
  });

  return total;
}

function getCompletedLessons() {

  const progress = getProgress();

  let completed = 0;

  course.modules.forEach(module => {

    module.lessons.forEach(lesson => {

      const pagesDone =
        progress?.[module.id]?.[lesson.id] || [];

      if (
        pagesDone.length === lesson.pages.length
      ) {
        completed++;
      }

    });

  });

  return completed;
}

/* -----------------------
   MODULE STATS
------------------------ */
function getModuleProgress(module) {

  const progress = getProgress();

  let totalPages = 0;
  let completedPages = 0;

  module.lessons.forEach(lesson => {

    totalPages += lesson.pages.length;

    completedPages += (
      progress?.[module.id]?.[lesson.id] || []
    ).length;

  });

  return {
    totalPages,
    completedPages,
    percent:
      totalPages === 0
        ? 0
        : Math.round(
            completedPages /
            totalPages *
            100
          )
  };
}

/* -----------------------
   HOME PAGE
------------------------ */
function renderHome() {

  const totalPages = getTotalPages();
  const completedPages = getCompletedPages();

  const totalLessons = getTotalLessons();
  const completedLessons = getCompletedLessons();

  const percentage =
    totalPages === 0
      ? 0
      : Math.round(
          completedPages /
          totalPages *
          100
        );

  app.innerHTML = `
    <div class="navbar">
      🧠 Numerical Methods Learning Platform
    </div>

    <div style="padding:20px;">

      <h1>Welcome to Your Learning Lab</h1>

      <p>
        Learn Numerical Methods
        from fundamentals to advanced
        computational techniques.
      </p>

      <div class="card">

        <h2>Learning Statistics</h2>

        <p>
          📄 Pages:
          ${completedPages}/${totalPages}
        </p>

        <p>
          📚 Lessons:
          ${completedLessons}/${totalLessons}
        </p>

        <div class="progress">
          <div
            class="progress-bar"
            style="width:${percentage}%">
          </div>
        </div>

        <p>
          Overall Completion:
          ${percentage}%
        </p>

      </div>

      <h2>Modules</h2>

      <div
        style="
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(280px,1fr));
          gap:15px;
        "
      >

        ${course.modules.map(module => {

          const stats =
            getModuleProgress(module);

          return `
            <div
              class="card"
              onclick="openModule('${module.id}')"
            >

              <h3>
                ${module.title}
              </h3>

              <p>
                Lessons:
                ${module.lessons.length}
              </p>

              <p>
                Progress:
                ${stats.completedPages}
                /
                ${stats.totalPages}
                pages
              </p>

              <div class="progress">
                <div
                  class="progress-bar"
                  style="width:${stats.percent}%">
                </div>
              </div>

              <p>
                ${stats.percent}% Complete
              </p>

            </div>
          `;
        }).join("")}

      </div>

    </div>
  `;
}

/* -----------------------
   MODULE VIEW
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
        onclick="goHome()">
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
   START
------------------------ */
window.addEventListener(
  "hashchange",
  router
);

window.addEventListener(
  "load",
  router
);
