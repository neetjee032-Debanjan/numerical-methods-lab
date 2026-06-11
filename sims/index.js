import { runNewton } from "./newton-raphson.js";
import { runBisection } from "./bisection.js";
import { runIntegration } from "./integration.js";
import { runLagrange } from "./lagrange.js";
import { runDE } from "./differential.js";

import { runFalsePosition } from "./falsePosition.js";
import { runSecant } from "./secant.js";
import { runSimpson13 } from "./simpson13.js";

export const Simulations = {

  /* Root Finding */
  "newton": runNewton,
  "newton-raphson": runNewton,

  "bisection": runBisection,

  "falseposition": runFalsePosition,
  "false-position": runFalsePosition,
  "regulafalsi": runFalsePosition,

  "secant": runSecant,

  /* Interpolation */
  "lagrange": runLagrange,

  /* Integration */
  "integration": runIntegration,
  "trapezoid": runIntegration,

  "simpson13": runSimpson13,
  "simpson-1-3": runSimpson13,
  "simpson": runSimpson13,

  /* Differential Equations */
  "differential": runDE,
  "euler": runDE

};
