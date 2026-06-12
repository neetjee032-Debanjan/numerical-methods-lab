export const machineEpsilonLesson = {
  id: "l32",

  title: "Machine Epsilon",

  pages: [

    {
      title: "1. Introduction",
      content: `
Machine Epsilon is the smallest positive floating-point number that, when added to 1, produces a value different from 1.

It measures the precision of a floating-point system.
`
    },

    {
      title: "2. Why It Matters",
      content: `
Computers cannot represent real numbers exactly.

Machine Epsilon helps us understand the smallest detectable numerical change.
`
    },

    {
      title: "3. Precision Limitation",
      content: `
Floating-point numbers have a finite number of bits.

Eventually a value becomes so small that the computer cannot distinguish it from zero.
`
    },

    {
      title: "4. Definition",
      content: `
Machine Epsilon:

ε

is the smallest value such that:

1 + ε ≠ 1
`
    },

    {
      title: "5. Conceptual Example",
      content: `
Suppose:

ε = 0.0001

Then:

1 + ε = 1.0001

which is distinguishable from 1.

If ε becomes too small, the computer rounds the result back to 1.
`
    },

    {
      title: "6. Single Precision Epsilon",
      content: `
For IEEE 754 Single Precision:

ε ≈ 1.19 × 10⁻⁷

This means approximately 7 decimal digits of precision.
`
    },

    {
      title: "7. Double Precision Epsilon",
      content: `
For IEEE 754 Double Precision:

ε ≈ 2.22 × 10⁻¹⁶

This gives approximately 15–16 decimal digits of precision.
`
    },

    {
      title: "8. Finding Epsilon",
      content: `
Algorithm:

Start with:

ε = 1

Repeatedly divide by 2.

Stop when:

1 + ε = 1

The previous value is machine epsilon.
`
    },

    {
      title: "9. Numerical Example",
      content: `
ε = 1

ε = 0.5

ε = 0.25

...

Eventually the computer can no longer detect the difference.
`
    },

    {
      title: "10. Graphical Interpretation",
      content: `
Machine epsilon represents the spacing between adjacent floating-point numbers near 1.
`
    },

    {
      title: "11. Relative Error",
      content: `
Machine epsilon is often used as an estimate of the smallest relative error introduced by rounding.
`
    },

    {
      title: "12. Numerical Algorithms",
      content: `
Many numerical algorithms use machine epsilon to determine stopping criteria.
`
    },

    {
      title: "13. Newton-Raphson Example",
      content: `
Newton's Method often stops when:

|xₙ₊₁ - xₙ|

becomes smaller than a tolerance related to machine epsilon.
`
    },

    {
      title: "14. Convergence Tests",
      content: `
Iterative methods require a tolerance.

Machine epsilon provides a natural lower limit for that tolerance.
`
    },

    {
      title: "15. Round-Off Errors",
      content: `
Machine epsilon explains why round-off errors cannot be completely eliminated.
`
    },

    {
      title: "16. Practical Importance",
      content: `
Machine epsilon is widely used in:

Scientific Computing

Machine Learning

Numerical Analysis

Optimization Algorithms
`
    },

    {
      title: "17. Practice Problems",
      content: `
1. Define machine epsilon.

2. Compare single and double precision epsilon.

3. Explain why epsilon cannot be zero.
`
    },

    {
      title: "18. Quiz",
      content: `
Q1. What is machine epsilon?

Q2. Why is it important?

Q3. What is double precision epsilon approximately?

Q4. How can epsilon be computed?

Q5. How is epsilon used in iterative methods?
`
    }

  ]
};
