export const newtonLesson = {
  id: "l4",
  title: "Newton-Raphson Method",
  simulation: "newton",

  pages: [

    {
      title: "1. Historical Motivation",
      content: `
Before modern computers, engineers needed efficient methods to solve nonlinear equations.

Many real-world problems involve equations that cannot be solved algebraically.

Examples include:

• Rocket trajectory calculations
• Orbital mechanics
• Chemical equilibrium
• Structural engineering

Newton-Raphson emerged as one of the most powerful iterative techniques ever developed.

Unlike interval-based methods such as Bisection, Newton-Raphson uses local slope information to rapidly approach a root.

Its speed makes it a cornerstone of scientific computing.
`
    },

    {
      title: "2. What Is Root Finding?",
      content: `
A root of a function is any value x such that:

f(x)=0

Examples:

x²−4=0

Roots:

x=2
x=-2

Many equations cannot be solved analytically.

Example:

x = cos(x)

No simple algebraic solution exists.

Numerical methods become necessary.

Root-finding methods attempt to locate these solutions computationally.
`
    },

    {
      title: "3. Graphical Interpretation",
      content: `
Imagine the graph of a function.

The root is where the curve crosses the x-axis.

Newton-Raphson starts with a guess.

A tangent line is drawn at that point.

The tangent intersects the x-axis.

That intersection becomes the next approximation.

This process repeats.

The geometric intuition is extremely important because it explains why convergence is usually fast.
`
    },

    {
      title: "4. Tangent Line Equation",
      content: `
At a point xn:

y = f(xn) + f'(xn)(x − xn)

This is the tangent line.

The next approximation is found by setting y=0.

This gives the x-axis intersection.

Newton's method is therefore fundamentally a tangent-line method.
`
    },

    {
      title: "5. Derivation of Newton Formula",
      content: `
Starting from:

0 = f(xn) + f'(xn)(x − xn)

Solve for x.

Result:

xn+1 = xn − f(xn)/f'(xn)

This famous formula forms the heart of Newton-Raphson.

Every iteration applies this update.
`
    },

    {
      title: "6. Algorithm",
      content: `
Step 1:
Choose initial guess x0

Step 2:
Compute f(x0)

Step 3:
Compute derivative f'(x0)

Step 4:
Apply Newton formula

Step 5:
Repeat until convergence

Stopping criteria usually involve:

|f(x)| < tolerance

or

|xn+1 − xn| < tolerance
`
    },

    {
      title: "7. Worked Example I",
      content: `
Solve:

x²−4=0

Initial guess:

x0=3

Iteration 1:

x1=3−(9−4)/6

x1=2.1667

Iteration 2:

x2≈2.0064

Iteration 3:

x3≈2.0000

Root obtained rapidly.
`
    },

    {
      title: "8. Worked Example II",
      content: `
Solve:

x³−x−2=0

Initial guess:

x0=1.5

Applying Newton repeatedly:

1.5
→1.5217
→1.52138

Root ≈1.52138

Only a few iterations are required.
`
    },

    {
      title: "9. Convergence Analysis",
      content: `
Newton-Raphson exhibits quadratic convergence.

This means:

If error is e

Next error is approximately:

e²

This causes error to decrease extremely rapidly.

Few numerical methods converge this quickly.
`
    },

    {
      title: "10. Why It Sometimes Fails",
      content: `
Newton is not guaranteed to converge.

Problems occur when:

• Bad initial guess
• Derivative near zero
• Multiple roots
• Oscillation

Therefore user judgment remains important.
`
    },

    {
      title: "11. Engineering Applications",
      content: `
Applications include:

• Circuit analysis
• Fluid mechanics
• Machine learning optimization
• Orbital trajectory calculations
• Structural engineering

Many industrial solvers rely on Newton-type methods internally.
`
    },

    {
      title: "12. Error Analysis",
      content: `
Errors arise from:

• Floating point rounding
• Derivative approximation
• Truncation

Studying error propagation is essential in numerical analysis.
`
    },

    {
      title: "13. Pseudocode",
      content: `
Input x0

while error > tolerance

compute f(x)

compute f'(x)

x = x − f(x)/f'(x)

end

return root
`
    },

    {
      title: "14. Practice Problems",
      content: `
1. Solve x²−7=0

2. Solve x³−5=0

3. Solve cos(x)-x=0

4. Solve e^x−3=0

Use Newton-Raphson manually.
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. Why is Newton faster than Bisection?

Q2. What role does the derivative play?

Q3. Define quadratic convergence.

Q4. When can Newton diverge?

Q5. Find the first Newton iteration for:

x²−9=0

starting at x0=4.
`
    }

  ]
};
