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

  app.innerHTML = `
    <div class="navbar">
      📘 ${lesson.title}
    </div>

    <div class="container">

      <!-- SIDEBAR -->
      <div class="sidebar">
        <h3>📄 Pages</h3>

        ${lesson.pages.map((p, i) => `
          <div class="card" style="
            opacity:${i === pageIndex ? 1 : 0.65};
            border-left:${i === pageIndex ? "4px solid #3b82f6" : "none"};
          ">
            <a href="#lesson-${moduleId}-${lessonId}-${i}" style="color:white;text-decoration:none;">
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

        <div style="margin-top:15px; line-height:1.7; white-space:pre-line;">
          ${page.content}
        </div>

        <!-- MARK COMPLETE -->
        <div style="margin-top:25px;">
          ${
            !isCompleted
              ? `<button id="completeBtn">Mark as Complete ✔</button>`
              : `<span style="color:#22c55e;">✔ Completed</span>`
          }
        </div>

        <!-- NAVIGATION -->
        <div style="margin-top:30px; display:flex; gap:10px;">

          ${pageIndex > 0 ? `
            <button onclick="goPage(${pageIndex - 1})">⬅ Previous</button>
          ` : ""}

          ${pageIndex < lesson.pages.length - 1 ? `
            <button onclick="goPage(${pageIndex + 1})">Next ➡</button>
          ` : `
            <button disabled>🎉 Completed</button>
          `}

        </div>

        <div style="margin-top:10px; opacity:0.7;">
          Page ${pageIndex + 1} / ${lesson.pages.length}
        </div>

        <!-- SIMULATION AREA -->
        <div id="sim" style="margin-top:30px;"></div>

      </div>
    </div>
  `;

  // Navigation handler
  window.goPage = (i) => {
    window.location.hash = `lesson-${moduleId}-${lessonId}-${i}`;
  };

  // Mark complete
  const btn = document.getElementById("completeBtn");
  if (btn) {
    btn.onclick = () => {
      markPageComplete(moduleId, lessonId, pageIndex);
      renderLesson(app, courseData, moduleId, lessonId, pageIndex);
    };
  }

  // -------------------------
  // SIMULATION LOADER (FULL)
  // -------------------------
  if (lesson.simulation) {

    const simContainer = document.getElementById("sim");

    import(`../sims/${lesson.simulation}.js`)
      .then(module => {

        switch (lesson.simulation) {

          case "newton":
            module.runNewton(simContainer);
            break;

          case "bisection":
            module.runBisection(simContainer);
            break;

          case "lagrange":
            module.runLagrange(simContainer);
            break;

          case "trapezoid":
            module.runTrapezoid(simContainer);
            break;

          case "euler":
            module.runEuler(simContainer);
            break;

          default:
            simContainer.innerHTML = "<p>No simulation available.</p>";
        }
      })
      .catch(() => {
        simContainer.innerHTML = "<p>Simulation failed to load.</p>";
      });
  }
}
