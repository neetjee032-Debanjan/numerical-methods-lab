const STORAGE_KEY = "numerical_methods_progress";

/* -----------------------
   LOAD
----------------------- */
export function getProgress() {
  return JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "{}"
  );
}

/* -----------------------
   SAVE
----------------------- */
function saveProgress(data) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

/* -----------------------
   MARK PAGE COMPLETE
----------------------- */
export function markPageComplete(
  moduleId,
  lessonId,
  pageIndex
) {
  const data = getProgress();

  if (!data[moduleId]) {
    data[moduleId] = {};
  }

  if (!data[moduleId][lessonId]) {
    data[moduleId][lessonId] = [];
  }

  if (!data[moduleId][lessonId].includes(pageIndex)) {
    data[moduleId][lessonId].push(pageIndex);
  }

  saveProgress(data);

  saveLastVisited(
    moduleId,
    lessonId,
    pageIndex
  );
}

/* -----------------------
   LAST VISITED PAGE
----------------------- */
const LAST_PAGE_KEY =
  "numerical_methods_last_page";

export function saveLastVisited(
  moduleId,
  lessonId,
  pageIndex
) {
  localStorage.setItem(
    LAST_PAGE_KEY,
    JSON.stringify({
      moduleId,
      lessonId,
      pageIndex
    })
  );
}

export function getLastVisited() {

  const data =
    localStorage.getItem(LAST_PAGE_KEY);

  if (!data) return null;

  return JSON.parse(data);
}

/* -----------------------
   TOTAL COMPLETION %
----------------------- */
export function calculateOverallProgress(course) {

  const progress = getProgress();

  let totalPages = 0;
  let completedPages = 0;

  course.modules.forEach(module => {

    module.lessons.forEach(lesson => {

      totalPages += lesson.pages.length;

      const done =
        progress?.[module.id]?.[lesson.id] || [];

      completedPages += done.length;

    });

  });

  if (totalPages === 0) return 0;

  return Math.round(
    (completedPages / totalPages) * 100
  );
}

/* -----------------------
   MODULE %
----------------------- */
export function calculateModuleProgress(
  course,
  moduleId
) {

  const progress = getProgress();

  const module =
    course.modules.find(
      m => m.id === moduleId
    );

  if (!module) return 0;

  let total = 0;
  let done = 0;

  module.lessons.forEach(lesson => {

    total += lesson.pages.length;

    done += (
      progress?.[moduleId]?.[lesson.id] || []
    ).length;

  });

  if (total === 0) return 0;

  return Math.round(
    (done / total) * 100
  );
}

/* -----------------------
   LESSON %
----------------------- */
export function calculateLessonProgress(
  course,
  moduleId,
  lessonId
) {

  const progress = getProgress();

  const module =
    course.modules.find(
      m => m.id === moduleId
    );

  const lesson =
    module?.lessons.find(
      l => l.id === lessonId
    );

  if (!lesson) return 0;

  const done =
    progress?.[moduleId]?.[lessonId] || [];

  return Math.round(
    (done.length / lesson.pages.length) * 100
  );
}
