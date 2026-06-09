export function runLagrange(container) {

  container.innerHTML = `
    <h3>Lagrange Interpolation</h3>

    <p>Points: (1,1), (2,4), (3,9)</p>

    <button id="run">Plot Curve</button>

    <canvas id="chart"></canvas>
  `;

  document.getElementById("run").onclick = function () {

    const x = [1, 2, 3];
    const y = [1, 4, 9];

    function lagrange(xi) {
      let sum = 0;

      for (let i = 0; i < x.length; i++) {
        let term = y[i];

        for (let j = 0; j < x.length; j++) {
          if (i !== j) {
            term *= (xi - x[j]) / (x[i] - x[j]);
          }
        }

        sum += term;
      }

      return sum;
    }

    const xs = [];
    const ys = [];

    for (let i = 0; i <= 50; i++) {
      let xi = 1 + i * 0.04;
      xs.push(xi);
      ys.push(lagrange(xi));
    }

    new Chart(document.getElementById("chart"), {
      type: "line",
      data: {
        labels: xs,
        datasets: [{
          label: "Interpolation Curve",
          data: ys
        }]
      }
    });
  };
}
