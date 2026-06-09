import { markPageComplete, getProgress } from "../progress.js";

export function renderLesson(app, courseData, moduleId, lessonId, pageIndex = 0) {

  const module = courseData.modules.find(m => m.id === moduleId);
  const lesson = module.lessons.find(l => l.id === lessonId);

  if (!module || !lesson) {
    app.innerHTML = "<h2>Lesson not found</h2>";
    return;
  }

  const page = lesson.pages[pageIndex];

  const progress = getProgress();
  const completedPages = progress?.[moduleId]?.[lessonId] || [];

  const isCompleted = completedPages.includes(pageIndex);

  // ---------------- UI ----------------
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

        <div style="line-height:1.8; white-space:pre-line;">
          ${page.content}
        </div>

        <div style="margin-top:20px;">
          ${
            !isCompleted
              ? `<button id="completeBtn">Mark as Complete</button>`
              : `<span style="color:#22c55e;">Completed ✔</span>`
          }
        </div>

        <div id="sim" style="margin-top:30px;"></div>

      </div>
    </div>
  `;

  window.goPage = (i) => {
