import {
  saveQuizResult
} from "../quizProgress.js";

export function renderQuiz(
  container,
  questions,
  lessonId
) {

  let score = 0;

  container.innerHTML = "";

  const title =
    document.createElement("h1");

  title.textContent =
    "Quiz Assessment";

  container.appendChild(title);

  questions.forEach(
    (q,index)=>{

      const div =
        document.createElement(
          "div"
        );

      div.style.marginBottom =
        "25px";

      div.style.padding =
        "15px";

      div.style.borderRadius =
        "12px";

      div.style.background =
        "#1e293b";

      div.innerHTML = `
        <h3>
          Q${index+1}.
          ${q.question}
        </h3>

        ${q.options.map(
          (op,i)=>`
          <label
            style="
              display:block;
              margin:8px 0;
            "
          >
            <input
              type="radio"
              name="q${index}"
              value="${i}">
            ${op}
          </label>
        `
        ).join("")}

        <div
          id="feedback-${index}"
          style="
            margin-top:10px;
          "
        ></div>
      `;

      container.appendChild(div);

    }
  );

  const submit =
    document.createElement(
      "button"
    );

  submit.textContent =
    "Submit Quiz";

  container.appendChild(
    submit
  );

  const resultBox =
    document.createElement(
      "div"
    );

  resultBox.style.marginTop =
    "20px";

  container.appendChild(
    resultBox
  );

  submit.onclick = ()=>{

    score = 0;

    questions.forEach(
      (q,index)=>{

        const selected =
          container.querySelector(
            `input[name=q${index}]:checked`
          );

        const feedback =
          document.getElementById(
            `feedback-${index}`
          );

        if(!selected){

          feedback.innerHTML =
            `
            <span
              style="
                color:orange;
              "
            >
              Not Answered
            </span>
            `;

          return;
        }

        const value =
          Number(
            selected.value
          );

        if(
          value === q.answer
        ){

          score++;

          feedback.innerHTML =
            `
            <span
              style="
                color:#22c55e;
              "
            >
              ✔ Correct
            </span>
            `;

        }else{

          feedback.innerHTML =
            `
            <span
              style="
                color:red;
              "
            >
              ✘ Incorrect
            </span>

            <br>

            Correct:
            ${q.options[q.answer]}

            ${
              q.explanation
              ? `<br><small>${q.explanation}</small>`
              : ""
            }
            `;
        }

      }
    );

    const percent =
      Math.round(
        score /
        questions.length *
        100
      );

    saveQuizResult(
      lessonId,
      score,
      questions.length
    );

    resultBox.innerHTML =
      `
      <div
        style="
          background:#0f172a;
          padding:20px;
          border-radius:12px;
          margin-top:20px;
        "
      >

        <h2>
          Score:
          ${score}
          /
          ${questions.length}
        </h2>

        <h3>
          ${percent}%
        </h3>

        <h3>
          ${
            percent>=60
            ? "🎉 PASSED"
            : "❌ FAILED"
          }
        </h3>

      </div>
      `;
  };

}
