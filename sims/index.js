import { runNewton } from "./newton-raphson.js";
import { runBisection } from "./bisection.js";
import { runIntegration } from "./integration.js";
import { runLagrange } from "./lagrange.js";
import { runDE } from "./differential.js";

/**
 * ONLY TOP-LEVEL SIMULATIONS
 * NEVER methods like euler, rk4, simpson here
 */

export const Simulations = {

  // Root Finding
  "newton-raphson": runNewton,
  bisection: runBisection,

  // Integration
  integration: runIntegration,

  // Interpolation
  lagrange: runLagrange,

  // Differential Equations
  differential: runDE
};

export function loadSimulation(key, container) {

  try {

    const sim = Simulations[key];

    if (!sim) {

      container.innerHTML = `
        <div style="color:white;padding:20px;font-family:Arial;">
          <h2>⚠ Simulation not found</h2>
          <p>Key: <b>${key}</b></p>
          <p>This key is NOT a simulation. It may be a METHOD inside a simulation.</p>
        </div>
      `;

      return;
    }

    sim(container);

  } catch (err) {

    container.innerHTML = `
      <div style="color:red;padding:20px;">
        <h2>Simulation crashed</h2>
        <pre>${err.message}</pre>
      </div>
    `;
  }
}
