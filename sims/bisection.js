export function runBisection(container) {

  container.innerHTML = `
    <div style="color:white; font-family:Arial; padding:15px;">

      <h2>Bisection Method Visual Simulator</h2>

      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <div>
          <label>f(x)</label><br/>
          <input id="fn" value="x*x - 4" />
        </div>

        <div>
          <label>a</label><br/>
          <input id="a" type="number" value="0" />
        </div>

        <div>
          <label>b</label><br/>
          <input id="b" type="number" value="3" />
        </div>

        <button id="run">Run</button>
      </div>

      <canvas id="canvas" width="700" height="350"
        style="background:#0b1220; margin-top:10px;"></canvas>

      <table border="1" style="width:100%; margin-top:10px;">
        <thead>
          <tr>
            <th>Step</th><th>a</th><th>b</th><th>mid</th><th>f(mid)</th>
          </tr>
        </thead>
        <tbody id="table"></tbody>
      </table>

    </div>
  `;

  const canvas = container.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  const fnInput = container.querySelector("#fn");
  const aInput = container.querySelector("#a");
  const bInput = container.querySelector("#b");
  const table = container.querySelector("#table");

  function f(expr, x) {
    return Function("x", `return ${expr}`)(x);
  }

  const W = canvas.width;
  const H = canvas.height;

  const scaleX = x => (x + 5) * (W / 10);
  const scaleY = y => H/2 - y * 40;

  let rows = [];

  function draw(expr, a, b, mid) {
    ctx.clearRect(0,0,W,H);

    ctx.strokeStyle = "#4cc9f0";
    ctx.beginPath();

    for (let x=-5;x<=5;x+=0.05){
      ctx.lineTo(scaleX(x), scaleY(f(expr,x)));
    }
    ctx.stroke();

    // interval markers
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(scaleX(a), H/2, 6, 0, Math.PI*2);
    ctx.fill();

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(scaleX(b), H/2, 6, 0, Math.PI*2);
    ctx.fill();

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(scaleX(mid), scaleY(f(expr,mid)), 6, 0, Math.PI*2);
    ctx.fill();
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

    let expr = fnInput.value;
    let a = parseFloat(aInput.value);
    let b = parseFloat(bInput.value);

    rows = [];

    let step = 0;

    function iterate() {

      let mid = (a + b)/2;
      let fmid = f(expr, mid);

      rows.push({
        step,
        a:a.toFixed(4),
        b:b.toFixed(4),
        mid:mid.toFixed(4),
        fmid:fmid.toFixed(4)
      });

      draw(expr, a, b, mid);
      renderTable();

      if (Math.abs(fmid) > 0.0001 && step < 10) {

        if (f(expr,a)*fmid < 0) b = mid;
        else a = mid;

        step++;
        setTimeout(iterate, 600);
      }
    }

    iterate();
  };
}
