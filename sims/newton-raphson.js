export function runNewton(container) {

  container.innerHTML = `
    <div style="padding:15px; border-radius:12px; background:rgba(255,255,255,0.04);">

      <h2>Newton-Raphson Advanced Visual Lab</h2>

      <!-- INPUTS -->
      <div style="display:flex; gap:15px; flex-wrap:wrap; margin-top:10px;">

        <div>
          <label>f(x):</label><br/>
          <input id="fnInput" value="x*x - 4"
            style="padding:8px; width:220px;" />
        </div>

        <div>
          <label>Initial Guess (x₀):</label><br/>
          <input id="guessInput" type="number" value="2"
            style="padding:8px; width:100px;" />
        </div>

        <button id="runBtn">▶ Run</button>
        <button id="pauseBtn">⏸ Pause</button>
        <button id="stepBtn">⏭ Step</button>

      </div>

      <!-- CANVAS -->
      <canvas id="graph" width="700" height="360"
        style="margin-top:15px; background:#0b1220; border-radius:10px;"></canvas>

      <!-- LEGEND -->
      <div style="margin-top:10px; font-size:13px;">
        <span style="color:#60a5fa;">■ Function</span>
        <span style="color:#f59e0b;">■ Tangent</span>
        <span style="color:#22c55e;">■ Current Point</span>
        <span style="color:#ef4444;">■ Root estimate</span>
      </div>

      <!-- OUTPUT -->
      <div id="output" style="margin-top:10px;"></div>

      <!-- TABLE -->
      <div id="table" style="margin-top:15px; max-height:200px; overflow:auto;"></div>

      <!-- ERROR PLOT -->
      <canvas id="errorGraph" width="700" height="180"
        style="margin-top:15px; background:#0b1220; border-radius:10px;"></canvas>

    </div>
  `;

  const canvas = container.querySelector("#graph");
  const ctx = canvas.getContext("2d");

  const errorCanvas = container.querySelector("#errorGraph");
  const ectx = errorCanvas.getContext("2d");

  const output = container.querySelector("#output");
  const tableDiv = container.querySelector("#table");

  let running = false;
  let stepMode = false;

  const W = canvas.width;
  const H = canvas.height;

  const EW = errorCanvas.width;
  const EH = errorCanvas.height;

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
  // GRID
  // --------------------------
  function drawGrid() {

    ctx.clearRect(0,0,W,H);

    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    for (let i=0;i<W;i+=50){
      ctx.beginPath();
      ctx.moveTo(i,0);
      ctx.lineTo(i,H);
      ctx.stroke();
    }

    for (let i=0;i<H;i+=50){
      ctx.beginPath();
      ctx.moveTo(0,i);
      ctx.lineTo(W,i);
      ctx.stroke();
    }

    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.beginPath();
    ctx.moveTo(0,H/2);
    ctx.lineTo(W,H/2);
    ctx.stroke();
  }

  // --------------------------
  // FUNCTION DRAW
  // --------------------------
  function drawFunction(expr) {

    ctx.strokeStyle = "#60a5fa";
    ctx.beginPath();

    for (let x=-5;x<=5;x+=0.05){
      ctx.lineTo(scaleX(x), scaleY(f(expr,x)));
    }

    ctx.stroke();
  }

  // --------------------------
  // ERROR GRAPH
  // --------------------------
  function drawError(errors){

    ectx.clearRect(0,0,EW,EH);

    ectx.strokeStyle = "#22c55e";
    ectx.beginPath();

    let max = Math.max(...errors, 1);

    errors.forEach((e,i)=>{
      let x = (i/(errors.length-1))*EW;
      let y = EH - (e/max)*EH;

      ectx.lineTo(x,y);
    });

    ectx.stroke();
  }

  // --------------------------
  // STATE
  // --------------------------
  let exprGlobal = "";
  let x = 2;
  let step = 0;
  let errors = [];
  let rows = [];

  function renderAll() {

    drawGrid();
    drawFunction(exprGlobal);

    let fx = f(exprGlobal, x);
    let dfx = derivative(exprGlobal, x);

    // point
    ctx.fillStyle = "#22c55e";
    ctx.beginPath();
    ctx.arc(scaleX(x), scaleY(fx), 6, 0, Math.PI*2);
    ctx.fill();

    // tangent
    let x1 = x-1, x2 = x+1;
    let y1 = fx + dfx*(x1-x);
    let y2 = fx + dfx*(x2-x);

    ctx.strokeStyle = "#f59e0b";
    ctx.beginPath();
    ctx.moveTo(scaleX(x1), scaleY(y1));
    ctx.lineTo(scaleX(x2), scaleY(y2));
    ctx.stroke();

    output.innerHTML = `
      <b>Step:</b> ${step}<br/>
      x = ${x.toFixed(6)}<br/>
      f(x) = ${fx.toFixed(6)}
    `;

    tableDiv.innerHTML = `
      <table border="1" cellpadding="5" style="border-collapse:collapse;">
        <tr><th>Step</th><th>x</th><th>f(x)</th></tr>
        ${rows.map(r=>`
          <tr>
            <td>${r.step}</td>
            <td>${r.x}</td>
            <td>${r.fx}</td>
          </tr>
        `).join("")}
      </table>
    `;

    drawError(errors);
  }

  function iterate() {

    let fx = f(exprGlobal,x);
    let dfx = derivative(exprGlobal,x);

    let next = x - fx/dfx;

    rows.push({step, x:x.toFixed(6), fx:fx.toFixed(6)});
    errors.push(Math.abs(fx));

    x = next;
    step++;

    renderAll();
  }

  function loop(){

    if(!running) return;

    iterate();

    if(step<10 && Math.abs(f(exprGlobal,x))>0.0001){
      setTimeout(loop, 600);
    }
  }

  // --------------------------
  // EVENTS
  // --------------------------
  container.querySelector("#runBtn").onclick = ()=>{
    exprGlobal = container.querySelector("#fnInput").value;
    x = parseFloat(container.querySelector("#guessInput").value);
    step = 0;
    rows = [];
    errors = [];
    running = true;
    loop();
  };

  container.querySelector("#pauseBtn").onclick = ()=>{
    running = false;
  };

  container.querySelector("#stepBtn").onclick = ()=>{
    if(!exprGlobal){
      exprGlobal = container.querySelector("#fnInput").value;
    }
    iterate();
  };

  renderAll();
}
