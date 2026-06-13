const STORAGE_KEY = "quizProgress";

export function getQuizProgress() {

  return JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  ) || {};
}

export function saveQuizResult(
  lessonId,
  score,
  total
) {

  const data =
    getQuizProgress();

  data[lessonId] = {
    score,
    total,
    percent:
      Math.round(
        score / total * 100
      )
  };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function getQuizResult(
  lessonId
) {

  const data =
    getQuizProgress();

  return data[lessonId] || null;
}

export function hasPassedQuiz(
  lessonId
) {

  const result =
    getQuizResult(lessonId);

  if (!result)
    return false;

  return result.percent >= 60;
}
