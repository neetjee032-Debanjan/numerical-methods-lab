import { course } from "../data/course.js";
import { runNewton } from "../sims/newton-raphson.js";

export function renderLesson(app) {
  const parts = window.location.hash.split("-");
  const moduleId = parts[1];
  const lessonId = parts[2];

  const module = course.modules.find(m => m.id === moduleId);
  const lesson = module.lessons.find(l => l.id === lessonId);

  app.innerHTML = `
    <div class="navbar">${lesson.title}</div>

    <div class="content">
      <p>${lesson.content}</p>

      <div id="sim"></div>
    </div>
  `;

  if (lesson.simulation === "newton") {
    runNewton(document.getElementById("sim"));
  }
}
