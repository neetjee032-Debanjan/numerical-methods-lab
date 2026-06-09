export function renderLesson(app, course, moduleId, lessonId, pageIndex = 0) {

  const module = course.modules.find(m => m.id === moduleId);
  const lesson = module.lessons.find(l => l.id === lessonId);

  const page = lesson.pages[pageIndex];

  app.innerHTML = `
    <div class="navbar">
      ${lesson.title}
    </div>

    <div class="content">

      <h2>${page.title}</h2>

      <p style="line-height:1.6; white-space:pre-line;">
        ${page.content}
      </p>

      <div style="margin-top:30px; display:flex; gap:10px;">

        ${pageIndex > 0 ? `
          <button onclick="navigate(${pageIndex - 1})">⬅ Previous</button>
        ` : ""}

        ${pageIndex < lesson.pages.length - 1 ? `
          <button onclick="navigate(${pageIndex + 1})">Next ➡</button>
        ` : `
          <button disabled>Completed ✔</button>
        `}

      </div>

      <div style="margin-top:20px;">
        Page ${pageIndex + 1} of ${lesson.pages.length}
      </div>

    </div>
  `;

  window.navigate = (newIndex) => {
    window.location.hash = `lesson-${moduleId}-${lessonId}-${newIndex}`;
  };
}
