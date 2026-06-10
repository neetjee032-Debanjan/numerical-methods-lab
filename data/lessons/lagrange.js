export const numericalErrorsLesson = {
  id: "l2",
  title: "Types of Numerical Errors",

  pages: [

    {
      title: "1. Introduction to Numerical Errors",
      content: `
Numerical methods deal with approximations rather than exact answers.

Whenever a computer performs a calculation, some amount of error is introduced.

The difference between the true mathematical value and the computed value is called numerical error.

Errors are unavoidable because:

• Computers use finite memory
• Many numbers cannot be represented exactly
• Infinite processes must be truncated

Understanding error is one of the most important objectives of numerical analysis.
`
    },

    {
      title: "2. Why Errors Occur",
      content: `
Errors arise from limitations in computation.

Major sources include:

• Floating point representation
• Measurement uncertainty
• Approximation techniques
• Iterative procedures

Even a perfectly written program cannot completely eliminate numerical errors.

The goal is not to remove error but to control it.
`
    },

    {
      title: "3. True Value vs Approximate Value",
      content: `
Suppose:

True Value = 3.14159265

Approximate Value = 3.14

The difference between them represents error.

Numerical analysis often compares approximate results against exact solutions whenever possible.

This comparison helps evaluate algorithm quality.
`
    },

    {
      title: "4. Absolute Error",
      content: `
Absolute Error is defined as:

Absolute Error = |True Value − Approximate Value|

Example:

True Value = 10

Approximate Value = 9.8

Absolute Error = 0.2

Absolute error indicates the magnitude of deviation regardless of sign.
`
    },

    {
      title: "5. Relative Error",
      content: `
Relative Error measures error relative to the true value.

Formula:

Relative Error =
Absolute Error / True Value

Example:

True Value = 100

Approximate Value = 98

Absolute Error = 2

Relative Error = 0.02

or 2%

Relative error often provides more meaningful information than absolute error.
`
    },

    {
      title: "6. Percentage Error",
      content: `
Percentage Error is:

Relative Error × 100

Example:

Relative Error = 0.015

Percentage Error = 1.5%

Engineers frequently report accuracy using percentage error.
`
    },

    {
      title: "7. Truncation Error",
      content: `
Truncation error occurs when an infinite process is stopped after a finite number of steps.

Example:

e^x Taylor series:

1 + x + x²/2! + x³/3! + ...

Using only first three terms introduces truncation error.

Most numerical methods contain truncation error because infinite mathematics must be approximated computationally.
`
    },

    {
      title: "8. Rounding Error",
      content: `
Rounding error occurs because computers store limited digits.

Example:

0.1 cannot be represented exactly in binary.

Therefore:

0.1 + 0.2

may not equal exactly 0.3.

Repeated arithmetic operations can amplify rounding effects.
`
    },

    {
      title: "9. Error Propagation",
      content: `
Errors rarely remain isolated.

Results from one computation often become inputs to another.

Consequently errors propagate throughout a calculation.

Small inaccuracies may grow significantly after thousands of iterations.

This phenomenon is known as error propagation.
`
    },

    {
      title: "10. Accumulation of Errors",
      content: `
Consider repeatedly adding a tiny error.

A single error may be insignificant.

After millions of operations:

Total Error =
Number of Operations × Individual Error

Large simulations must therefore carefully manage accumulated numerical error.
`
    },

    {
      title: "11. Catastrophic Cancellation",
      content: `
When two nearly equal numbers are subtracted, significant digits may disappear.

Example:

12345.67891
−12345.67890

Result:

0.00001

Most precision is lost.

This phenomenon is called catastrophic cancellation.

Numerical algorithms are often redesigned specifically to avoid it.
`
    },

    {
      title: "12. Stable and Unstable Algorithms",
      content: `
A stable algorithm controls error growth.

An unstable algorithm amplifies errors.

Numerical analysts prefer stable methods because their results remain reliable even when small inaccuracies exist.

Algorithm stability is a major evaluation criterion.
`
    },

    {
      title: "13. Real Engineering Examples",
      content: `
Numerical errors appear in:

• Weather forecasting
• Spacecraft navigation
• Structural analysis
• Financial modelling
• Artificial Intelligence

Even tiny errors can become significant in large-scale systems.
`
    },

    {
      title: "14. Practice Problems",
      content: `
1. Compute absolute error:

True Value = 50
Approximate Value = 48

2. Compute relative error.

3. Compute percentage error.

4. Identify truncation error in Taylor expansion.

5. Explain catastrophic cancellation.
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. Define numerical error.

Q2. Define absolute error.

Q3. Define relative error.

Q4. Define percentage error.

Q5. What causes truncation error?

Q6. What causes rounding error?

Q7. What is catastrophic cancellation?

Q8. What is algorithm stability?
`
    }

  ]
};
