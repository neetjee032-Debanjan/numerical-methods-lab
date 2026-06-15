import { drawAxes, drawLegend } from "./graph-utils.js";
import { evaluateFunction } from "../utils/evaluateFunction.js";

export function runBisection(container) {

  container.innerHTML = `
    <div style="color:white;padding:15px;font-family:Arial;">

      <h2>Bisection Method Simulator</h2>

      <div
        style="
          margin-bottom:12px;
          color:#94a3b8;
          font-size:14px;
        "
      >
        <b>Supported Functions:</b><br/>
        sin(x), cos(x), tan(x), exp(x),
        e^(-x), sqrt(x), sqrt(abs(x)),
        log(x), pi, e
        <br/><br/>

        <b>Interval Examples:</b><br/>
        a = 0, b = 3<br/>
        a = pi/2, b = 4<br/>
        a = sqrt(2), b = 5
      </div>

      <label>f(x):</label>
      <input
        id="fn"
        value="x^2 - 4"
        style="
          width:220px;
          margin-right:10px;
        "
      />

      <label>a:</label>
      <input
        id="a"
        type="text"
        value="0"
        style="
          width:100px;
          margin-right:10px;
        "
      />

      <label>b:</label>
      <input
        id="b"
        type="text"
        value="3"
        style="
          width:100px;
          margin-right:10px;
        "
      />

      <button id="run">
        Run
      </button>

      <button id="reset">
        Reset
      </button>

      <div
        id="status"
        style="
          margin-top:10px;
          font-size:16px;
          color:#4cc9f0;
        "
      ></div>

      <canvas
        id="canvas"
        width="800"
        height="450"
        style="
          background:#0b1220;
          margin-top:10px;
          border:1px solid #333;
        "
      ></canvas>

      <table
        border="1"
        style="
          width:100%;
          margin-top:10px;
          color:white;
        "
      >
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

  const canvas =
    container.querySelector("#canvas");

  const ctx =
    canvas.getContext("2d");

  const fn =
    container.querySelector("#fn");

  const aIn =
    container.querySelector("#a");

  const bIn =
    container.querySelector("#b");

  const table =
    container.querySelector("#table");

  const status =
    container.querySelector("#status");

  const W = canvas.width;
  const H = canvas.height;

  function f(expr,x){

    return evaluateFunction(
      expr,
      x
    );
  }

  const sx =
    x => (x + 5) * (W / 10);

  const sy =
    y => H/2 - y*40;

  let rows = [];
    function draw(expr,a,b,m){

    ctx.clearRect(0,0,W,H);

    drawAxes(ctx,W,H);

    /* FUNCTION CURVE */

    ctx.strokeStyle = "#4cc9f0";
    ctx.lineWidth = 3;

    ctx.beginPath();

    let first = true;

    for(
      let x=-5;
      x<=5;
      x+=0.05
    ){

      try{

        const y =
          f(expr,x);

        const px =
          sx(x);

        const py =
          sy(y);

        if(first){

          ctx.moveTo(px,py);

          first = false;

        }else{

          ctx.lineTo(px,py);
        }

      }catch{
        continue;
      }
    }

    ctx.stroke();

    /* LEFT ENDPOINT */

    ctx.fillStyle = "red";

    ctx.beginPath();

    ctx.arc(
      sx(a),
      H/2,
      6,
      0,
      Math.PI*2
    );

    ctx.fill();

    /* RIGHT ENDPOINT */

    ctx.fillStyle = "lime";

    ctx.beginPath();

    ctx.arc(
      sx(b),
      H/2,
      6,
      0,
      Math.PI*2
    );

    ctx.fill();

    /* MIDPOINT */

    ctx.fillStyle = "yellow";

    ctx.beginPath();

    ctx.arc(
      sx(m),
      sy(f(expr,m)),
      7,
      0,
      Math.PI*2
    );

    ctx.fill();

    /* LABELS */

    ctx.fillStyle = "white";
    ctx.font = "14px Arial";

    ctx.fillText(
      `a = ${a.toFixed(3)}`,
      sx(a)-20,
      H/2+25
    );

    ctx.fillText(
      `b = ${b.toFixed(3)}`,
      sx(b)-20,
      H/2+25
    );

    ctx.fillText(
      `mid`,
      sx(m)+10,
      sy(f(expr,m))
    );

    drawLegend(ctx,[
      {
        color:"#4cc9f0",
        label:"Function Curve"
      },
      {
        color:"red",
        label:"Left Interval Endpoint"
      },
      {
        color:"lime",
        label:"Right Interval Endpoint"
      },
      {
        color:"yellow",
        label:"Current Midpoint"
      }
    ]);
  }

  function renderTable(){

    table.innerHTML =
      rows.map(r => `
        <tr>
          <td>${r.step}</td>
          <td>${r.a}</td>
          <td>${r.b}</td>
          <td>${r.mid}</td>
          <td>${r.fmid}</td>
        </tr>
      `).join("");
  }

  container
    .querySelector("#reset")
    .onclick = () => {

      rows = [];

      table.innerHTML = "";

      status.innerHTML = "";

      ctx.clearRect(
        0,
        0,
        W,
        H
      );

      drawAxes(
        ctx,
        W,
        H
      );
    };

  container
    .querySelector("#run")
    .onclick = () => {

      let expr =
        fn.value;

      let a;
      let b;

      try{

        a = evaluateFunction(
          aIn.value,
          0
        );

        b = evaluateFunction(
          bIn.value,
          0
        );

      }catch{

        status.innerHTML =
          "❌ Invalid interval values. Examples: pi, e, sqrt(2), 3";

        return;
      }

      if(
        !isFinite(a) ||
        !isFinite(b)
      ){

        status.innerHTML =
          "❌ Invalid interval.";

        return;
      }

      rows = [];

      let step = 0;

      let fa;
      let fb;

      try{

        fa = f(expr,a);
        fb = f(expr,b);

      }catch(err){

        status.innerHTML =
          "❌ Function Error: " +
          err.message;

        return;
      }

      if(
        fa * fb > 0
      ){

        status.innerHTML = `
          ❌ Invalid Interval

          <br><br>

          f(a) and f(b) must have opposite signs.

          <br>

          f(a) = ${fa.toFixed(6)}

          <br>

          f(b) = ${fb.toFixed(6)}
        `;

        return;
      }
            function iterate(){

        let mid =
          (a+b)/2;

        let fmid;

        try{

          fmid =
            f(expr,mid);

        }catch(err){

          status.innerHTML =
            "❌ Function Error: " +
            err.message;

          return;
        }

        rows.push({

          step,

          a:a.toFixed(6),

          b:b.toFixed(6),

          mid:mid.toFixed(6),

          fmid:fmid.toFixed(8)

        });

        draw(
          expr,
          a,
          b,
          mid
        );

        renderTable();

        status.innerHTML = `

          Iteration:
          <b>${step}</b>

          <br>

          Current Root Estimate:
          <b>${mid.toFixed(8)}</b>

          <br>

          f(mid):
          ${fmid.toFixed(8)}

          <br>

          Interval:
          [${a.toFixed(6)},
          ${b.toFixed(6)}]

        `;

        if(

          Math.abs(fmid)
          <
          0.000001

        ){

          status.innerHTML = `

            ✅ Converged

            <br><br>

            Approximate Root:

            <b>
            ${mid.toFixed(10)}
            </b>

            <br>

            f(root) =
            ${fmid.toExponential(3)}

          `;

          return;
        }

        if(
          step >= 20
        ){

          status.innerHTML += `

            <br><br>

            ⚠ Maximum iterations reached.

          `;

          return;
        }

        if(
          fa * fmid < 0
        ){

          b = mid;
          fb = fmid;

        }else{

          a = mid;
          fa = fmid;
        }

        step++;

        setTimeout(
          iterate,
          700
        );
      }

      iterate();
    };

  drawAxes(
    ctx,
    W,
    H
  );
}
