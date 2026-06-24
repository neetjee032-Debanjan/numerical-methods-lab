export const backwardDifferenceLesson = {
  id: "l13",

  title: "Backward Difference Method",

  simulation: "backwarddifference",

  pages: [

    {
      title: "1. Introduction",
      content: `
Backward Difference is another finite difference method used to approximate derivatives.

Unlike Forward Difference, which uses a future point, Backward Difference uses information from a previous point.

It is especially useful when future data is unavailable.

Many engineering systems use Backward Difference for real-time calculations.
`
    },

    {
      title: "2. Motivation",
      content: `
Suppose measurements are collected sequentially.

At a given instant, future values may not yet be known.

In such situations Forward Difference cannot be applied.

Backward Difference solves this problem by using already available data.
`
    },

    {
      title: "3. Derivative Definition",
      content: `
Recall the derivative definition:

f'(x)=lim(h→0)
[f(x+h)-f(x)]/h

By rewriting the expression using previous points, we obtain the Backward Difference approximation.
`
    },

    {
      title: "4. Backward Difference Formula",
      content: `
The formula is:

f'(x) ≈
[f(x)-f(x-h)]/h

This approximation uses the current point and the previous point.

It is one of the simplest numerical differentiation formulas.
`
    },

    {
      title: "5. Geometric Interpretation",
      content: `
Imagine two nearby points on a curve.

One point is located behind the current position.

The slope of the secant line joining them approximates the derivative.

As h decreases, the approximation becomes increasingly accurate.
`
    },

    {
      title: "6. Algorithm",
      content: `
Step 1:
Choose x

Step 2:
Choose h

Step 3:
Evaluate f(x)

Step 4:
Evaluate f(x-h)

Step 5:
Apply the formula

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

f(1.9)=3.61

Derivative:

(4-3.61)/0.1

=3.9

Exact derivative:

4

Approximation is close.
`
    },

    {
      title: "8. Worked Example II",
      content: `
Find the derivative of:

f(x)=e^x

at x=1

Using:

h=0.01

Backward Difference provides an approximation very close to the exact derivative e.
`
    },

    {
      title: "9. Truncation Error",
      content: `
Backward Difference contains truncation error.

The error depends on the step size h.

Reducing h generally improves accuracy.

However numerical round-off errors eventually become important.
`
    },

    {
      title: "10. Order of Accuracy",
      content: `
Backward Difference is a first-order method.

Error:

O(h)

Its theoretical accuracy is identical to Forward Difference.
`
    },

    {
      title: "11. Advantages",
      content: `
Advantages:

• Simple implementation
• Requires only past data
• Fast computation
• Useful for real-time applications
`
    },

    {
      title: "12. Limitations",
      content: `
Limitations:

• Less accurate than Central Difference
• Sensitive to measurement noise
• First-order accuracy only
`
    },

    {
      title: "13. Engineering Applications",
      content: `
Applications include:

• Process control
• Embedded systems
• Data acquisition systems
• Signal processing
• Industrial automation
`
    },

    {
      title: "14. Practice Problems",
      content: `
1. Differentiate x³ at x=2

2. Differentiate e^x at x=1

3. Differentiate sin(x) at x=1

4. Differentiate ln(x) at x=2

Use h=0.1.
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. State the Backward Difference Formula.

Q2. Why is it useful in real-time systems?

Q3. What is its order of accuracy?

Q4. Compare it with Forward Difference.

Q5. Compute the derivative of x² at x=3 using h=0.1.
`
    }

  ]
};
