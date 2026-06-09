export function runTrapezoid(container) {

  container.innerHTML = `
    <h3>Trapezoidal Rule</h3>

    <p>Function: f(x) = x²</p>

    <button id="run">Calculate Area</button>

    <canvas id="chart"></canvas>
  `;

  document.getElementById("run").onclick = function () {

    function f(x) {
      return x*x;
    }

    let a = 0;
    let b = 5;
    let n = 10;
    let h = (b - a) / n;

    let sum = 0;

    const points = [];

    for (let i = 0; i <= n; i++) {
      let x = a + i * h;
      let y = f(x);

      points.push(y);

      if (i === 0 || i === n) {
        sum += y;
      } else {
        sum += 2 * y;
      }
    }

    let area = (h / 2) * sum;

    new Chart(document.getElementById("chart"), {
      type: "line",
      data: {
        labels: points.map((_, i) => i),
        datasets: [{
          label: "Function Curve (Area ≈ " + area.toFixed(2) + ")",
          data: points
        }]
      }
    });
  };
}
