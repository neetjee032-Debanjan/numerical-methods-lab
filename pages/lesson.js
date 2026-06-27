import { markPageComplete, getProgress } from "../progress.js";
import { Simulations } from "../sims/index.js";
import { knowledgeGraph } from "../data/knowledgeGraph.js";

export function renderLesson(
  app,
  courseData,
  moduleId,
  lessonId,
  pageIndex = 0
) {

  const module =
    courseData.modules.find(
      m => m.id === moduleId
    );

  const lesson =
    module?.lessons.find(
      l => l.id === lessonId
    );

  if (!module || !lesson) {

    app.innerHTML =
      "<h2>Lesson not found</h2>";

    return;
  }

  const page =
    lesson.pages[pageIndex];

  const progress =
    getProgress();

  const completedPages =
    progress?.[moduleId]?.[lessonId] || [];

  const isCompleted =
    completedPages.includes(pageIndex);

  const prevPage =
    pageIndex > 0
      ? pageIndex - 1
      : null;

  const nextPage =
    pageIndex <
    lesson.pages.length - 1
      ? pageIndex + 1
      : null;

  app.innerHTML = `
    <div class="navbar">
      📘 ${lesson.title}
    </div>

    <div class="container">

      <div class="sidebar">

        <h3>Pages</h3>

        ${lesson.pages.map((p, i) => `
          <div
            class="card
            ${i === pageIndex ? "active" : ""}"
          >
            <a
              href="#lesson-${moduleId}-${lessonId}-${i}"
              style="
                color:white;
                text-decoration:none;
              "
            >
              ${i + 1}. ${p.title}
            </a>
          </div>
        `).join("")}

      </div>

      <div class="content">

        <h1>${page.title}</h1>

        <div
          style="
            line-height:1.7;
            white-space:pre-line;
          "
        >
          ${page.content}
        </div>

        <div
          style="
            margin-top:25px;
            display:flex;
            gap:10px;
            flex-wrap:wrap;
          "
        >

          ${
            prevPage !== null
            ? `
            <button
              onclick="
                goPage(${prevPage})
              "
            >
              ⬅ Previous Page
            </button>
            `
            : ""
          }

          ${
            nextPage !== null
            ? `
            <button
              onclick="
                goPage(${nextPage})
              "
            >
              Next Page ➡
            </button>
            `
            : ""
          }

          ${
            !isCompleted
            ? `
            <button id="completeBtn">
              Mark Complete
            </button>
            `
            : `
            <span
              style="
                color:#22c55e;
                font-weight:bold;
              "
            >
              ✔ Completed
            </span>
            `
          }

          <button
            onclick="
              openQuizPage('${lesson.id}')
            "
          >
            📝 Take Quiz
          </button>

          <button
            onclick="
              openModule('${moduleId}')
            "
          >
            Back To Module
          </button>

        </div>

        <div
          id="sim"
          style="margin-top:30px;"
        ></div>

        <div
          id="knowledgeGraphSection"
          style="margin-top:35px;"
        ></div>

      </div>

    </div>
  `;

  window.goPage = (i) => {

    window.location.hash =
      `lesson-${moduleId}-${lessonId}-${i}`;
  };

  const btn =
    document.getElementById(
      "completeBtn"
    );

  if (btn) {

    btn.onclick = () => {

      markPageComplete(
        moduleId,
        lessonId,
        pageIndex
      );

      renderLesson(
        app,
        courseData,
        moduleId,
        lessonId,
        pageIndex
      );
    };
  }

  loadLessonSimulation(lesson);

  renderKnowledgeGraphSection(
    lesson
  );
}

function loadLessonSimulation(lesson) {

  try {

    const simContainer =
      document.getElementById("sim");

    if (!simContainer) return;

    const key =
      (lesson.simulation || "")
        .trim()
        .toLowerCase();

    const sim =
      Simulations?.[key];

    if (
      typeof sim === "function"
    ) {

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

    console.error(
      "Simulation crash:",
      err
    );

    const simContainer =
      document.getElementById("sim");

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

function renderKnowledgeGraphSection(lesson) {

  const container =
    document.getElementById(
      "knowledgeGraphSection"
    );

  if (!container) return;

  const simKey =
    (lesson.simulation || "")
      .trim()
      .toLowerCase();

  const lessonKey =
    (lesson.id || "")
      .trim()
      .toLowerCase();

  const connections =
    knowledgeGraph[simKey] ||
    knowledgeGraph[lessonKey] ||
    [];

  if (
    !connections ||
    connections.length === 0
  ) {

    container.innerHTML = "";

    return;
  }

  container.innerHTML = `
    <div
      style="
        padding:24px;
        border-radius:18px;
        background:#111827;
        border:1px solid #1f2937;
      "
    >

      <h2
        style="
          color:#60a5fa;
          margin-top:0;
          margin-bottom:10px;
        "
      >
        🌍 Where is this used?
      </h2>

      <p
        style="
          color:#94a3b8;
          line-height:1.7;
          margin-bottom:22px;
        "
      >
        This numerical method appears in real engineering,
        science and computing applications. Click an application
        to explore how the method is used in practice.
      </p>

      <div
        style="
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:16px;
        "
      >
        ${connections.map(item => `
          <div
            class="card"
            onclick="
              window.location.hash='application-${item.applicationId}'
            "
            style="
              cursor:pointer;
              padding:18px;
              background:#1e293b;
              border:1px solid #334155;
              border-radius:14px;
            "
          >

            <div
              style="
                font-size:34px;
                margin-bottom:10px;
              "
            >
              ${item.icon}
            </div>

            <h3
              style="
                margin:0 0 10px 0;
                color:white;
              "
            >
              ${item.title}
            </h3>

            <p
              style="
                color:#cbd5e1;
                line-height:1.6;
                margin:0;
                font-size:14px;
              "
            >
              ${item.reason}
            </p>

            <div
              style="
                margin-top:14px;
                color:#60a5fa;
                font-weight:600;
                font-size:14px;
              "
            >
              Open Application →
            </div>

          </div>
        `).join("")}
      </div>

    </div>
  `;
}
