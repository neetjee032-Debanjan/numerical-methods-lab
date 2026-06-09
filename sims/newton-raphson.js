export function runNewton(container) {

  container.innerHTML = `
    <h3>Newton-Raphson Interactive Simulator</h3>

    <div style="margin-bottom:10px;">
      <label>Initial Guess:</label>
      <input id="x0" value="2" />
    </div>

    <button id="run">Run Step-by-Step</button>

    <div id="steps" style="margin-top:15px;"></div>
    <canvas id="chart"></canvas>
  `;

  document.getElementById("run").onclick = function () {

    let x = parseFloat(document.getElementById("x0").value);

    function f(x) {
      return x*x - 4;
    }

    function df(x) {
      return 2*x;
    }

    const stepsDiv = document.getElementById("steps");

    const values = [];

    stepsDiv.innerHTML = "";

    for (let i = 0; i < 8; i++) {

      let fx = f(x);
      let dfx = df(x);

      let nextX = x - fx / dfx;

      stepsDiv.innerHTML += `
        <div style="margin-bottom:8px;">
          Step ${i+1}: x = ${x.toFixed(5)} → ${nextX.toFixed(5)}
        </div>
      `;

      values.push(x);
      x = nextX;
    }

    new Chart(document.getElementById("chart"), {
      type: "line",
      data: {
        labels: values.map((_, i) => i),
        datasets: [{
          label: "Convergence Path",
          data: values,
          borderColor: "#22c55e"
        }]
      }
    });
  };
}
