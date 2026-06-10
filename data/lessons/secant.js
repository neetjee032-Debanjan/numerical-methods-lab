export const secantLesson = {
  id: "l8",
  title: "Secant Method",

  simulation: "",

  pages: [
    {
      title: "1. Motivation",
      content: `
The Newton-Raphson method requires derivatives.

In many real-world problems derivatives may be difficult or expensive to compute.

The Secant Method avoids explicit derivative calculations.

Instead it approximates the derivative using two nearby points.
`
    },

    {
      title: "2. Mathematical Idea",
      content: `
Instead of using the tangent line, we use a secant line.

Given two guesses:

x₀ and x₁

The next approximation is computed from the intersection of the secant line with the x-axis.

The method generally converges faster than Bisection.
`
    },

    {
      title: "3. Advantages and Limitations",
      content: `
Advantages:

• No derivative required
• Faster than Bisection

Limitations:

• Not always guaranteed to converge
• Sensitive to starting values
`
    }
  ]
};
