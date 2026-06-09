export function runNewton(container) {

  container.innerHTML = `
    <div style="padding:16px; border-radius:12px; background:rgba(255,255,255,0.04);">

      <h2>Newton-Raphson Interactive Visual Lab</h2>

      <!-- INPUT PANEL -->
      <div style="display:flex; gap:15px; flex-wrap:wrap; margin-top:10px;">

        <div>
          <label><b>Function f(x)</b></label><br/>
          <input id="fn" value="x*x - 4"
            style="padding:8px; width:220px;" />
        </div>

        <div>
          <label><b>Initial Guess (x₀)</b></label><br/>
          <input id="x0" value="2" type="number"
            style="padding:8px; width:120px;" />
        </div>

        <button id="run">▶ Run</button>
        <button id="reset">🔄 Reset</button>

      </div>

      <!-- GRAPH -->
      <canvas id="canvas" width="750" height="380"
        style="margin-top:15px; background:#0b1220; border-radius:10px;"></canvas>

      <!-- LEGEND -->
      <div style="margin-top:10px; font-size:13px;">
        <span style="color:#60a5fa;">■ Function</span>
        <span style="color:#f59e0b;">■ Tangent</span>
        <span style="color:#22c55e;">■ Current xₙ</span>
        <span style="color:#ef4444;">■ Root estimate</span>
      </div>

      <!-- INFO -->
      <div id="info" style="margin-top:10px;"></div>

      <!-- ITERATION TABLE -->
      <div style="margin-top:15px; max-height:220px; overflow:auto;">
        <table border="1" style="border-collapse:collapse; width:100%; font-size:13px;">
          <thead>
            <tr>
              <th>Step</th>
              <th>xₙ</th>
              <th>f(xₙ)</th>
              <th>f'(xₙ)</th>
              <th>xₙ₊₁</th>
              <th>Error</th>
            </tr>
          </thead>
          <tbody id="table"></tbody>
        </table>
      </div>

    </div>
  `;

  const canvas = container.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  const W = canvas.width;
  const H = canvas.height;

  const info = container.querySelector("#info");
  const table = container.querySelector("#table");

  // --------------------------
  // FUNCTION PARSER
  // --------------------------
  function f(expr, x) {
    return Function("x", `return ${expr}`)(x);
  }

  function derivative(expr, x) {
    const h = 0.00001;
    return (f(expr, x + h) - f(expr, x - h)) / (2 * h);
  }

  // --------------------------
  // SCALE
  // --------------------------
  const scaleX = x => (x + 5) * (W / 10);
  const scaleY = y => H/2 - y * 40;

  // --------------------------
  // DRAW GRID
  // --------------------------
  function grid() {
    ctx.clearRect(0, 0, W, H);

    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    for (let i = 0; i < W; i += 50) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, H);
      ctx.stroke();
    }

    for (let i = 0; i < H; i += 50) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(W, i);
      ctx.stroke();
    }

    // x-axis
    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.beginPath();
    ctx.moveTo(0, H / 2);
    ctx.lineTo(W, H / 2);
    ctx.stroke();
  }

  // --------------------------
  // DRAW FUNCTION
  // --------------------------
  function drawFunction(expr) {
    ctx.strokeStyle = "#60a5fa";
    ctx.beginPath();

    for (let x = -5; x <= 5; x += 0.05) {
      ctx.lineTo(scaleX(x), scaleY(f(expr, x)));
    }

    ctx.stroke();
  }

  // --------------------------
  // STATE
  // --------------------------
  let expr = "";
  let x = 2;
  let step = 0;
  let rows = [];
  let running = false;

  // --------------------------
  // RENDER
  // --------------------------
  function render() {

    grid();
    drawFunction(expr);

    let fx = f(expr, x);
    let dfx = derivative(expr, x);
    let next = x - fx / dfx;

    // CURRENT POINT
    ctx.fillStyle = "#22c55e";
    ctx.beginPath();
    ctx.arc(scaleX(x), scaleY(fx), 6, 0, Math.PI * 2);
    ctx.fill();

    // ROOT APPROX
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.arc(scaleX(next), scaleY(0), 6, 0, Math.PI * 2);
    ctx.fill();

    // TANGENT LINE
    let x1 = x - 1;
    let x2 = x + 1;

    let y1 = fx + dfx * (x1 - x);
    let y2 = fx + dfx * (x2 - x);

    ctx.strokeStyle = "#f59e0b";
    ctx.beginPath();
    ctx.moveTo(scaleX(x1), scaleY(y1));
    ctx.lineTo(scaleX(x2), scaleY(y2));
    ctx.stroke();

    info.innerHTML = `
      <b>Current xₙ:</b> ${x.toFixed(6)}<br/>
      <b>f(xₙ):</b> ${fx.toFixed(6)}<br/>
      <b>Next xₙ₊₁:</b> ${next.toFixed(6)}
    `;

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

  // --------------------------
  // ITERATION
  // --------------------------
  function iterate() {

    let fx = f(expr, x);
    let dfx = derivative(expr, x);
    let next = x - fx / dfx;
    let error = Math.abs(next - x);

    rows.push({
      step,
      x: x.toFixed(6),
      fx: fx.toFixed(6),
      dfx: dfx.toFixed(6),
      next: next.toFixed(6),
      error: error.toFixed(6)
    });

    x = next;
    step++;

    render();

    if (step < 10 && error > 0.0001 && running) {
      setTimeout(iterate, 600);
    }
  }

  // --------------------------
  // EVENTS
  // --------------------------
  container.querySelector("#run").onclick = () => {
    expr = container.querySelector("#fn").value;
    x = parseFloat(container.querySelector("#x0").value);

    step = 0;
    rows = [];
    running = true;

    iterate();
  };

  container.querySelector("#reset").onclick = () => {
    running = false;
    step = 0;
    rows = [];
    x = 2;
    expr = "x*x - 4";
    render();
  };

  render();
}
