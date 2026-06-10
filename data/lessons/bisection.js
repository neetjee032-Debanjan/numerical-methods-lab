export const bisectionLesson = {
  id: "l3",
  title: "Bisection Method",
  simulation: "bisection",

  pages: [

    {
      title: "1. Historical Background",
      content: `
The Bisection Method is one of the oldest numerical root-finding techniques.

Long before computers existed, mathematicians needed reliable methods to solve equations whose exact roots could not be found analytically.

The method is based on repeatedly dividing an interval into two equal halves.

Because of its simplicity and guaranteed convergence, it remains one of the most important introductory numerical methods.

Even though modern methods are faster, Bisection is often used as a benchmark for stability and reliability.
`
    },

    {
      title: "2. What Is a Root?",
      content: `
A root of a function is a value x such that:

f(x) = 0

Graphically, roots are points where the curve crosses the x-axis.

Example:

f(x)=x²−4

Roots:

x=2
x=-2

Root finding is one of the most fundamental problems in scientific computing.
`
    },

    {
      title: "3. Intermediate Value Theorem",
      content: `
The Bisection Method relies on the Intermediate Value Theorem.

If a continuous function changes sign over an interval [a,b], then at least one root exists within that interval.

Example:

f(1)=-2
f(3)=4

The sign changes from negative to positive.

Therefore a root must exist between 1 and 3.

This theorem provides the mathematical guarantee behind the method.
`
    },

    {
      title: "4. Core Idea",
      content: `
Suppose we know a root lies between a and b.

Instead of searching everywhere, we compute:

c=(a+b)/2

This midpoint divides the interval into two equal halves.

We then determine which half contains the root.

The process is repeated until the interval becomes extremely small.
`
    },

    {
      title: "5. Why It Works",
      content: `
Every iteration removes half of the search interval.

If the original interval length is:

L

then after n iterations:

Length = L / 2ⁿ

The interval shrinks steadily.

Eventually the midpoint becomes an excellent approximation of the root.
`
    },

    {
      title: "6. Algorithm",
      content: `
Step 1:
Choose interval [a,b]

Step 2:
Check sign change

Step 3:
Compute midpoint c

Step 4:
Evaluate f(c)

Step 5:
Replace a or b

Step 6:
Repeat

Stop when desired accuracy is reached.
`
    },

    {
      title: "7. Worked Example I",
      content: `
Solve:

x²−4=0

Choose:

a=1
b=3

Midpoint:

c=2

f(2)=0

Root found immediately.

This is an ideal case.
`
    },

    {
      title: "8. Worked Example II",
      content: `
Solve:

x³−x−2=0

Choose:

a=1
b=2

Successive midpoints:

1.5
1.75
1.625
1.5625

The interval continuously narrows around the root.

Final root:

≈1.521
`
    },

    {
      title: "9. Error Analysis",
      content: `
Bisection has predictable error behavior.

Maximum error after n iterations:

(b−a)/2ⁿ

This allows us to determine exactly how many iterations are required for a desired accuracy.
`
    },

    {
      title: "10. Convergence Rate",
      content: `
Bisection converges linearly.

Linear convergence means error decreases steadily but not dramatically.

Compared to Newton-Raphson:

Bisection:
Stable but slower

Newton:
Faster but less reliable
`
    },

    {
      title: "11. Strengths",
      content: `
Advantages:

• Extremely simple
• Guaranteed convergence
• Easy implementation
• Stable behavior
• Excellent teaching tool

These qualities make it one of the most widely taught numerical methods.
`
    },

    {
      title: "12. Weaknesses",
      content: `
Limitations:

• Slow convergence
• Requires sign change
• Requires continuous function
• Not suitable for all root-finding problems

For difficult engineering problems, faster methods are often preferred.
`
    },

    {
      title: "13. Engineering Applications",
      content: `
Applications include:

• Circuit analysis
• Thermodynamics
• Fluid mechanics
• Structural engineering
• Numerical simulation software

Many professional numerical solvers use Bisection as a backup method.
`
    },

    {
      title: "14. Practice Problems",
      content: `
1. Solve x²−9=0

2. Solve x³−5=0

3. Solve e^x−2=0

4. Solve cos(x)-x=0

Estimate roots using Bisection.
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. What theorem makes Bisection possible?

Q2. Why is sign change important?

Q3. Define linear convergence.

Q4. State one major advantage.

Q5. State one major disadvantage.
`
    }

  ]
};
