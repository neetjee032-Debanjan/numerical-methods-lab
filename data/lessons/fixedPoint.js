export const fixedPointLesson = {
  id: "l10",
  title: "Fixed Point Iteration Method",

  simulation: "fixedpoint",

  pages: [

    {
      title: "1. Introduction",
      content: `
The Fixed Point Iteration Method is a numerical technique used to solve nonlinear equations.

Instead of directly solving:

f(x)=0

the equation is rewritten into the form:

x = g(x)

A solution that satisfies this equation is called a fixed point.

The method repeatedly applies g(x) until convergence occurs.
`
    },

    {
      title: "2. What Is a Fixed Point?",
      content: `
A fixed point is a value that remains unchanged after applying a function.

If:

g(p)=p

then p is called a fixed point.

Example:

g(x)=cos(x)

The solution of:

x=cos(x)

is a fixed point.

Fixed point methods search for such values iteratively.
`
    },

    {
      title: "3. Converting Equations",
      content: `
Many equations can be rewritten into fixed-point form.

Example:

x²−x−2=0

can be rewritten as:

x=(x²−2)

or

x=√(x+2)

Different forms may lead to different convergence behavior.

Choosing a good g(x) is important.
`
    },

    {
      title: "4. Iteration Formula",
      content: `
The Fixed Point Iteration formula is:

xn+1 = g(xn)

Starting from an initial guess:

x0

we repeatedly compute:

x1=g(x0)

x2=g(x1)

x3=g(x2)

and so on.
`
    },

    {
      title: "5. Graphical Interpretation",
      content: `
Graphically we plot:

y=g(x)

and

y=x

The intersection point represents the fixed point.

Iteration moves between the curve y=g(x) and the line y=x.

This graphical interpretation helps explain convergence behavior.
`
    },

    {
      title: "6. Algorithm",
      content: `
Step 1:
Choose initial guess x0

Step 2:
Compute:

x1=g(x0)

Step 3:
Compute:

x2=g(x1)

Step 4:
Continue iteration

Step 5:
Stop when:

|xn+1−xn|

becomes sufficiently small.
`
    },

    {
      title: "7. Worked Example",
      content: `
Solve:

x=cos(x)

Choose:

x0=0.5

Iterations:

x1=0.87758

x2=0.63901

x3=0.80269

x4=0.69478

The sequence gradually approaches the fixed point.
`
    },

    {
      title: "8. Convergence",
      content: `
Convergence means successive approximations approach a single value.

The sequence:

x0,x1,x2,...

must approach a fixed point.

Not all iteration functions converge.

The choice of g(x) determines success.
`
    },

    {
      title: "9. Convergence Criterion",
      content: `
A common convergence condition is:

|g'(x)| < 1

near the fixed point.

If this condition holds, convergence is likely.

If:

|g'(x)| > 1

divergence often occurs.
`
    },

    {
      title: "10. Divergence",
      content: `
Some iteration functions fail.

Example:

g(x)=2x

Starting with:

x0=1

Iterations become:

1
2
4
8
16

The sequence diverges rapidly.

Therefore convergence analysis is important.
`
    },

    {
      title: "11. Advantages",
      content: `
Advantages:

• Simple implementation
• Minimal computation
• Easy conceptual understanding
• Useful theoretical foundation

It serves as the basis for many advanced iterative methods.
`
    },

    {
      title: "12. Limitations",
      content: `
Limitations:

• Convergence not guaranteed
• Sensitive to choice of g(x)
• Can converge slowly
• May diverge completely

Careful formulation is required.
`
    },

    {
      title: "13. Applications",
      content: `
Applications include:

• Engineering analysis
• Fluid mechanics
• Heat transfer
• Optimization
• Numerical solution of nonlinear equations

Many advanced algorithms are based on fixed-point concepts.
`
    },

    {
      title: "14. Practice Problems",
      content: `
1. Solve:

x=cos(x)

2. Solve:

x=e^(-x)

3. Solve:

x=(x²+2)/3

Perform at least five iterations.

Observe convergence behavior.
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. What is a fixed point?

Q2. State the iteration formula.

Q3. Why must equations be rewritten?

Q4. What condition often guarantees convergence?

Q5. What happens if |g'(x)| > 1?

Q6. Why is the choice of g(x) important?

Q7. Define divergence.

Q8. Name one application of fixed-point iteration.
`
    }

  ]
};
