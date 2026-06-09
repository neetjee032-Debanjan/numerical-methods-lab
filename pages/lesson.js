import { markPageComplete, getProgress } from "../progress.js";

export function renderLesson(app, courseData, moduleId, lessonId, pageIndex = 0) {

  const module = courseData.modules.find(m => m.id === moduleId);

  if (!module) {
    app.innerHTML = "<h2>Module not found</h2>";
    return;
  }

  const lesson = module.lessons.find(l => l.id === lessonId);

  if (!lesson) {
    app.innerHTML = "<h2>Lesson not found</h2>";
    return;
  }

  const page = lesson.pages[pageIndex];

  const progress = getProgress();
  const completedPages = progress?.[moduleId]?.[lessonId] || [];

  const isCompleted = completedPages.includes(pageIndex);

  // -----------------------------
  // RENDER UI
  // -----------------------------
  app.innerHTML = `
    <div class="navbar">
      📘 ${lesson.title}
    </div>

    <div class="container">

      <!-- SIDEBAR -->
      <div class="sidebar">
        <h3>Pages</h3>

        ${lesson.pages.map((p, i) => `
          <div class="card ${i === pageIndex ? "active" : ""}">
            <a href="#lesson-${moduleId}-${lessonId}-${i}"
               style="color:white;text-decoration:none;display:block;">
              ${i + 1}. ${p.title}
            </a>

            <span style="float:right;">
              ${completedPages.includes(i) ? "✔" : ""}
            </span>
          </div>
        `).join("")}

      </div>

      <!-- CONTENT -->
      <div class="content">

        <h1>${page.title}</h1>

        <div style="margin-top:15px; line-height:1.8; white-space:pre-line;">
          ${page.content}
        </div>

        <!-- COMPLETE BUTTON -->
        <div style="margin-top:25px;">
          ${
            !isCompleted
              ? `<button id="completeBtn">Mark as Complete ✔</button>`
              : `<span style="color:#22c55e;">✔ Completed</span>`
          }
        </div>

        <!-- NAVIGATION -->
        <div style="margin-top:25px; display:flex; gap:10px;">
          ${pageIndex > 0 ? `<button onclick="goPage(${pageIndex - 1})">⬅ Prev</button>` : ""}
          ${pageIndex < lesson.pages.length - 1 ? `<button onclick="goPage(${pageIndex + 1})">Next ➡</button>` : ""}
        </div>

        <div style="margin-top:10px; opacity:0.7;">
          Page ${pageIndex + 1} / ${lesson.pages.length}
        </div>

        <!-- SIMULATION -->
        <div id="sim" style="margin-top:30px;"></div>

      </div>
    </div>
  `;

  // -----------------------------
  // PAGE NAVIGATION
  // -----------------------------
  window.goPage = (i) => {
    window.location.hash = `lesson-${moduleId}-${lessonId}-${i}`;
  };

  // -----------------------------
  // COMPLETE SYSTEM
  // -----------------------------
  const btn = document.getElementById("completeBtn");
  if (btn) {
    btn.onclick = () => {
      markPageComplete(moduleId, lessonId, pageIndex);
      renderLesson(app, courseData, moduleId, lessonId, pageIndex);
    };
  }

  // -----------------------------
  // SIMULATION SYSTEM (ROBUST + FIXED)
  // -----------------------------
  if (lesson.simulation) {

    const simContainer = document.getElementById("sim");

    // CLEAN FILE MAPPING (ONLY ONE SOURCE OF TRUTH)
    const fileMap = {
      newton: "newton-raphson",
      bisection: "bisection",
      lagrange: "lagrange",
      trapezoid: "trapezoid",
      euler: "euler"
    };

    const fnMap = {
      newton: "runNewton",
      bisection: "runBisection",
      lagrange: "runLagrange",
      trapezoid: "runTrapezoid",
      euler: "runEuler"
    };

    const key = lesson.simulation;

    const fileName = fileMap[key];

    if (!fileName) {
      simContainer.innerHTML = "<p>Simulation not registered.</p>";
      return;
    }

    import(`../sims/${fileName}.js`)
      .then(module => {

        const fnName = fnMap[key];

        if (module[fnName]) {
          module[fnName](simContainer);
        } else {
          simContainer.innerHTML = "<p>Simulation function missing in module.</p>";
        }
      })
      .catch(err => {
        console.error("Simulation load error:", err);

        simContainer.innerHTML = `
          <div style="color:red;">
            <b>Simulation failed to load</b><br/>
            File: /sims/${fileName}.js<br/>
            Check filename and GitHub deployment.
          </div>
        `;
      });
  }
}
