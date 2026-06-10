import { runNewton } from "./newton-raphson.js";
import { runBisection } from "./bisection.js";
import { runSecant } from "./secant.js";
import { runFalsePosition } from "./falsePosition.js";

import { runIntegration } from "./integration.js";

import { runLagrange } from "./lagrange.js";

import { runDE } from "./differential.js";

export const Simulations = {

  /* ROOT FINDING */

  "newton": runNewton,
  "newton-raphson": runNewton,

  "bisection": runBisection,

  "secant": runSecant,

  "falseposition": runFalsePosition,
  "false-position": runFalsePosition,
  "regulafalsi": runFalsePosition,

  /* INTEGRATION */

  "integration": runIntegration,
  "trapezoid": runIntegration,
  "trapezoidal": runIntegration,

  /* INTERPOLATION */

  "lagrange": runLagrange,

  /* DIFFERENTIAL EQUATIONS */

  "differential": runDE,
  "euler": runDE

};
