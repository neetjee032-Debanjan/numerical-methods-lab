export function runRK4(container) {

  container.innerHTML = `

    <div class="card">

      <h2>Runge-Kutta 4th Order Simulator</h2>

      <p>
        Solve dy/dx = f(x,y)
      </p>

      <div style="margin:10px 0;">

        <label>f(x,y)</label>

        <input
          id="rk4-f"
          value="x+y"
          style="width:100%;"
        />

      </div>

      <div style="
        display:flex;
        gap:10px;
        flex-wrap:wrap;
      ">

        <div>
          <label>x₀</label>
          <input
            id="rk4-x0"
            type="number"
            value="0"
          />
        </div>

        <div>
          <label>y₀</label>
          <input
            id="rk4-y0"
            type="number"
            value="1"
          />
        </div>

        <div>
          <label>h</label>
          <input
            id="rk4-h"
            type="number"
            value="0.1"
            step="0.01"
          />
        </div>

        <div>
          <label>Steps</label>
          <input
            id="rk4-n"
            type="number"
            value="10"
          />
        </div>

      </div>

      <button
        id="rk4-run"
        style="margin-top:15px;"
      >
        Solve
      </button>

      <div
        id="rk4-output"
        style="margin-top:20px;"
      ></div>

    </div>

  `;

  document
    .getElementById("rk4-run")
    .onclick = () => {

      const f =
        new Function(
          "x",
          "y",
          `return ${
            document.getElementById("rk4-f").value
          }`
        );

      let x =
        Number(
          document.getElementById("rk4-x0").value
        );

      let y =
        Number(
          document.getElementById("rk4-y0").value
        );

      const h =
        Number(
          document.getElementById("rk4-h").value
        );

      const n =
        Number(
          document.getElementById("rk4-n").value
        );

      let html = `
        <table border="1" cellpadding="6">

          <tr>
            <th>Step</th>
            <th>x</th>
            <th>y</th>
          </tr>
      `;

      for(let i=0;i<n;i++){

        html += `
          <tr>
            <td>${i}</td>
            <td>${x.toFixed(4)}</td>
            <td>${y.toFixed(6)}</td>
          </tr>
        `;

        const k1 =
          h*f(x,y);

        const k2 =
          h*f(
            x+h/2,
            y+k1/2
          );

        const k3 =
          h*f(
            x+h/2,
            y+k2/2
          );

        const k4 =
          h*f(
            x+h,
            y+k3
          );

        y =
          y +
          (
            k1+
            2*k2+
            2*k3+
            k4
          )/6;

        x += h;
      }

      html += "</table>";

      document
        .getElementById(
          "rk4-output"
        )
        .innerHTML = html;
    };
}
