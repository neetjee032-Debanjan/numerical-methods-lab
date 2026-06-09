export function renderModule(app, course, moduleId) {

  const module = course.modules.find(m => m.id === moduleId);

  if (!module) {
    app.innerHTML = "<h2>Module not found</h2>";
    return;
  }

  app.innerHTML = `
    <div class="navbar">${module.title}</div>

    <div class="container">
      <div class="sidebar">
        ${module.lessons.map(l => `
          <div class="card">
            <a href="#lesson-${module.id}-${l.id}" style="color:white;text-decoration:none;">
              ${l.title}
            </a>
          </div>
        `).join("")}
      </div>

      <div class="content">
        <h2>Select a lesson</h2>
      </div>
    </div>
  `;
}
