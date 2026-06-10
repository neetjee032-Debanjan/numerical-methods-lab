export const falsePositionLesson = {
  id: "l9",
  title: "False Position Method",

  simulation: "falseposition",

  pages: [
    {
      title: "1. Introduction",
      content: `
False Position combines ideas from Bisection and Secant methods.

It uses function values to estimate the root more intelligently.
`
    },

    {
      title: "2. Method",
      content: `
Two points enclosing a root are selected.

A straight line is drawn between them.

The x-intercept becomes the next approximation.
`
    },

    {
      title: "3. Characteristics",
      content: `
Generally faster than Bisection.

Maintains guaranteed bracketing of the root.

Widely used in engineering calculations.
`
    }
  ]
};
