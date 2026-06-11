export const cubicSplineLesson = {
  id: "l23",

  title: "Cubic Spline Interpolation",

  simulation: "cubic-spline",

  pages: [

    {
      title: "1. Introduction",
      content: `
Cubic Spline Interpolation is a piecewise interpolation technique.

Instead of fitting one large polynomial through all data points, several cubic polynomials are joined together.

The resulting curve is smooth and accurate.
`
    },

    {
      title: "2. Motivation",
      content: `
High-degree interpolation polynomials can oscillate significantly.

This phenomenon is known as Runge's phenomenon.

Spline interpolation avoids these oscillations while maintaining accuracy.
`
    },

    {
      title: "3. Basic Idea",
      content: `
Between every pair of neighboring data points, a cubic polynomial is constructed.

These cubic pieces are connected smoothly.

The complete collection of cubic segments forms a spline.
`
    },

    {
      title: "4. Piecewise Functions",
      content: `
Suppose we have:

(x₀,y₀)

(x₁,y₁)

(x₂,y₂)

Different cubic functions are defined on:

[x₀,x₁]

[x₁,x₂]

and so on.
`
    },

    {
      title: "5. Cubic Polynomial Form",
      content: `
Each interval uses:

S(x)=a+bx+cx²+dx³

The coefficients are determined using continuity conditions.
`
    },

    {
      title: "6. Continuity Requirement",
      content: `
At every interior point:

The function value must match.

The first derivative must match.

The second derivative must match.

This creates a smooth curve.
`
    },

    {
      title: "7. Smoothness",
      content: `
Unlike ordinary piecewise interpolation, splines guarantee smooth transitions.

No sharp corners appear at connection points.
`
    },

    {
      title: "8. Boundary Conditions",
      content: `
Additional conditions are needed at endpoints.

Common choices:

Natural Spline

Clamped Spline

Not-a-Knot Spline
`
    },

    {
      title: "9. Natural Cubic Spline",
      content: `
The most common choice is the Natural Cubic Spline.

Endpoint second derivatives are set equal to zero.

This produces a naturally smooth curve.
`
    },

    {
      title: "10. Construction Process",
      content: `
Step 1:
Compute interval lengths.

Step 2:
Build equations for coefficients.

Step 3:
Solve tridiagonal system.

Step 4:
Construct spline segments.
`
    },

    {
      title: "11. Example",
      content: `
Given several measured data points:

Construct interval lengths.

Build spline equations.

Compute coefficients.

Plot the resulting smooth curve.
`
    },

    {
      title: "12. Advantages",
      content: `
Advantages:

• Smooth curves

• High accuracy

• Stable behavior

• No Runge oscillations
`
    },

    {
      title: "13. Limitations",
      content: `
Limitations:

• More complicated than Lagrange interpolation

• Requires solving a matrix system

• More computational effort
`
    },

    {
      title: "14. Comparison with Lagrange",
      content: `
Lagrange:

Single polynomial.

Spline:

Many connected cubic polynomials.

Spline interpolation is usually more stable for large datasets.
`
    },

    {
      title: "15. Comparison with Newton Methods",
      content: `
Newton interpolation constructs one global polynomial.

Spline interpolation constructs local cubic segments.

Local behavior improves numerical stability.
`
    },

    {
      title: "16. Applications",
      content: `
Applications include:

• CAD software

• Computer graphics

• Animation

• Data fitting

• Engineering design

• Scientific visualization
`
    },

    {
      title: "17. Practice Problems",
      content: `
1. Construct a natural cubic spline.

2. Compare spline and Lagrange interpolation.

3. Investigate endpoint conditions.

4. Plot spline segments.
`
    },

    {
      title: "18. Quiz",
      content: `
Q1. Why are splines used?

Q2. What is a natural spline?

Q3. What continuity conditions are required?

Q4. Why are splines smoother?

Q5. Give three practical applications.
`
    }

  ]
};
