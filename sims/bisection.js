export function runBisection(container) {

  container.innerHTML = `
    <h3>Bisection Method Simulator</h3>

    <p>Function: f(x) = x² - 4</p>

    <button id="run">Run Simulation</button>

    <canvas id="chart"></canvas>
  `;

  document.getElementById("run").onclick = function () {

    function f(x) {
      return x*x - 4;
    }

    let a = 0;
    let b = 5;

    const steps = [];

    for (let i = 0; i < 10; i++) {

      let c = (a + b) / 2;

      steps.push(c);

      if (f(a) * f(c) < 0) {
        b = c;
      } else {
        a = c;
      }
    }

    new Chart(document.getElementById("chart"), {
      type: "line",
      data: {
        labels: steps.map((_, i) => i),
        datasets: [{
          label: "Convergence to Root",
          data: steps
        }]
      }
    });
  };
}
