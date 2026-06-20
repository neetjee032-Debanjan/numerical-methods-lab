import { course } from "./data/course.js";
import { renderLesson } from "./pages/lesson.js";
import { openQuiz } from "./pages/QuizPage.js";

import {
  getProgress,
  getLastVisited
} from "./progress.js";

import { initParticles }
from "./js/particles.js";

const app = document.getElementById("app");

/* -----------------------
   ROUTER
------------------------ */
function router() {

  const hash = window.location.hash.replace("#", "");

  // Home page anchors
  if (
    hash === "" ||
    hash === "hero" ||
    hash === "why" ||
    hash === "applications" ||
    hash === "roadmap" ||
    hash === "modules" ||
    hash === "statistics"
  ) {

    renderHome();

    setTimeout(() => {

      if (hash) {

        const section =
          document.getElementById(hash);

        if (section) {

          section.scrollIntoView({
            behavior: "smooth"
          });

        }

      }

    }, 50);

    return;
  }

  const parts = hash.split("-");

  if (parts[0] === "lesson") {

    const moduleId = parts[1];
    const lessonId = parts[2];
    const pageIndex =
      parseInt(parts[3] || 0);

    renderLesson(
      app,
      course,
      moduleId,
      lessonId,
      pageIndex
    );

    return;
  }

  if (parts[0] === "quiz") {

    const quizId = parts[1];

    openQuiz(app, quizId);

    return;
  }

  // fallback
  renderHome();

}

/* -----------------------
   COUNTERS
------------------------ */
function getTotalPages() {

  let total = 0;

  course.modules.forEach(module => {
    module.lessons.forEach(lesson => {
      total += lesson.pages.length;
    });
  });

  return total;
}

function getCompletedPages() {

  const progress = getProgress();

  let count = 0;

  Object.values(progress).forEach(module => {

    Object.values(module).forEach(lesson => {
      count += lesson.length;
    });

  });

  return count;
}

function getTotalLessons() {

  let total = 0;

  course.modules.forEach(module => {
    total += module.lessons.length;
  });

  return total;
}

function getCompletedLessons() {

  const progress = getProgress();

  let completed = 0;

  course.modules.forEach(module => {

    module.lessons.forEach(lesson => {

      const pagesDone =
        progress?.[module.id]?.[lesson.id] || [];

      if (
        pagesDone.length === lesson.pages.length
      ) {
        completed++;
      }

    });

  });

  return completed;
}

/* -----------------------
   MODULE STATS
------------------------ */
function getModuleProgress(module) {

  const progress = getProgress();

  let totalPages = 0;
  let completedPages = 0;

  module.lessons.forEach(lesson => {

    totalPages += lesson.pages.length;

    completedPages += (
      progress?.[module.id]?.[lesson.id] || []
    ).length;

  });

  return {
    totalPages,
    completedPages,
    percent:
      totalPages === 0
        ? 0
        : Math.round(
            completedPages /
            totalPages *
            100
          )
  };
}

