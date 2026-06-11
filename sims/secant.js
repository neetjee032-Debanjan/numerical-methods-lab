export function runSecant(container) {

  container.innerHTML = `
    <div style="padding:15px;color:white;font-family:Arial;">

      <h2>Secant Method Simulator</h2>

      <div style="display:flex;gap:10px;flex-wrap:wrap;">

        <div>
          <label>f(x)</label><br>
          <input id="fn" value="x*x*x - x - 2">
        </div>

        <div>
          <label>x₀</label><br>
          <input id="x0" type="number" value="1">
        </div>

        <div>
          <label>x₁</label><br>
          <input id="x1" type="number" value="2">
        </div>

        <button id="run">Run</button>
        <button id="reset">Reset</button>

      </div>

      <canvas
        id="canvas"
        width="800"
        height="420"
        style="background:#0b1220;margin-top:15px;border:1px solid #333;">
      </canvas>

      <div
        id="status"
        style="
          margin-top:12px;
          padding:10px;
          background:#111827;
          border-radius:8px;
        ">
      </div>

      <table
        border="1"
        style="
          width:100%;
          margin-top:15px;
          color:white;
          border-collapse:collapse;
        ">
        <thead>
          <tr>
            <th>Step</th>
            <th>x₀</th>
            <th>x₁</th>
            <th>x₂</th>
            <th>Error</th>
          </tr>
        </thead>

        <tbody id="table"></tbody>
      </table>

    </div>
  `;

  const canvas = container.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  const fnInput = container.querySelector("#fn");
  const x0Input = container.querySelector("#x0");
  const x1Input = container.querySelector("#x1");

  const table = container.querySelector("#table");
  const status = container.querySelector("#status");

  const W = canvas.width;
  const H = canvas.height;

  const sx = x => (x + 5) * (W / 10);
  const sy = y => H/2 - y*40;

  function f(expr,x){
    return Function("x",`return ${expr}`)(x);
  }

  let rows = [];
  let running = false;

  function drawAxes() {

    ctx.strokeStyle = "#666";

    ctx.beginPath();
    ctx.moveTo(0,H/2);
    ctx.lineTo(W,H/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(W/2,0);
    ctx.lineTo(W/2,H);
    ctx.stroke();

    ctx.fillStyle = "white";

    ctx.fillText("X",W-15,H/2-10);
    ctx.fillText("Y",W/2+10,15);
  }

  function drawFunction(expr){

    ctx.strokeStyle = "#4cc9f0";
    ctx.lineWidth = 2;

    ctx.beginPath();

    let first = true;

    for(let x=-5;x<=5;x+=0.05){

      const px = sx(x);
      const py = sy(f(expr,x));

      if(first){
        ctx.moveTo(px,py);
        first=false;
      }
      else{
        ctx.lineTo(px,py);
      }
    }

    ctx.stroke();
  }

  function draw(expr,x0,x1){

    ctx.clearRect(0,0,W,H);

    drawAxes();
    drawFunction(expr);

    const y0 = f(expr,x0);
    const y1 = f(expr,x1);

    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(sx(x0),sy(y0));
    ctx.lineTo(sx(x1),sy(y1));
    ctx.stroke();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(sx(x0),sy(y0),6,0,Math.PI*2);
    ctx.fill();

    ctx.fillStyle = "lime";
    ctx.beginPath();
    ctx.arc(sx(x1),sy(y1),6,0,Math.PI*2);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.fillText("Red = x₀",20,25);
    ctx.fillText("Green = x₁",20,45);
    ctx.fillText("Blue = Function",20,65);
    ctx.fillText("Orange = Secant Line",20,85);
  }

  function renderTable(){

    table.innerHTML = rows.map(r => `
      <tr>
        <td>${r.step}</td>
        <td>${r.x0}</td>
        <td>${r.x1}</td>
        <td>${r.x2}</td>
        <td>${r.error}</td>
      </tr>
    `).join("");
  }

  function run(){

    let expr = fnInput.value;

    let x0 = parseFloat(x0Input.value);
    let x1 = parseFloat(x1Input.value);

    rows = [];

    let step = 0;

    function iterate(){

      const fx0 = f(expr,x0);
      const fx1 = f(expr,x1);

      const x2 =
        x1 -
        fx1*(x1-x0)/(fx1-fx0);

      const error = Math.abs(x2-x1);

      rows.push({
        step,
        x0:x0.toFixed(5),
        x1:x1.toFixed(5),
        x2:x2.toFixed(5),
        error:error.toFixed(6)
      });

      draw(expr,x0,x1);

      renderTable();

      status.innerHTML = `
        <b>Iteration:</b> ${step}<br>
        <b>Current Root Estimate:</b> ${x2.toFixed(6)}<br>
        <b>Error:</b> ${error.toFixed(6)}
      `;

      x0 = x1;
      x1 = x2;

      step++;

      if(error > 0.0001 && step < 12 && running){
        setTimeout(iterate,600);
      }
    }

    iterate();
  }

  container.querySelector("#run").onclick = () => {
    running = true;
    run();
  };

  container.querySelector("#reset").onclick = () => {
    running = false;
    rows = [];
    table.innerHTML = "";
    status.innerHTML = "";
    ctx.clearRect(0,0,W,H);
  };
}
