import { floatingPointLesson } from "./lessons/floatingPoint.js";
import { numericalErrorsLesson } from "./lessons/numericalErrors.js";

import { bisectionLesson } from "./lessons/bisection.js";
import { newtonLesson } from "./lessons/newton.js";
import { secantLesson } from "./lessons/secant.js";
import { falsePositionLesson } from "./lessons/falsePosition.js";
import { fixedPointLesson } from "./lessons/fixedPoint.js";

import { lagrangeLesson } from "./lessons/lagrange.js";
import { newtonForwardInterpolationLesson } from "./lessons/newtonForwardInterpolation.js";
import { newtonBackwardInterpolationLesson } from "./lessons/newtonBackwardInterpolation.js";

import { forwardDifferenceLesson } from "./lessons/forwardDifference.js";
import { backwardDifferenceLesson } from "./lessons/backwardDifference.js";
import { centralDifferenceLesson } from "./lessons/centralDifference.js";

import { trapezoidalLesson } from "./lessons/trapezoidal.js";
import { simpson13Lesson } from "./lessons/simpson13.js";

import { eulerLesson } from "./lessons/euler.js";

import { gaussEliminationLesson } from "./lessons/gaussElimination.js";

export const course = {
  title: "Numerical Methods",

  modules: [

    {
      id: "m1",
      title: "Numbers, Precision & Errors",
      lessons: [
        floatingPointLesson,
        numericalErrorsLesson
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
        newtonBackwardInterpolationLesson
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
        simpson13Lesson
      ]
    },

    {
      id: "m6",
      title: "Differential Equations",
      lessons: [
        eulerLesson
      ]
    },

    {
      id: "m7",
      title: "Linear Algebraic Equations",
      lessons: [
        gaussEliminationLesson
      ]
    }

  ]
};
