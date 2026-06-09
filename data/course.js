export const course = {
  title: "Numerical Methods",

  modules: [

    {
      id: "m1",
      title: "Numbers, Precision & Errors",

      lessons: [

        {
          id: "l1",
          title: "Floating Point Representation",

          pages: [
            {
              title: "1. Why Computers Need Floating Point (Deep Intuition)",
              content: `
In real-world mathematics, numbers are infinite in precision.
For example, numbers like π or √2 have infinite decimal expansions.

However, computers have limited memory, which means they cannot store infinite precision values.

To solve this, computers use floating point representation.

This system allows representation of very large and very small numbers using a standardized format.

👉 Example:
Instead of storing 0.000000000123 directly,
computer stores it as 1.23 × 10⁻¹⁰.

This is similar to scientific notation used in physics and chemistry.
              `
            },

            {
              title: "2. Internal Structure of Floating Point Numbers",
              content: `
A floating point number is divided into three components:

1. Sign bit → determines positive or negative
2. Mantissa → stores significant digits
3. Exponent → defines scale or magnitude

👉 General form:

Number = (-1)^sign × mantissa × base^exponent

This structure allows a wide range of values to be represented efficiently.

However, since mantissa has limited bits, precision is always limited.

👉 Example:
0.1 in binary becomes an infinite repeating fraction,
so it must be approximated, introducing small errors.
              `
            },

            {
              title: "3. Errors, Limitations and Real Impact",
              content: `
Floating point arithmetic introduces rounding errors.

These errors may seem tiny but accumulate during repeated calculations.

👉 Example:
In physics simulations or financial models,
millions of operations can amplify small errors into significant deviations.

This is why numerical stability is extremely important in scientific computing.

Even AI training processes rely heavily on controlled floating point precision.
              `
            }
          ]
        },

        {
          id: "l2",
          title: "Types of Numerical Errors",

          pages: [
            {
              title: "1. What is Numerical Error (Deep Meaning)",
              content: `
Numerical error is the difference between the exact mathematical value
and the computed approximate value.

Since most real-world problems cannot be solved exactly,
approximation is unavoidable.

Thus, understanding error behavior is essential in numerical methods.
              `
            },

            {
              title: "2. Types of Errors with Meaning",
              content: `
There are three main types:

✔ Absolute Error:
Difference between true and computed value.

✔ Relative Error:
Absolute error divided by true value.

✔ Truncation Error:
Error introduced when infinite processes are cut short.

👉 Example:
Using only first 3 terms of a Taylor series creates truncation error.
              `
            },

            {
              title: "3. Error Propagation (Very Important Concept)",
              content: `
Errors do not stay isolated.

When multiple computations are performed,
errors accumulate and propagate.

👉 Example:
In iterative methods like Newton-Raphson,
each step depends on previous value,
so errors can either shrink or grow.

This is why stable algorithms are preferred in numerical analysis.
              `
            }
          ]
        }
      ]
    },

    {
      id: "m2",
      title: "Root Finding Methods",

      lessons: [

        {
          id: "l3",
          title: "Bisection Method",

          simulation: "bisection",

          pages: [
            {
              title: "1. Core Idea and Mathematical Foundation",
              content: `
The Bisection Method is based on the Intermediate Value Theorem.

If a continuous function changes sign between two points,
it must cross zero in between.

This guarantees the existence of a root in that interval.

👉 Example:
If f(a) = -2 and f(b) = +3,
then a root exists between a and b.
              `
            },

            {
              title: "2. Step-by-Step Working Process",
              content: `
We start with interval [a, b].

Then we compute midpoint:

c = (a + b) / 2

We evaluate function at c:

- If f(c) is positive → replace b
- If f(c) is negative → replace a

This process is repeated until convergence.
              `
            },

            {
              title: "3. Accuracy, Strengths and Weaknesses",
              content: `
Bisection method always converges if conditions are satisfied.

However, it converges slowly because it reduces interval linearly.

👉 Strength:
Guaranteed convergence

👉 Weakness:
Slower compared to Newton-Raphson method

👉 Real Use:
Used in systems where stability is more important than speed.
              `
            }
          ]
        },

        {
          id: "l4",
          title: "Newton-Raphson Method",

          simulation: "newton",

          pages: [
            {
              title: "1. Deep Intuition Behind the Method",
              content: `
Newton-Raphson method is based on the idea of using tangent lines
to approximate the root of a function.

Instead of searching blindly, we “follow the slope” toward zero.

This makes it extremely fast and powerful.
              `
            },

            {
              title: "2. Mathematical Derivation (Step-by-Step)",
              content: `
We use Taylor expansion:

f(x) ≈ f(xn) + f'(xn)(x - xn)

At root, f(x) = 0:

0 = f(xn) + f'(xn)(x - xn)

Solving:

xn+1 = xn - f(xn)/f'(xn)

This is one of the most important formulas in numerical analysis.
              `
            },

            {
              title: "3. Algorithm + Practical Behavior",
              content: `
Step 1: Choose initial guess
Step 2: Compute function and derivative
Step 3: Apply update formula
Step 4: Repeat

👉 Example:
For f(x) = x² - 4,
starting at x=2.5:

2.5 → 2.05 → 2.0006 → 2

Converges extremely fast.

However, poor initial guess can cause divergence.
              `
            }
          ]
        }
      ]
    },

    {
      id: "m3",
      title: "Interpolation",

      lessons: [

        {
          id: "l5",
          title: "Lagrange Interpolation",

          simulation: "lagrange",

          pages: [
            {
              title: "1. Concept of Interpolation",
              content: `
Interpolation is the process of estimating values between known data points.

Instead of guessing values randomly,
we construct a polynomial that fits all points exactly.
              `
            },

            {
              title: "2. Mathematical Construction",
              content: `
Lagrange interpolation builds basis polynomials.

Each basis polynomial contributes to one point
and becomes zero at all others.

This ensures exact curve fitting.
              `
            },

            {
              title: "3. Applications and Example",
              content: `
Used in physics simulations, curve fitting, and data modeling.

👉 Example:
Points (1,1), (2,4), (3,9)
produce a quadratic curve y = x²

However, high-degree polynomials can oscillate unpredictably.
              `
            }
          ]
        }
      ]
    },

    {
      id: "m4",
      title: "Numerical Integration",

      lessons: [

        {
          id: "l6",
          title: "Trapezoidal Rule",

          simulation: "trapezoid",

          pages: [
            {
              title: "1. Idea of Numerical Integration",
              content: `
When functions are difficult to integrate analytically,
we approximate area under curve.

Trapezoidal rule divides region into trapezoids.
              `
            },

            {
              title: "2. Mathematical Structure",
              content: `
Each segment contributes area:

Area ≈ sum of trapezoids

This improves accuracy compared to rectangle methods.
              `
            },

            {
              title: "3. Example and Applications",
              content: `
Used in physics, engineering, and numerical modeling.

👉 Example:
Estimating area under y = x² from 0 to 5.

More segments → higher accuracy.
              `
            }
          ]
        }
      ]
    },

    {
      id: "m5",
      title: "Differential Equations",

      lessons: [

        {
          id: "l7",
          title: "Euler Method",

          simulation: "euler",

          pages: [
            {
              title: "1. Concept of Differential Equations",
              content: `
Differential equations describe how systems change over time.

Exact solutions are often impossible,
so numerical methods are required.
              `
            },

            {
              title: "2. Euler Method Logic",
              content: `
We approximate next value using slope:

y(n+1) = y(n) + h * f(xn, yn)

This converts continuous systems into stepwise computation.
              `
            },

            {
              title: "3. Example and Limitations",
              content: `
Used in motion simulation and growth models.

👉 Example:
dy/dx = y
y(0)=1 gives exponential growth approximation.

Limitation:
Accuracy decreases with large step size.
              `
            }
          ]
        }
      ]
    }
  ]
};
