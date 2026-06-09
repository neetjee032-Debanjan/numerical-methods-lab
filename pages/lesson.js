import { markPageComplete, getProgress } from "../progress.js";

export function renderLesson(app, courseData, moduleId, lessonId, pageIndex = 0) {

  try {

    const module = courseData.modules.find(m => m.id === moduleId);
    const lesson = module.lessons.find(l => l.id === lessonId);

    const page = lesson.pages[pageIndex];

    const progress = getProgress();
    const completedPages = progress?.[moduleId]?.[lessonId] || [];

    const isCompleted = completedPages.includes(pageIndex);

    app.innerHTML = `
      <div class="navbar">📘 ${lesson.title}</div>

      <div class="container">

        <div class="sidebar">
          <h3>Pages</h3>

          ${lesson.pages.map((p, i) => `
            <div class="card ${i === pageIndex ? "active" : ""}">
              <a href="#lesson-${moduleId}-${lessonId}-${i}"
                 style="color:white;text-decoration:none;">
                ${i + 1}. ${p.title}
              </a>
            </div>
          `).join("")}

        </div>

        <div class="content">

          <h1>${page.title}</h1>

          <div style="white-space:pre-line; line-height:1.7;">
            ${page.content}
          </div>

          <div style="margin-top:20px;">
            ${
              !isCompleted
                ? `<button id="completeBtn">Mark as Complete</button>`
                : `<span style="color:#22c55e;">Completed ✔</span>`
            }
          </div>

          <div id="sim"></div>

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

  } catch (err) {
    console.error("Lesson render crash:", err);
    app.innerHTML = `
      <div style="color:red; padding:20px;">
        <h2>App failed to load</h2>
        <p>Check console for error.</p>
      </div>
    `;
  }
}
