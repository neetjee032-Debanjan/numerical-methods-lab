export function renderQuiz(container, questions){

  let score = 0;

  container.innerHTML = "";

  questions.forEach((q,index)=>{

    const div = document.createElement("div");

    div.style.marginBottom = "20px";

    div.innerHTML = `
      <h3>Q${index+1}. ${q.question}</h3>

      ${q.options.map((op,i)=>`
        <label style="display:block;margin:6px 0;">
          <input
            type="radio"
            name="q${index}"
            value="${i}">
          ${op}
        </label>
      `).join("")}
    `;

    container.appendChild(div);
  });

  const btn = document.createElement("button");

  btn.textContent = "Submit Quiz";

  btn.onclick = ()=>{

    score = 0;

    questions.forEach((q,index)=>{

      const selected =
        container.querySelector(
          `input[name=q${index}]:checked`
        );

      if(
        selected &&
        Number(selected.value)===q.answer
      ){
        score++;
      }
    });

    result.innerHTML =
      `<h2>Score: ${score}/${questions.length}</h2>`;
  };

  container.appendChild(btn);

  const result =
    document.createElement("div");

  result.style.marginTop = "15px";

  container.appendChild(result);
}
