export function runGaussJordan(container) {

  container.innerHTML = `

    <div class="card">

      <h2>Gauss-Jordan Elimination Simulator</h2>

      <p>
        Solve a system of linear equations.
      </p>

      <div
        style="
          display:grid;
          grid-template-columns:
          repeat(4,80px);
          gap:8px;
          margin-top:15px;
        "
      >

        <input id="a11" value="2">
        <input id="a12" value="1">
        <input id="a13" value="-1">
        <input id="b1" value="8">

        <input id="a21" value="-3">
        <input id="a22" value="-1">
        <input id="a23" value="2">
        <input id="b2" value="-11">

        <input id="a31" value="-2">
        <input id="a32" value="1">
        <input id="a33" value="2">
        <input id="b3" value="-3">

      </div>

      <button
        id="gj-solve"
        style="margin-top:15px;"
      >
        Solve
      </button>

      <div
        id="gj-output"
        style="margin-top:20px;"
      ></div>

    </div>

  `;

  document
    .getElementById("gj-solve")
    .onclick = () => {

      let A = [

        [
          Number(a11.value),
          Number(a12.value),
          Number(a13.value),
          Number(b1.value)
        ],

        [
          Number(a21.value),
          Number(a22.value),
          Number(a23.value),
          Number(b2.value)
        ],

        [
          Number(a31.value),
          Number(a32.value),
          Number(a33.value),
          Number(b3.value)
        ]

      ];

      let steps = "";

      for(let i=0;i<3;i++){

        let pivot = A[i][i];

        for(let j=0;j<4;j++){

          A[i][j] =
            A[i][j] / pivot;
        }

        for(let k=0;k<3;k++){

          if(k===i) continue;

          let factor =
            A[k][i];

          for(let j=0;j<4;j++){

            A[k][j] =
              A[k][j]
              -
              factor*A[i][j];
          }
        }

        steps += `
          <h4>
            After Pivot ${i+1}
          </h4>

          <pre>
${JSON.stringify(A,null,2)}
          </pre>
        `;
      }

      document
        .getElementById("gj-output")
        .innerHTML = `

          ${steps}

          <h3>
            Solution
          </h3>

          <p>
            x =
            ${A[0][3].toFixed(6)}
          </p>

          <p>
            y =
            ${A[1][3].toFixed(6)}
          </p>

          <p>
            z =
            ${A[2][3].toFixed(6)}
          </p>

        `;
    };
}
