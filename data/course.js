import { floatingPointLesson } from "./lessons/floatingPoint.js";
import { numericalErrorsLesson } from "./lessons/numericalErrors.js";

import { binaryNumberSystemLesson } from "./lessons/binaryNumberSystem.js";
import { decimalToBinaryLesson } from "./lessons/decimalToBinary.js";
import { binaryArithmeticLesson } from "./lessons/binaryArithmetic.js";
import { fixedPointRepresentationLesson } from "./lessons/fixedPointRepresentation.js";
import { ieee754Lesson } from "./lessons/ieee754.js";
import { machineEpsilonLesson } from "./lessons/machineEpsilon.js";

import { bisectionLesson } from "./lessons/bisection.js";
import { newtonLesson } from "./lessons/newton.js";
import { secantLesson } from "./lessons/secant.js";
import { falsePositionLesson } from "./lessons/falsePosition.js";
import { fixedPointLesson } from "./lessons/fixedPoint.js";

import { lagrangeLesson } from "./lessons/lagrange.js";
import { newtonForwardInterpolationLesson } from "./lessons/newtonForwardInterpolation.js";
import { newtonBackwardInterpolationLesson } from "./lessons/newtonBackwardInterpolation.js";
import { newtonDividedDifferenceLesson } from "./lessons/newtonDividedDifference.js";
import { cubicSplineLesson } from "./lessons/cubicSpline.js";

import { forwardDifferenceLesson } from "./lessons/forwardDifference.js";
import { backwardDifferenceLesson } from "./lessons/backwardDifference.js";
import { centralDifferenceLesson } from "./lessons/centralDifference.js";

import { trapezoidalLesson } from "./lessons/trapezoidal.js";
import { simpson13Lesson } from "./lessons/simpson13.js";
import { simpson38Lesson } from "./lessons/simpson38.js";

import { eulerLesson } from "./lessons/euler.js";
import { modifiedEulerLesson } from "./lessons/modifiedEuler.js";
import { rungeKutta2Lesson } from "./lessons/rungeKutta2.js";
import { rungeKutta4Lesson } from "./lessons/rungeKutta4.js";

import { gaussEliminationLesson } from "./lessons/gaussElimination.js";
import { gaussJordanLesson } from "./lessons/gaussJordan.js";
import { luDecompositionLesson } from "./lessons/luDecomposition.js";
import { jacobiIterationLesson } from "./lessons/jacobiIteration.js";
import { gaussSeidelLesson } from "./lessons/gaussSeidel.js";

import { introductionToRegressionLesson } from "./lessons/introductionToRegression.js";
import { leastSquaresLineLesson } from "./lessons/leastSquaresLine.js";
import { polynomialRegressionLesson } from "./lessons/polynomialRegression.js";
import { correlationLesson } from "./lessons/correlation.js";
import { linearCorrelationCoefficientLesson } from "./lessons/linearCorrelationCoefficient.js";
import { coefficientOfDeterminationLesson } from "./lessons/coefficientOfDetermination.js";
import { residualAnalysisLesson } from "./lessons/residualAnalysis.js";

export const course = {
title: "Numerical Methods",

modules: [

```
{
  id: "m1",
  title: "Numbers, Precision & Errors",

  lessons: [
    floatingPointLesson,
    numericalErrorsLesson,
    binaryNumberSystemLesson,
    decimalToBinaryLesson,
    binaryArithmeticLesson,
    fixedPointRepresentationLesson,
    ieee754Lesson,
    machineEpsilonLesson
  ]
},

{
  id: "m2",
  title: "Root Finding Methods",

  lessons: [
    bisectionLesson,
    newtonLesson,
    secantLesson,
    falsePositionLesson,
    fixedPointLesson
  ]
},

{
  id: "m3",
  title: "Interpolation",

  lessons: [
    lagrangeLesson,
    newtonForwardInterpolationLesson,
    newtonBackwardInterpolationLesson,
    newtonDividedDifferenceLesson,
    cubicSplineLesson
  ]
},

{
  id: "m4",
  title: "Numerical Differentiation",

  lessons: [
    forwardDifferenceLesson,
    backwardDifferenceLesson,
    centralDifferenceLesson
  ]
},

{
  id: "m5",
  title: "Numerical Integration",

  lessons: [
    trapezoidalLesson,
    simpson13Lesson,
    simpson38Lesson
  ]
},

{
  id: "m6",
  title: "Differential Equations",

  lessons: [
    eulerLesson,
    modifiedEulerLesson,
    rungeKutta2Lesson,
    rungeKutta4Lesson
  ]
},

{
  id: "m7",
  title: "Linear Algebraic Equations",

  lessons: [
    gaussEliminationLesson,
    gaussJordanLesson,
    luDecompositionLesson,
    jacobiIterationLesson,
    gaussSeidelLesson
  ]
},

{
  id: "m8",
  title: "Regression & Curve Fitting",

  lessons: [
    introductionToRegressionLesson,
    leastSquaresLineLesson,
    polynomialRegressionLesson,
    correlationLesson,
    linearCorrelationCoefficientLesson,
    coefficientOfDeterminationLesson,
    residualAnalysisLesson
  ]
}
```

]
};
