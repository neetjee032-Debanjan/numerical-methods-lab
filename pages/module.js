export function renderModule(app, course, moduleId) {

  const module = course.modules.find(m => m.id === moduleId);

  app.innerHTML = `
    <div class="navbar">${module.title}</div>

    <div class="container">

      <div class="sidebar">
        <h3>Lessons</h3>

        ${module.lessons.map(l => `
          <div class="card">
            <a href="#lesson-${module.id}-${l.id}" style="color:white;text-decoration:none;">
              📘 ${l.title}
            </a>
          </div>
        `).join("")}

      </div>

      <div class="content">
        <h1>${module.title}</h1>

        <p>Select a lesson from the left to start learning.</p>

        <div class="card">
          <h3>What you'll learn</h3>
          <ul>
            <li>Conceptual understanding</li>
            <li>Mathematical formulation</li>
            <li>Step-by-step methods</li>
            <li>Interactive simulations</li>
          </ul>
        </div>

      </div>

    </div>
  `;
}
