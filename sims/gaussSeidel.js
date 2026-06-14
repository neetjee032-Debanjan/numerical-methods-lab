export function runGaussSeidel(container) {

  container.innerHTML = `

    <div class="card">

      <h2>Gauss-Seidel Iteration Simulator</h2>

      <p>
        Solve Ax = b using Gauss-Seidel iterations.
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

        <input id="a11" value="10">
        <input id="a12" value="-1">
        <input id="a13" value="2">
        <input id="b1" value="6">

        <input id="a21" value="-1">
        <input id="a22" value="11">
        <input id="a23" value="-1">
        <input id="b2" value="25">

        <input id="a31" value="2">
        <input id="a32" value="-1">
        <input id="a33" value="10">
        <input id="b3" value="-11">

      </div>

      <div style="margin-top:15px;">

        <label>Iterations:</label>

        <input
          id="iter"
          type="number"
          value="10"
        />

      </div>

      <button
        id="gs-run"
        style="margin-top:15px;"
      >
        Solve
      </button>

      <div
        id="gs-output"
        style="margin-top:20px;"
      ></div>

    </div>

  `;

  document
    .getElementById("gs-run")
    .onclick = () => {

      const A = [

        [
          Number(a11.value),
          Number(a12.value),
          Number(a13.value)
        ],

        [
          Number(a21.value),
          Number(a22.value),
          Number(a23.value)
        ],

        [
          Number(a31.value),
          Number(a32.value),
          Number(a33.value)
        ]

      ];

      const B = [
        Number(b1.value),
        Number(b2.value),
        Number(b3.value)
      ];

      const n =
        Number(iter.value);

      let x = [0,0,0];

      let html = `
        <table border="1" cellpadding="6">

          <tr>
            <th>Iter</th>
            <th>x</th>
            <th>y</th>
            <th>z</th>
          </tr>
      `;

      for(let k=1;k<=n;k++){

        x[0] =
          (
            B[0]
            -
            A[0][1]*x[1]
            -
            A[0][2]*x[2]
          ) / A[0][0];

        x[1] =
          (
            B[1]
            -
            A[1][0]*x[0]
            -
            A[1][2]*x[2]
          ) / A[1][1];

        x[2] =
          (
            B[2]
            -
            A[2][0]*x[0]
            -
            A[2][1]*x[1]
          ) / A[2][2];

        html += `
          <tr>
            <td>${k}</td>
            <td>${x[0].toFixed(6)}</td>
            <td>${x[1].toFixed(6)}</td>
            <td>${x[2].toFixed(6)}</td>
          </tr>
        `;
      }

      html += "</table>";

      document
        .getElementById(
          "gs-output"
        )
        .innerHTML = html;
    };
}
