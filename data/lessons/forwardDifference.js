export const forwardDifferenceLesson = {
  id: "l12",

  title: "Forward Difference Method",

  simulation: "forward-difference",

  pages: [

    {
      title: "1. Introduction",
      content: `
Numerical differentiation is used when the derivative of a function cannot be obtained analytically.

In engineering and scientific computing, data is often available only at discrete points.

Forward Difference is the simplest numerical method for approximating derivatives.

It estimates the slope using information ahead of the current point.

This method forms the foundation of numerical differentiation.
`
    },

    {
      title: "2. Why Numerical Differentiation?",
      content: `
Many real-world systems produce measured data instead of explicit equations.

Examples:

• Experimental measurements
• Sensor readings
• Weather data
• Financial data

When only discrete values are available, derivatives must be approximated numerically.
`
    },

    {
      title: "3. Review of Derivatives",
      content: `
The derivative of a function represents its rate of change.

Mathematically:

f'(x) = lim(h→0)
[f(x+h)-f(x)]/h

This definition is the starting point for all finite difference methods.
`
    },

    {
      title: "4. Forward Difference Formula",
      content: `
Replacing the limit with a small finite step h gives:

f'(x) ≈
[f(x+h)-f(x)] / h

This is known as the Forward Difference Formula.

It uses the current point and the next point.
`
    },

    {
      title: "5. Geometric Interpretation",
      content: `
Imagine two nearby points on a curve.

A straight line joins them.

The slope of this line approximates the derivative.

As h becomes smaller, the approximation becomes more accurate.
`
    },

    {
      title: "6. Algorithm",
      content: `
Step 1:
Choose x

Step 2:
Choose step size h

Step 3:
Evaluate f(x)

Step 4:
Evaluate f(x+h)

Step 5:
Apply Forward Difference Formula

Step 6:
Interpret the result
`
    },

    {
      title: "7. Worked Example I",
      content: `
Find the derivative of:

f(x)=x²

at x=2

Choose:

h=0.1

f(2)=4

f(2.1)=4.41

Derivative:

(4.41-4)/0.1

=4.1

Exact derivative:

2x=4

Approximation is close.
`
    },

    {
      title: "8. Worked Example II",
      content: `
f(x)=sin(x)

x=0

h=0.01

Derivative:

[sin(0.01)-sin(0)]/0.01

≈0.99998

Exact derivative:

cos(0)=1

Very accurate result.
`
    },

    {
      title: "9. Error Analysis",
      content: `
Forward Difference contains truncation error.

The error is proportional to h.

Reducing h generally improves accuracy.

However extremely small h can introduce floating-point errors.
`
    },

    {
      title: "10. Order of Accuracy",
      content: `
Forward Difference is a first-order method.

Error:

O(h)

If h is reduced by a factor of 10, the error approximately decreases by a factor of 10.
`
    },

    {
      title: "11. Advantages",
      content: `
Advantages:

• Simple implementation
• Fast computation
• Requires only two function evaluations
• Useful for real-time systems
`
    },

    {
      title: "12. Limitations",
      content: `
Limitations:

• Less accurate than Central Difference
• Sensitive to noise
• Truncation error remains significant
`
    },

    {
      title: "13. Engineering Applications",
      content: `
Applications include:

• Velocity estimation
• Signal processing
• Control systems
• Experimental physics
• Data analysis
`
    },

    {
      title: "14. Practice Problems",
      content: `
1. Differentiate x³ at x=2

2. Differentiate e^x at x=1

3. Differentiate ln(x) at x=2

4. Differentiate cos(x) at x=0
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. State the Forward Difference Formula.

Q2. What is the order of accuracy?

Q3. Why can't h be infinitely small?

Q4. Name one engineering application.

Q5. Compute the derivative of x² at x=3 using h=0.1.
`
    }

  ]
};

