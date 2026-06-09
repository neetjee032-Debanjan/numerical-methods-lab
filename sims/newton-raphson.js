export function runNewton(container) {

  container.innerHTML = `
    <div style="padding:15px; border-radius:12px; background:rgba(255,255,255,0.04);">

      <h3>Newton-Raphson Visual Simulator</h3>

      <!-- INPUTS -->
      <div style="display:flex; gap:15px; flex-wrap:wrap; margin-top:10px;">

        <div>
          <label>Function f(x):</label><br/>
          <input id="fnInput" value="x*x - 4"
            style="padding:8px; width:200px;" />
        </div>

        <div>
          <label>Initial Guess x₀:</label><br/>
          <input id="guessInput" type="number" value="2"
            style="padding:8px; width:100px;" />
        </div>

      </div>

      <button id="runBtn" style="margin-top:12px;">
        Run Visual Simulation
      </button>

      <!-- GRAPH -->
      <canvas id="graph" width="600" height="300"
        style="margin-top:15px; background:#0b1220; border-radius:10px;"></canvas>

      <!-- OUTPUT -->
      <div id="output" style="margin-top:10px;"></div>
    </div>
  `;

  const canvas = container.querySelector("#graph");
  const ctx = canvas.getContext("2d");
  const output = container.querySelector("#output");

  const W = canvas.width;
  const H = canvas.height;

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
  // DRAW GRID
  // --------------------------
  function drawGrid() {
    ctx.clearRect(0, 0, W, H);

    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    ctx.lineWidth = 1;

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

    // axis
    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.beginPath();
    ctx.moveTo(0, H/2);
    ctx.lineTo(W, H/2);
    ctx.stroke();
  }

  // --------------------------
  // MAP X/Y TO CANVAS
  // --------------------------
  function scaleX(x) {
    return (x + 5) * (W / 10);
  }

  function scaleY(y) {
    return H/2 - y * 40;
  }

  // --------------------------
  // DRAW FUNCTION GRAPH
  // --------------------------
  function drawFunction(expr) {

    ctx.strokeStyle = "#60a5fa";
    ctx.beginPath();

    for (let x = -5; x <= 5; x += 0.05) {
      let y = f(expr, x);
      ctx.lineTo(scaleX(x), scaleY(y));
    }

    ctx.stroke();
  }

  // --------------------------
  // DRAW POINT
  // --------------------------
  function drawPoint(x, color = "red") {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(scaleX(x), scaleY(f(exprGlobal, x)), 5, 0, Math.PI * 2);
    ctx.fill();
  }

  let exprGlobal = "";

  // --------------------------
  // ANIMATION
  // --------------------------
  function animate(expr, x0) {

    let x = x0;
    let step = 0;

    function frame() {

      drawGrid();
      drawFunction(expr);

      let fx = f(expr, x);
      let dfx = derivative(expr, x);

      // draw current point
      ctx.fillStyle = "#22c55e";
      ctx.beginPath();
      ctx.arc(scaleX(x), scaleY(fx), 6, 0, Math.PI * 2);
      ctx.fill();

      // draw tangent line
      let x1 = x - 1;
      let x2 = x + 1;

      let y1 = fx + dfx * (x1 - x);
      let y2 = fx + dfx * (x2 - x);

      ctx.strokeStyle = "#f59e0b";
      ctx.beginPath();
      ctx.moveTo(scaleX(x1), scaleY(y1));
      ctx.lineTo(scaleX(x2), scaleY(y2));
      ctx.stroke();

      // iteration update
      let nextX = x - fx / dfx;

      output.innerHTML = `
        <b>Iteration:</b> ${step}<br/>
        x = ${x.toFixed(6)}<br/>
        f(x) = ${fx.toFixed(6)}<br/>
        next x = ${nextX.toFixed(6)}
      `;

      x = nextX;
      step++;

      if (step < 8 && Math.abs(fx) > 0.0001) {
        requestAnimationFrame(frame);
      }
    }

    frame();
  }

  // --------------------------
  // BUTTON EVENT
  // --------------------------
  container.querySelector("#runBtn").onclick = () => {

    const expr = container.querySelector("#fnInput").value;
    const x0 = parseFloat(container.querySelector("#guessInput").value);

    exprGlobal = expr;
    animate(expr, x0);
  };

  // initial render
  drawGrid();
}