/* -----------------------
   HOME PAGE
------------------------ */
function renderHome() {

  const totalPages = getTotalPages();

  const completedPages =
    getCompletedPages();

  const totalLessons =
    getTotalLessons();

  const completedLessons =
    getCompletedLessons();

  const percentage =
    totalPages === 0
      ? 0
      : Math.round(
          completedPages /
          totalPages *
          100
        );

  const lastVisited =
    getLastVisited();

  app.innerHTML = `

  <div class="navbar">

    <div
      style="
        font-size:22px;
        font-weight:700;
      "
    >
      🧠 Numerical Methods Learning Lab
    </div>

    <div
      style="
        display:flex;
        gap:20px;
        font-size:14px;
      "
    >
      <a href="#hero"
         style="color:white;text-decoration:none;">
         Home
      </a>

      <a href="#why"
         style="color:white;text-decoration:none;">
         Why Learn?
      </a>

      <a href="#applications"
         style="color:white;text-decoration:none;">
         Applications
      </a>

      <a href="#roadmap"
         style="color:white;text-decoration:none;">
         Roadmap
      </a>

      <a href="#modules"
         style="color:white;text-decoration:none;">
         Modules
      </a>
    </div>

  </div>

  <div style="padding:30px;">

    <!-- HERO -->

    <section
      id="hero"
      class="card"
      style="
        padding:60px;
        text-align:center;
        margin-bottom:40px;
      "
    >

      <div
        style="
          font-size:clamp(2rem,8vw,5rem);
          font-weight:800;
          line-height:1.2;
          margin-bottom:20px;
        "
      >

        Numerical Methods

        <br>

        Learning Lab

      </div>

      <div
        style="
          max-width:900px;
          margin:auto;
          color:#cbd5e1;
          font-size:20px;
          line-height:1.8;
        "
      >

        Master Numerical Methods,
        Scientific Computing,
        Engineering Computation,
        Data Analytics,
        Optimization,
        Signal Processing
        and Computational Modeling
        through visual lessons,
        interactive simulations
        and modern learning experiences.

      </div>

      <div
        style="
          margin-top:35px;
          display:flex;
          justify-content:center;
          gap:20px;
          flex-wrap:wrap;
        "
      >

        <button
          onclick="openModule('m1')"
        >
          🚀 Start Learning
        </button>

        <button
          onclick="
            document
              .getElementById('modules')
              .scrollIntoView({
                behavior:'smooth'
              });
          "
        >
          📚 Explore Modules
        </button>

      </div>

    </section>
        <!-- WHY LEARN -->

    <section
      id="why"
      style="margin-bottom:60px;"
    >

      <h2
        style="
          font-size:38px;
          margin-bottom:15px;
          color:#93c5fd;
        "
      >
        Why Learn Numerical Methods?
      </h2>

      <p
        style="
          color:#cbd5e1;
          line-height:1.8;
          margin-bottom:30px;
          font-size:18px;
        "
      >
        Most real-world engineering,
        scientific and computational
        problems cannot be solved
        exactly.

        Numerical Methods provide
        practical computational tools
        that allow us to obtain highly
        accurate approximate solutions
        when exact analytical solutions
        are difficult or impossible.
      </p>

      <div class="grid">

        <div class="card">
          <h3>🏗 Engineering</h3>
          <p>
            Structural analysis,
            fluid mechanics,
            heat transfer,
            control systems and
            electrical networks rely
            heavily on numerical
            computation.
          </p>
        </div>

        <div class="card">
          <h3>🤖 Artificial Intelligence</h3>
          <p>
            Optimization algorithms,
            machine learning,
            neural networks and
            gradient descent are built
            upon numerical techniques.
          </p>
        </div>

        <div class="card">
          <h3>🔬 Scientific Research</h3>
          <p>
            Modern physics,
            astronomy,
            climate science and
            computational chemistry
            use numerical simulation
            every day.
          </p>
        </div>

        <div class="card">
          <h3>📈 Finance</h3>
          <p>
            Risk analysis,
            portfolio optimization,
            forecasting and
            quantitative finance depend
            on numerical models.
          </p>
        </div>

        <div class="card">
          <h3>📊 Data Analytics</h3>
          <p>
            Regression,
            curve fitting,
            forecasting and
            predictive analytics are
            numerical methods in action.
          </p>
        </div>

        <div class="card">
          <h3>🎮 Computer Graphics</h3>
          <p>
            Physics engines,
            rendering,
            animation and
            game simulations rely on
            computational mathematics.
          </p>
        </div>

      </div>

    </section>

    <!-- APPLICATIONS -->

    <section
      id="applications"
      style="margin-bottom:60px;"
    >

      <h2
        style="
          font-size:38px;
          margin-bottom:20px;
          color:#93c5fd;
        "
      >
        Real World Applications
      </h2>

      <div class="grid">

        <div class="card">✈ Aircraft Design</div>

        <div class="card">🌉 Bridge Analysis</div>

        <div class="card">🌦 Weather Forecasting</div>

        <div class="card">🧠 Machine Learning</div>

        <div class="card">🏥 Medical Imaging</div>

        <div class="card">🚀 Space Missions</div>

        <div class="card">📈 Stock Prediction</div>

        <div class="card">🎮 Game Physics</div>

        <div class="card">🔊 Signal Processing</div>

        <div class="card">🌍 Climate Modelling</div>

        <div class="card">⚛ Quantum Simulations</div>

        <div class="card">📡 Telecommunications</div>

      </div>

    </section>
        <!-- LEARNING ROADMAP -->

    <section
      id="roadmap"
      style="margin-bottom:70px;"
    >

      <h2
        style="
          font-size:38px;
          margin-bottom:20px;
          color:#93c5fd;
        "
      >
        Learning Roadmap
      </h2>

      <p
        style="
          color:#cbd5e1;
          line-height:1.8;
          margin-bottom:30px;
          font-size:18px;
        "
      >
        Follow this carefully designed
        progression from foundational
        numerical concepts to advanced
        computational techniques used in
        engineering, data science,
        scientific computing and signal
        processing.
      </p>

      <div
        style="
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(280px,1fr));
          gap:20px;
        "
      >

        <div
          class="card"
          onclick="openModule('m1')"
        >
          <h3>① Numbers, Precision & Errors</h3>

          <p>
            Binary numbers,
            floating point arithmetic,
            IEEE-754,
            machine precision and
            computational errors.
          </p>
        </div>

        <div
          class="card"
          onclick="openModule('m2')"
        >
          <h3>② Root Finding Methods</h3>

          <p>
            Bisection,
            Newton-Raphson,
            Secant,
            False Position and
            Fixed Point Iteration.
          </p>
        </div>

        <div
          class="card"
          onclick="openModule('m3')"
        >
          <h3>③ Interpolation</h3>

          <p>
            Lagrange,
            Newton Forward,
            Newton Backward,
            Divided Differences and
            Cubic Splines.
          </p>
        </div>

        <div
          class="card"
          onclick="openModule('m4')"
        >
          <h3>④ Numerical Differentiation</h3>

          <p>
            Forward,
            Backward and
            Central Difference methods.
          </p>
        </div>

        <div
          class="card"
          onclick="openModule('m5')"
        >
          <h3>⑤ Numerical Integration</h3>

          <p>
            Trapezoidal Rule,
            Simpson 1/3 Rule and
            Simpson 3/8 Rule.
          </p>
        </div>

        <div
          class="card"
          onclick="openModule('m6')"
        >
          <h3>⑥ Differential Equations</h3>

          <p>
            Euler,
            Modified Euler,
            RK2 and
            RK4 methods.
          </p>
        </div>

        <div
          class="card"
          onclick="openModule('m7')"
        >
          <h3>⑦ Linear Algebraic Equations</h3>

          <p>
            Gauss Elimination,
            Gauss Jordan,
            LU Decomposition,
            Jacobi and
            Gauss-Seidel.
          </p>
        </div>

        <div
          class="card"
          onclick="openModule('m8')"
        >
          <h3>⑧ Regression & Curve Fitting</h3>

          <p>
            Correlation,
            Linear Regression,
            Multiple Regression,
            Logistic Regression and
            Model Evaluation.
          </p>
        </div>

        <div
          class="card"
          onclick="openModule('m9')"
        >
          <h3>⑨ Fourier Analysis & DSP</h3>

          <p>
            Fourier Series,
            DFT,
            FFT,
            Sampling Theory,
            Aliasing and
            Spectral Leakage.
          </p>
        </div>

      </div>

    </section>

    <!-- PLATFORM FEATURES -->

    <section
      style="margin-bottom:70px;"
    >

      <h2
        style="
          font-size:38px;
          margin-bottom:25px;
          color:#93c5fd;
        "
      >
        Platform Features
      </h2>

      <div class="grid">

        <div class="card">
          <h3>🧪 Interactive Simulations</h3>
          <p>
            Visualize every algorithm
            step-by-step.
          </p>
        </div>

        <div class="card">
          <h3>📚 Deep Theory</h3>
          <p>
            Learn concepts from
            fundamentals to advanced
            applications.
          </p>
        </div>

        <div class="card">
          <h3>📈 Graphical Learning</h3>
          <p>
            Understand mathematical
            behaviour visually.
          </p>
        </div>

        <div class="card">
          <h3>📝 Practice Quizzes</h3>
          <p>
            Reinforce concepts through
            assessments.
          </p>
        </div>

        <div class="card">
          <h3>🎯 Progress Tracking</h3>
          <p>
            Monitor learning progress
            across modules.
          </p>
        </div>

        <div class="card">
          <h3>🌍 Real Applications</h3>
          <p>
            Connect theory with
            engineering and industry.
          </p>
        </div>

      </div>

    </section>
        <!-- CONTINUE LEARNING -->

    ${
      lastVisited
        ? `
        <section
          style="margin-bottom:60px;"
        >

          <div
            class="card"
            style="
              padding:30px;
            "
          >

            <h2
              style="
                color:#93c5fd;
                margin-bottom:15px;
              "
            >
              🚀 Continue Learning
            </h2>

            <p
              style="
                margin-bottom:20px;
                color:#cbd5e1;
              "
            >
              Resume exactly where you
              left off and continue
              your learning journey.
            </p>

            <button
              onclick="
                openLesson(
                  '${lastVisited.moduleId}',
                  '${lastVisited.lessonId}',
                  ${lastVisited.pageIndex}
                )
              "
            >
              Continue Course
            </button>

          </div>

        </section>
        `
        : ""
    }

    <!-- LEARNING STATISTICS -->

    <section
      id="statistics"
      style="margin-bottom:70px;"
    >

      <h2
        style="
          font-size:38px;
          margin-bottom:25px;
          color:#93c5fd;
        "
      >
        Learning Statistics
      </h2>

      <div class="grid">

        <div class="card">

          <h3>📄 Pages Completed</h3>

          <div
            style="
              font-size:40px;
              font-weight:700;
              margin-top:15px;
            "
          >
            ${completedPages}
          </div>

          <p>
            out of ${totalPages}
          </p>

        </div>

        <div class="card">

          <h3>📚 Lessons Completed</h3>

          <div
            style="
              font-size:40px;
              font-weight:700;
              margin-top:15px;
            "
          >
            ${completedLessons}
          </div>

          <p>
            out of ${totalLessons}
          </p>

        </div>

        <div class="card">

          <h3>🎯 Overall Progress</h3>

          <div
            style="
              font-size:40px;
              font-weight:700;
              margin-top:15px;
            "
          >
            ${percentage}%
          </div>

          <div class="progress">

            <div
              class="progress-bar"
              style="
                width:${percentage}%;
              "
            >
            </div>

          </div>

        </div>

      </div>

    </section>

    <!-- MODULE EXPLORER -->

    <section
      id="modules"
      style="margin-bottom:60px;"
    >

      <h2
        style="
          font-size:38px;
          margin-bottom:25px;
          color:#93c5fd;
        "
      >
        Explore Modules
      </h2>

      <div class="grid">

        ${course.modules.map(module => {

          const stats =
            getModuleProgress(module);

          return `

            <div
              class="card"
              onclick="
                openModule(
                  '${module.id}'
                )
              "
            >

              <h3>
                ${module.title}
              </h3>

              <p
                style="
                  margin-top:10px;
                  color:#cbd5e1;
                "
              >
                ${module.lessons.length}
                Lessons
              </p>

              <p
                style="
                  margin-top:10px;
                "
              >
                Progress:
                ${stats.completedPages}
                /
                ${stats.totalPages}
                pages
              </p>

              <div class="progress">

                <div
                  class="progress-bar"
                  style="
                    width:${stats.percent}%;
                  "
                >
                </div>

              </div>

              <p>
                ${stats.percent}%
                Complete
              </p>

            </div>

          `;
        }).join("")}

      </div>

    </section>

    <!-- DEVELOPER -->

<section
  id="developer"
  style="margin-bottom:60px;"
>

  <h2
    style="
      font-size:38px;
      margin-bottom:25px;
      color:#93c5fd;
    "
  >
    Developer
  </h2>

  <div
    class="card"
    style="
      max-width:900px;
      margin:auto;
      padding:30px;
    "
  >

    <h3
      style="
        font-size:28px;
        margin-bottom:20px;
      "
    >
      Debanjan Banerjee
    </h3>

    <p style="margin-bottom:12px;">
      📧 Email:
      banerjeedebanjan22@gmail.com
    </p>

    <p style="margin-bottom:12px;">
      📞 Contact:
      +91 9674888941
    </p>

    <p style="margin-bottom:12px;">
      📍 Address:
      Kolkata, West Bengal, India
    </p>

    <p
      style="
        margin-top:20px;
        color:#cbd5e1;
        line-height:1.8;
      "
    >
      Developer and creator of the
      Numerical Methods Learning Lab.
      Designed to provide an interactive,
      modern and comprehensive learning
      experience for students,
      engineers, researchers and
      data science enthusiasts.
    </p>

  </div>

</section>

    
        <!-- FOOTER -->

    <section
      style="
        text-align:center;
        margin-top:80px;
        margin-bottom:20px;
      "
    >

      <div
        style="
          font-size:28px;
          font-weight:700;
          color:#93c5fd;
          margin-bottom:10px;
        "
      >
        Numerical Methods Learning Lab
      </div>

      <p
        style="
          color:#94a3b8;
          max-width:800px;
          margin:auto;
          line-height:1.8;
        "
      >
        From binary numbers and machine precision
        to Fourier transforms and scientific
        computing — everything in one
        interactive learning platform.
      </p>

      <div
        style="
          margin-top:20px;
          color:#64748b;
        "
      >
        Built for Engineering • Data Science • AI • Research
      </div>

    </section>

  </div>

  `;
}

  
/* -----------------------
   MODULE VIEW
------------------------ */
window.openModule = function(moduleId) {

  const module =
    course.modules.find(
      m => m.id === moduleId
    );

  if (!module) return;

  app.innerHTML = `
    <div class="navbar">
      📘 ${module.title}

      <button
        style="float:right;"
        onclick="goHome()">
        Home
      </button>
    </div>

    <div class="container">

      <div class="sidebar">

        <h3>Lessons</h3>

        ${module.lessons.map(l => `
          <div
            class="card"
            onclick="
              openLesson(
                '${moduleId}',
                '${l.id}',
                0
              )
            "
          >
            ${l.title}
          </div>
        `).join("")}

      </div>

      <div class="content">

        <h1>${module.title}</h1>

        <p>
          Select a lesson from the sidebar.
        </p>

      </div>

    </div>
  `;
};

/* -----------------------
   OPEN LESSON
------------------------ */
window.openLesson = function(
  moduleId,
  lessonId,
  pageIndex = 0
) {

  window.location.hash =
    `lesson-${moduleId}-${lessonId}-${pageIndex}`;
};

/* -----------------------
   OPEN QUIZ
------------------------ */
window.openQuizPage = function(id) {

  window.location.hash =
    `quiz-${id}`;
};

/* -----------------------
   HOME
------------------------ */
window.goHome = function() {
  window.location.hash = "";
};

/* -----------------------
   START
------------------------ */
window.addEventListener(
  "hashchange",
  router
);

window.addEventListener(
  "load",
  () => {

    router();

    initParticles();

  }
);
