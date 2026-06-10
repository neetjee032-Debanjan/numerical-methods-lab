export const eulerLesson = {
  id: "l7",
  title: "Euler Method",
  simulation: "differential",

  pages: [

    {
      title: "1. Introduction to Differential Equations",
      content: `
Differential equations describe relationships involving rates of change.

Many natural phenomena are governed by differential equations.

Examples include:

• Population growth
• Radioactive decay
• Motion of planets
• Heat transfer
• Electrical circuits

In most real-world situations, exact analytical solutions are difficult or impossible to obtain.

This motivates numerical methods for differential equations.
`
    },

    {
      title: "2. Initial Value Problems",
      content: `
A differential equation alone is not enough.

We usually know an initial condition.

Example:

dy/dx = y

y(0)=1

This is called an Initial Value Problem (IVP).

The objective is to determine future values of y starting from the known initial condition.
`
    },

    {
      title: "3. Geometric Interpretation",
      content: `
The derivative represents slope.

At every point on a curve, the differential equation tells us the slope of the solution.

Euler's method uses these slopes to predict future points.

The method essentially walks along the curve using local slope information.
`
    },

    {
      title: "4. Basic Idea Behind Euler Method",
      content: `
Suppose we know:

(xn, yn)

and the slope:

dy/dx = f(xn, yn)

We move a small distance h in the x-direction.

Using the current slope, we estimate the next y-value.

This creates a sequence of approximations.
`
    },

    {
      title: "5. Derivation of Euler Formula",
      content: `
Using the tangent line approximation:

y(x+h) ≈ y(x) + h·y'(x)

Since:

y'(x)=f(x,y)

we obtain:

y(n+1)=y(n)+h f(xn,yn)

This is Euler's fundamental update equation.
`
    },

    {
      title: "6. Meaning of Step Size",
      content: `
The parameter h is called the step size.

Small h:

• Higher accuracy
• More computations

Large h:

• Faster computation
• Lower accuracy

Choosing h is one of the most important decisions in numerical simulation.
`
    },

    {
      title: "7. Algorithm",
      content: `
Step 1:
Input x0,y0,h

Step 2:
Compute slope

Step 3:
Apply Euler formula

Step 4:
Update x

Step 5:
Repeat until target point is reached

This simple procedure forms the basis of many advanced methods.
`
    },

    {
      title: "8. Worked Example",
      content: `
Solve:

dy/dx = y

y(0)=1

h=0.1

Iteration 1:

y1 = 1 + 0.1(1)

=1.1

Iteration 2:

y2 = 1.1 + 0.1(1.1)

=1.21

The process continues to approximate the exponential function.
`
    },

    {
      title: "9. Exact Solution Comparison",
      content: `
For:

dy/dx=y

Exact solution:

y=e^x

Comparing Euler results with the exact solution reveals approximation error.

This comparison helps evaluate method quality.
`
    },

    {
      title: "10. Local Truncation Error",
      content: `
Euler's method replaces a curved solution by a straight tangent segment.

This introduces truncation error at every step.

The error for one step is called local truncation error.
`
    },

    {
      title: "11. Global Error",
      content: `
Errors accumulate over many iterations.

The total accumulated error is called global error.

Even small local errors can eventually become significant.
`
    },

    {
      title: "12. Stability Considerations",
      content: `
Some differential equations are highly sensitive.

In such cases:

Large h may cause divergence.

Small h improves stability.

Understanding stability is crucial in engineering simulations.
`
    },

    {
      title: "13. Real Engineering Applications",
      content: `
Euler's method is used in:

• Physics simulations
• Population models
• Chemical kinetics
• Electrical engineering
• Numerical weather prediction

Although simple, it remains historically important.
`
    },

    {
      title: "14. Advantages and Limitations",
      content: `
Advantages:

• Simple
• Easy implementation
• Educational value

Limitations:

• Low accuracy
• Error accumulation
• Stability issues

These limitations motivate more advanced methods such as RK4.
`
    },

    {
      title: "15. Practice + Quiz",
      content: `
Practice:

1. Solve dy/dx=x+y
2. Use h=0.2
3. Compute first three iterations

Quiz:

Q1. What is Euler's formula?

Q2. What is step size?

Q3. What is local truncation error?

Q4. What is global error?

Q5. Why is Euler method important?
`
    }

  ]
};
