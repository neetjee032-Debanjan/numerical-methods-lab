export function runTrapezoid(container) {

  container.innerHTML = `
    <h3>Trapezoidal Rule (Area Visualizer)</h3>

    <button id="run">Compute Area</button>

    <div id="result"></div>
    <canvas id="chart"></canvas>
  `;

  document.getElementById("run").onclick = function () {

    function f(x) {
      return x*x;
    }

    let a = 0, b = 5, n = 10;
    let h = (b - a) / n;

    let sum = 0;
    let values = [];

    for (let i = 0; i <= n; i++) {
      let x = a + i * h;
      let y = f(x);

      values.push(y);

      sum += (i === 0 || i === n) ? y : 2*y;
    }

    let area = (h / 2) * sum;

    document.getElementById("result").innerHTML =
      `<h4>Approx Area = ${area.toFixed(4)}</h4>`;

    new Chart(document.getElementById("chart"), {
      type: "line",
      data: {
        labels: values.map((_, i) => i),
        datasets: [{
          label: "Function Curve",
          data: values,
          borderColor: "#ef4444"
        }]
      }
    });
  };
}
