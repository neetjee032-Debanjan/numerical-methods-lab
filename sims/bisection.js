export function runBisection(container) {

  container.innerHTML = `
    <h3>Bisection Method (Interactive)</h3>

    <div>
      a: <input id="a" value="0" />
      b: <input id="b" value="5" />
    </div>

    <button id="run">Start</button>

    <div id="steps"></div>
    <canvas id="chart"></canvas>
  `;

  document.getElementById("run").onclick = function () {

    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);

    function f(x) {
      return x*x - 4;
    }

    const steps = [];
    const log = document.getElementById("steps");

    log.innerHTML = "";

    for (let i = 0; i < 10; i++) {

      let c = (a + b) / 2;

      steps.push(c);

      log.innerHTML += `
        <div>
          Step ${i+1}: a=${a.toFixed(2)}, b=${b.toFixed(2)}, c=${c.toFixed(2)}
        </div>
      `;

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
          label: "Root Convergence",
          data: steps,
          borderColor: "#f59e0b"
        }]
      }
    });
  };
}
