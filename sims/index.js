import { runNewton } from "./newton-raphson.js";
import { runBisection } from "./bisection.js";
import { runIntegration } from "./integration.js";
import { runLagrange } from "./lagrange.js";
import { runDE } from "./differential.js";
import { runFalsePosition } from "./falsePosition.js";

export const Simulations = {

  "newton": runNewton,
  "newton-raphson": runNewton,

  "bisection": runBisection,

  "falseposition": runFalsePosition,
  "false-position": runFalsePosition,
  "regulafalsi": runFalsePosition,

  "integration": runIntegration,
  "trapezoid": runIntegration,

 
