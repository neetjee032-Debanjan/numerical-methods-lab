export function runEuler(container) {

  container.innerHTML = `
    <h3>Euler Method (ODE Simulation)</h3>

    <p>dy/dx = y, y(0)=1</p>

    <button id="run">Simulate</button>

    <canvas id="chart"></canvas>
  `;

  document.getElementById("run").onclick = function () {

    let x = 0;
    let y = 1;
    let h = 0.2;

    const values = [];

    for (let i = 0; i < 20; i++) {

      y = y + h * y; // dy/dx = y
      x += h;

      values.push(y);
    }

    new Chart(document.getElementById("chart"), {
      type: "line",
      data: {
        labels: values.map((_, i) => i),
        datasets: [{
          label: "Euler Approximation",
          data: values
        }]
      }
    });
  };
}
