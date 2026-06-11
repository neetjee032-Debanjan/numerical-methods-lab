export function runBisection(container) {

  container.innerHTML = `
    <div style="color:white; padding:15px; font-family:Arial;">
      <h2>Bisection Method Simulator</h2>

      <label>f(x):</label>
      <input id="fn" value="x*x - 4" />

      <label>a:</label>
      <input id="a" type="number" value="0" />

      <label>b:</label>
      <input id="b" type="number" value="3" />

      <button id="run">Run</button>

      <div style="margin-top:10px;">
        <span style="color:#4cc9f0;">■ Function Curve</span>
        &nbsp;&nbsp;
        <span style="color:red;">■ a (Left Bound)</span>
        &nbsp;&nbsp;
        <span style="color:lime;">■ b (Right Bound)</span>
        &nbsp;&nbsp;
        <span style="color:yellow;">■ Midpoint</span>
      </div>

      <canvas
        id="canvas"
        width="700"
        height="350"
        style="background:#0b1220; margin-top:10px;">
      </canvas>

      <div
        id="rootInfo"
        style="margin-top:10px;font-weight:bold;">
      </div>

      <table border="1" style="width:100%; margin-top:10px;">
        <thead>
          <tr>
            <th>Step</th>
            <th>a</th>
            <th>b</th>
            <th>Midpoint</th>
            <th>f(mid)</th>
          </tr>
        </thead>

        <tbody id="table"></tbody>
      </table>
    </div>
  `;

  const canvas = container.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  const fn = container.querySelector("#fn");
  const aIn = container.querySelector("#a");
  const bIn = container.querySelector("#b");
  const table = container.querySelector("#table");
  const rootInfo = container.querySelector("#rootInfo");

  function f(expr, x) {
    return Function("x", `return ${expr}`)(x);
  }

  const W = canvas.width;
  const H = canvas.height;

  const sx = x => (x + 5) * (W / 10);
  const sy = y => H / 2 - y * 40;

  let rows = [];

  function draw(expr, a, b, m) {

    ctx.clearRect(0, 0, W, H);

    /* AXES */

    ctx.strokeStyle = "#666";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(0, H / 2);
    ctx.lineTo(W, H / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(W / 2, 0);
    ctx.lineTo(W / 2, H);
    ctx.stroke();

    ctx.fillStyle = "#aaa";
    ctx.fillText("X Axis", W - 50, H / 2 - 5);
    ctx.fillText("Y Axis", W / 2 + 8, 15);

    /* FUNCTION CURVE */

    ctx.strokeStyle = "#4cc9f0";
    ctx.lineWidth = 2;

    ctx.beginPath();

    let first = true;

    for (let x = -5; x <= 5; x += 0.05) {

      let y = f(expr, x);

      if (first) {
        ctx.moveTo(sx(x), sy(y));
        first = false;
      } else {
        ctx.lineTo(sx(x), sy(y));
      }
    }

    ctx.stroke();

    /* A POINT */

    ctx.fillStyle = "red";

    ctx.beginPath();
    ctx.arc(sx(a), H / 2, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillText(
      `a=${a.toFixed(2)}`,
      sx(a) + 8,
      H / 2 - 10
    );

    /* B POINT */

    ctx.fillStyle = "lime";

    ctx.beginPath();
    ctx.arc(sx(b), H / 2, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillText(
      `b=${b.toFixed(2)}`,
      sx(b) + 8,
      H / 2 - 10
    );

    /* MIDPOINT */

    const fy = f(expr, m);

    ctx.fillStyle = "yellow";

    ctx.beginPath();
    ctx.arc(
      sx(m),
      sy(fy),
      7,
      0,
      Math.PI * 2
    );
    ctx.fill();

    ctx.fillText(
      `mid=${m.toFixed(4)}`,
      sx(m) + 8,
      sy(fy) - 8
    );

    /* DOTTED GUIDE */

    ctx.setLineDash([5, 5]);

    ctx.strokeStyle = "yellow";

    ctx.beginPath();
    ctx.moveTo(sx(m), H / 2);
    ctx.lineTo(sx(m), sy(fy));
    ctx.stroke();

    ctx.setLineDash([]);
  }

  function renderTable() {

    table.innerHTML = rows.map(r => `
      <tr>
        <td>${r.step}</td>
        <td>${r.a}</td>
        <td>${r.b}</td>
        <td>${r.mid}</td>
        <td>${r.fmid}</td>
      </tr>
    `).join("");
  }

  container.querySelector("#run").onclick = () => {

    let expr = fn.value;
    let a = +aIn.value;
    let b = +bIn.value;

    rows = [];
    let step = 0;

    function iterate() {

      const mid = (a + b) / 2;
      const fmid = f(expr, mid);

      rows.push({
        step,
        a: a.toFixed(4),
        b: b.toFixed(4),
        mid: mid.toFixed(4),
        fmid: fmid.toFixed(6)
      });

      draw(expr, a, b, mid);

      renderTable();

      rootInfo.innerHTML =
        `Current Root Approximation: <span style="color:yellow">${mid.toFixed(6)}</span>`;

      if (
        Math.abs(fmid) > 0.0001 &&
        step < 12
      ) {

        if (
          f(expr, a) * fmid < 0
        ) {
          b = mid;
        } else {
          a = mid;
        }

        step++;

        setTimeout(iterate, 600);
      }
    }

    iterate();
  };
}
