import { markPageComplete, getProgress } from "../progress.js";
import { Simulations } from "../sims/index.js";

export function renderLesson(app, courseData, moduleId, lessonId, pageIndex = 0) {

  const module = courseData.modules.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);

  if (!module || !lesson) {
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

      <div class="sidebar">

        <h3>Pages</h3>

        ${lesson.pages.map((p, i) => `
          <div class="card ${i === pageIndex ? "active" : ""}">
            <a
              href="#lesson-${moduleId}-${lessonId}-${i}"
              style="color:white;text-decoration:none;"
            >
              ${i + 1}. ${p.title}
            </a>
          </div>
        `).join("")}

      </div>

      <div class="content">

        <h1>${page.title}</h1>

        <div style="line-height:1.7; white-space:pre-line;">
          ${page.content}
        </div>

        <div style="margin-top:20px;">
          ${
            !isCompleted
              ? `<button id="completeBtn">Mark as Complete</button>`
              : `<span style="color:#22c55e;">Completed ✔</span>`
          }
        </div>

        <div id="sim" style="margin-top:25px;"></div>

      </div>

    </div>
  `;

  window.goPage = (i) => {
    window.location.hash = `lesson-${moduleId}-${lessonId}-${i}`;
  };

  const btn = document.getElementById("completeBtn");

  if (btn) {
    btn.onclick = () => {
      markPageComplete(moduleId, lessonId, pageIndex);
      renderLesson(app, courseData, moduleId, lessonId, pageIndex);
    };
  }

  try {

    const simContainer = document.getElementById("sim");

    if (!simContainer) return;

    const key = (lesson.simulation || "")
      .trim()
      .toLowerCase();

    const sim = Simulations?.[key];

    if (typeof sim === "function") {

      sim(simContainer);

    } else {

      if (!key) {
        simContainer.innerHTML = "";
        return;
      }

      simContainer.innerHTML = `
        <div
          style="
            margin-top:20px;
            padding:14px;
            border-radius:12px;
            background:#1e293b;
            color:#cbd5e1;
          "
        >
          🚧 Interactive simulation coming soon.
        </div>
      `;
    }

  } catch (err) {

    console.error("Simulation crash:", err);

    const simContainer = document.getElementById("sim");

    if (simContainer) {
      simContainer.innerHTML = `
        <div
          style="
            margin-top:20px;
            padding:14px;
            border-radius:12px;
            background:#7f1d1d;
            color:white;
          "
        >
          Simulation runtime error.
        </div>
      `;
    }
  }
}
