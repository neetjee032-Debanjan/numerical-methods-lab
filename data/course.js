export const course = {
  title: "Numerical Methods",

  modules: [
    {
      id: "m1",
      title: "Numbers, Precision & Errors",
      lessons: [
        {
          id: "l1",
          title: "Floating Point Representation",
          content: `
Floating point numbers represent real numbers in computers using scientific notation.

Key Idea:
- Sign
- Exponent
- Mantissa

This leads to rounding errors in computation.
          `
        },
        {
          id: "l2",
          title: "Error Analysis",
          content: `
Errors are classified into:
- Absolute Error
- Relative Error
- Truncation Error
- Round-off Error
          `
        }
      ]
    },

    {
      id: "m2",
      title: "Root Finding Methods",
      lessons: [
        {
          id: "l3",
          title: "Newton-Raphson Method",
          content: "Iterative method for finding roots of equations.",
          simulation: "newton"
        },
        {
          id: "l4",
          title: "Bisection Method",
          content: "Divide interval and converge to root."
        }
      ]
    }
  ]
};
