export function runNewton(container) {

  container.innerHTML = `
    <div style="padding:15px; color:white; font-family:Arial;">

      <h2>Newton-Raphson Visual Simulator</h2>

      <div style="display:flex; gap:10px; flex-wrap:wrap;">

        <div>
          <label>f(x)</label><br/>
          <input id="fn" value="x*x - 4" style="padding:6px;" />
        </div>

        <div>
          <label>x₀</label><br/>
          <input id="x0" value="2" type="number" style="padding:6px;" />
        </div>

        <button id="run">Run</button>
        <button id="reset">Reset</button>

      </div>

      <canvas id="canvas" width="700" height="350"
        style="background:#0b1220; margin-top:10px;"></canvas>

      <div id="info"></div>

      <table border="1" style="width:100%; margin-top:10px; color:white;">
        <thead>
          <tr>
            <th>Step</th><th>x</th><th>f(x)</th><th>f'(x)</th><th>next</th><th>error</th>
          </tr>
        </thead>
        <tbody id="table"></tbody>
      </table>

    </div>
  `;

  const canvas = container.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  const fn = container.querySelector("#fn");
  const x0 = container.querySelector("#x0");
  const table = container.querySelector("#table");
  const info = container.querySelector("#info");

  const W = canvas.width;
  const H = canvas.height;

  const scaleX = x => (x + 5) * (W / 10);
  const scaleY = y => H/2 - y * 40;

  function f(expr, x) {
    return Function("x", `return ${expr}`)(x);
  }

  function df(expr, x) {
    const h = 0.00001;
    return (f(expr, x+h) - f(expr, x-h)) / (2*h);
  }

  let expr = "x*x - 4";
  let x = 2;
  let step = 0;
  let rows = [];
  let running = false;

  function draw() {
    ctx.clearRect(0,0,W,H);

    ctx.strokeStyle = "#444";
    ctx.beginPath();
    ctx.moveTo(0,H/2);
    ctx.lineTo(W,H/2);
    ctx.stroke();

    ctx.strokeStyle = "#4cc9f0";
    ctx.beginPath();

    for (let i=-5;i<=5;i+=0.05){
      ctx.lineTo(scaleX(i), scaleY(f(expr,i)));
    }

    ctx.stroke();

    const fx = f(expr,x);

    ctx.fillStyle = "lime";
    ctx.beginPath();
    ctx.arc(scaleX(x), scaleY(fx), 6, 0, Math.PI*2);
    ctx.fill();
  }

  function renderTable(){
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

  function iterate(){

    const fx = f(expr,x);
    const dfx = df(expr,x);
    const next = x - fx/dfx;
    const error = Math.abs(next-x);

    rows.push({
      step,
      x:x.toFixed(4),
      fx:fx.toFixed(4),
      dfx:dfx.toFixed(4),
      next:next.toFixed(4),
      error:error.toFixed(6)
    });

    x = next;
    step++;

    draw();
    renderTable();

    info.innerHTML = `x = ${x.toFixed(5)} | f(x)= ${fx.toFixed(5)}`;

    if(step < 10 && error > 0.0001 && running){
      setTimeout(iterate, 600);
    }
  }

  container.querySelector("#run").onclick = () => {
    expr = fn.value;
    x = parseFloat(x0.value);
    step = 0;
    rows = [];
    running = true;
    iterate();
  };

  container.querySelector("#reset").onclick = () => {
    running = false;
    x = 2;
    step = 0;
    rows = [];
    draw();
    renderTable();
  };

  draw();
}
