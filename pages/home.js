export function renderHome(app, course) {
  app.innerHTML = `
    <div class="navbar">📘 Numerical Methods Platform</div>

    <div class="content">

      <h1>Welcome to Numerical Methods</h1>
      <p>Interactive learning with simulations, graphs, and step-by-step explanations.</p>

      <div style="margin-top:20px; display:grid; gap:15px;">

        ${course.modules.map(m => `
          <div class="card" style="padding:20px;">
            
            <h2>${m.title}</h2>
            <p>${m.lessons.length} lessons</p>

            <a href="#module-${m.id}">
              <button>Start Learning →</button>
            </a>

          </div>
        `).join("")}

      </div>

    </div>
  `;
}
