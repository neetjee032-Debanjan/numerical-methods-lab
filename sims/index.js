import { runNewton } from "./newton-raphson.js";
import { runBisection } from "./bisection.js";
import { runIntegration } from "./integration.js";
import { runLagrange } from "./lagrange.js";
import { runDE } from "./differential.js";

const Simulations = {
  "newton-raphson": runNewton,
  bisection: runBisection,
  integration: runIntegration,
  lagrange: runLagrange,
  differential: runDE
};

export function loadSimulation(key, container) {

  console.log("Loading simulation:", key);

  const sim = Simulations[key];

  if (!sim) {
    container.innerHTML = `
      <div style="color:white;padding:20px">
        <h2>Simulation not found</h2>
        <p>Key: ${key}</p>
      </div>
    `;
    return;
  }

  try {
    sim(container);
  } catch (e) {
    console.error(e);
    container.innerHTML = `
      <div style="color:red;padding:20px">
        <h2>Simulation crashed</h2>
        <pre>${e.message}</pre>
      </div>
    `;
  }
}
