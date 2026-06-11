export const simpson13Lesson = {
  id: "l9",
  title: "Simpson's 1/3 Rule",

  simulation: "simpson13",

  pages: [

    {
      title: "1. Introduction",
      content: `
Numerical integration is used when an integral cannot be evaluated exactly.

The Trapezoidal Rule approximates an area using straight lines.

Simpson's 1/3 Rule improves accuracy by approximating the curve with a parabola.

Because parabolas fit curved functions better than straight lines, Simpson's Rule is usually much more accurate.
`
    },

    {
      title: "2. Why Numerical Integration?",
      content: `
Many integrals cannot be solved analytically.

Examples:

∫ e^(-x²) dx

∫ sin(x²) dx

In such cases numerical methods estimate the integral value.

Numerical integration is widely used in science and engineering.
`
    },

    {
      title: "3. Basic Idea",
      content: `
Instead of joining points with a straight line, Simpson's Rule fits a quadratic curve through three points.

These points are:

x₀
x₁
x₂

The resulting parabola provides a better approximation of the function.
`
    },

    {
      title: "4. Geometric Interpretation",
      content: `
The area under the curve is replaced by the area under a parabola.

Because many smooth curves resemble parabolic segments over small intervals, the approximation becomes highly accurate.
`
    },

    {
      title: "5. Formula",
      content: `
For one interval:

Integral ≈

(h/3)

×

[f(x₀) + 4f(x₁) + f(x₂)]

where:

h = (b-a)/2

This is the classical Simpson's 1/3 Rule formula.
`
    },

    {
      title: "6. Meaning of Coefficients",
      content: `
Notice the weights:

1
4
1

The midpoint receives four times the importance of the endpoints.

This weighting comes directly from integrating the interpolating parabola.
`
    },

    {
      title: "7. Worked Example",
      content: `
Evaluate:

∫₀² x² dx

Exact answer:

8/3

≈ 2.6667

Using Simpson's Rule:

h = 1

Integral ≈

(1/3)

[0 + 4(1) + 4]

= 8/3

Exact result obtained.
`
    },

    {
      title: "8. Composite Simpson Rule",
      content: `
For larger intervals the region is divided into many subintervals.

Simpson's Rule is then applied repeatedly.

This is called Composite Simpson's Rule.

Accuracy increases significantly.
`
    },

    {
      title: "9. General Composite Formula",
      content: `
Composite Simpson:

(h/3)

[f(x₀)

+ 4(f odd terms)

+ 2(f even terms)

+ f(xn)]

This formula is widely used in numerical software.
`
    },

    {
      title: "10. Error Formula",
      content: `
The error is:

Error ∝ h⁴

This means accuracy improves rapidly as interval size decreases.

Simpson's Rule is much more accurate than the Trapezoidal Rule.
`
    },

    {
      title: "11. Comparison with Trapezoidal Rule",
      content: `
Trapezoidal:

Linear approximation

Error ∝ h²

Simpson:

Quadratic approximation

Error ∝ h⁴

Thus Simpson usually achieves higher accuracy with fewer intervals.
`
    },

    {
      title: "12. Applications",
      content: `
Applications include:

• Engineering simulations
• Fluid dynamics
• Thermodynamics
• Signal processing
• Scientific computing
`
    },

    {
      title: "13. Advantages",
      content: `
Advantages:

• High accuracy
• Easy implementation
• Fast convergence
• Widely used

It is one of the most important integration techniques.
`
    },

    {
      title: "14. Practice Problems",
      content: `
1. Evaluate ∫₀² x³ dx

2. Evaluate ∫₀¹ e^x dx

3. Compare Simpson and Trapezoidal results.

4. Investigate error reduction.
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. Why is Simpson more accurate than Trapezoidal?

Q2. What type of curve does Simpson fit?

Q3. State the Simpson formula.

Q4. What is Composite Simpson Rule?

Q5. How does error depend on h?
`
    }

  ]
};
