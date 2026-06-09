export function runNewton(container) {

  // SAFETY CHECK (VERY IMPORTANT)
  if (!container) {
    console.error("Newton Simulation: container not found");
    return;
  }

  container.innerHTML = `
    <div style="padding:16px; font-family:Arial; color:white;">

      <h2>Newton-Raphson Visual Simulator</h2>

      <!-- INPUTS -->
      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:10px;">

        <div>
          <label>f(x)</label><br/>
          <input id="fn" value="x*x - 4"
            style="padding:6px; width:180px;" />
        </div>

        <div>
          <label>x₀ (initial guess)</label><br/>
          <input id="x0" value="2" type="number"
            style="padding:6px; width:120px;" />
        </div>

        <button id="run">Run</button>
        <button id="reset">Reset</button>
      </div>

      <!-- GRAPH -->
      <canvas id="canvas" width="700" height="350"
        style="background:#0b1220; border-radius:10px;"></canvas>

      <!-- INFO -->
      <div id="info" style="margin-top:10px;"></div>

      <!-- TABLE -->
      <div style="margin-top:10px;">
        <table border="1" style="width:100%; color:white;">
          <thead>
            <tr>
              <th>Step</th>
              <th>x</th>
              <th>f(x)</th>
              <th>f'(x)</th>
              <th>next</th>
              <th>error</th>
            </tr>
          </thead>
          <tbody id="table"></tbody>
        </table>
      </div>

    </div>
  `;

  // ---------------- SAFE SELECTORS ----------------
  const canvas = container.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  const fnInput = container.querySelector("#fn");
  const x0Input = container.querySelector("#x0");
  const info = container.querySelector("#info");
  const table = container.querySelector("#table");

  if (!canvas || !ctx || !fnInput || !x0Input) {
    console.error("Newton Simulation: DOM elements missing");
    return;
  }

  // ---------------- MATH ----------------
  function f(expr, x) {
    try {
      return Function("x", `return ${expr}`)(x);
    } catch (e) {
      console.error("Function error:", e);
      return 0;
    }
  }

  function df(expr, x) {
    const h = 0.00001;
    return (f(expr, x + h) - f(expr, x - h)) / (2 * h);
  }

  // ---------------- DRAW ----------------
  const W = canvas.width;
  const H = canvas.height;

  const scaleX = x => (x + 5) * (W / 10);
  const scaleY = y => H/2 - y * 40;

  function draw(expr, x) {

    ctx.clearRect(0, 0, W, H);

    // axis
    ctx.strokeStyle = "gray";
    ctx.beginPath();
    ctx.moveTo(0, H/2);
    ctx.lineTo(W, H/2);
    ctx.stroke();

    // function
    ctx.strokeStyle = "cyan";
    ctx.beginPath();

    for (let i = -5; i <= 5; i += 0.05) {
      ctx.lineTo(scaleX(i), scaleY(f(expr, i)));
    }

    ctx.stroke();

    // point
    const fx = f(expr, x);

    ctx.fillStyle = "lime";
    ctx.beginPath();
    ctx.arc(scaleX(x), scaleY(fx), 6, 0, Math.PI*2);
    ctx.fill();
  }

  // ---------------- STATE ----------------
  let expr = "x*x - 4";
  let x = 2;
  let step = 0;
  let rows = [];
  let running = false;

  function renderTable() {
    table.innerHTML = rows.map(r => `
      <tr>
        <td>${r.step}</td>
        <td>${r.x}</td>
        <td>${r.fx}</td>
        <td>${r.dfx}</td>
        <td>${r.next}</td>
        <td>${r.error}</td>
      </tr>
    `).join("");
  }

  function update() {
    const fx = f(expr, x);
    const dfx = df(expr, x);
    const next = x - fx / dfx;
    const error = Math.abs(next - x);

    rows.push({
      step,
      x: x.toFixed(4),
      fx: fx.toFixed(4),
      dfx: dfx.toFixed(4),
      next: next.toFixed(4),
      error: error.toFixed(6)
    });

    x = next;
    step++;

    draw(expr, x);

    info.innerHTML = `
      <b>x:</b> ${x.toFixed(5)} |
      <b>f(x):</b> ${fx.toFixed(5)}
    `;

    renderTable();

    if (step < 8 && error > 0.0001 && running) {
      setTimeout(update, 700);
    }
  }

  // ---------------- EVENTS ----------------
  container.querySelector("#run").onclick = () => {
    expr = fnInput.value;
    x = parseFloat(x0Input.value);

    step = 0;
    rows = [];
    running = true;

    update();
  };

  container.querySelector("#reset").onclick = () => {
    running = false;
    x = 2;
    step = 0;
    rows = [];
    draw(expr, x);
    renderTable();
  };

  draw(expr, x);
}
