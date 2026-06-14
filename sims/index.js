import { runNewton } from "./newton-raphson.js";
import { runBisection } from "./bisection.js";
import { runIntegration } from "./integration.js";
import { runLagrange } from "./lagrange.js";
import { runDE } from "./differential.js";

import { runFalsePosition } from "./falsePosition.js";
import { runSecant } from "./secant.js";
import { runSimpson13 } from "./simpson13.js";
import { runFixedPoint } from "./fixedPoint.js";

import { runGauss } from "./gauss.js";
import { runGaussJordan } from "./gaussJordan.js";
import { runLU } from "./luDecomposition.js";
import { runJacobi } from "./jacobi.js";

import { runRK2 } from "./rk2.js";
import { runRK4 } from "./rk4.js";

export const Simulations = {

  /* Root Finding */

  "newton": runNewton,
  "newton-raphson": runNewton,

  "bisection": runBisection,

  "falseposition": runFalsePosition,
  "false-position": runFalsePosition,
  "regulafalsi": runFalsePosition,

  "secant": runSecant,

  "fixedpoint": runFixedPoint,
  "fixed-point": runFixedPoint,

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
  "euler": runDE,

  "rk2": runRK2,
  "rungekutta2": runRK2,
  "runge-kutta-2": runRK2,

  "rk4": runRK4,
  "rungekutta4": runRK4,
  "runge-kutta-4": runRK4,

  /* Linear Algebra */

  "gauss": runGauss,
  "gauss-elimination": runGauss,

  "gaussjordan": runGaussJordan,
  "gauss-jordan": runGaussJordan,
  "gauss-jordan-elimination": runGaussJordan,

  "lu": runLU,
  "ludecomposition": runLU,
  "lu-decomposition": runLU,

  "jacobi": runJacobi,
  "jacobi-iteration": runJacobi

};
