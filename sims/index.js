import { runNewton } from "./newton-raphson.js";
import { runBisection } from "./bisection.js";
import { runDecimalToBinary } from "./decimalToBinary.js";
import { runBinaryArithmetic } from "./binaryArithmetic.js";
import { runIEEE754 } from "./ieee754.js";
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
import { runGaussSeidel } from "./gaussSeidel.js";

import { runRK2 } from "./rk2.js";
import { runRK4 } from "./rk4.js";

import { runCorrelation } from "./correlation.js";
import { runMultipleRegression } from "./multipleRegression.js";

import { runFourierSeries } from "./fourierSeries.js";
import { runFFT } from "./fft.js";
import { runAliasing } from "./aliasing.js";
import { runSpectralLeakage } from "./spectralLeakage.js";

import { runBinaryNumberSystem } from "./binaryNumberSystem.js";

export const Simulations = {

  /* Root Finding */

  "newton": runNewton,
  "newton-raphson": runNewton,

  "bisection": runBisection,

  "binaryarithmetic": runBinaryArithmetic,
"binary-arithmetic": runBinaryArithmetic,

  "decimaltobinary": runDecimalToBinary,
"decimal-to-binary": runDecimalToBinary,

  "ieee754": runIEEE754,
"floatingpoint": runIEEE754,
"floating-point": runIEEE754,

  "falseposition": runFalsePosition,
  "false-position": runFalsePosition,
  "regulafalsi": runFalsePosition,

  "secant": runSecant,

  "fixedpoint": runFixedPoint,
  "fixed-point": runFixedPoint,

  /* Binary Number System */

  "binary": runBinaryNumberSystem,
  "binary-number-system": runBinaryNumberSystem,
  "binarynumbersystem": runBinaryNumberSystem,

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
  "jacobi-iteration": runJacobi,

  "gaussseidel": runGaussSeidel,
  "gauss-seidel": runGaussSeidel,

  /* Regression */

  "correlation": runCorrelation,

  "multiple-regression": runMultipleRegression,
  "multipleregression": runMultipleRegression,

  /* Fourier */

  "fourierseries": runFourierSeries,
  "fourier-series": runFourierSeries,

  "fft": runFFT,
  "fast-fourier-transform": runFFT,

  "aliasing": runAliasing,
  "sampling-aliasing": runAliasing,
  "samplingtheoremaliasing": runAliasing,

  "spectralleakage": runSpectralLeakage,
  "spectral-leakage": runSpectralLeakage,
  "window-functions": runSpectralLeakage

};
