import { runNewton } from "../sims/newton-raphson.js";

export function renderLesson(app, course, moduleId, lessonId) {

  const module = course.modules.find(m => m.id === moduleId);
  if (!module) return;

  const lesson = module.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

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
