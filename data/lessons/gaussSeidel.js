export const gaussSeidelLesson = {
  id: "l21",

  title: "Gauss-Seidel Method",

  simulation: "gauss-seidel",

  pages: [

    {
      title: "1. Introduction",
      content: `
Gauss-Seidel Method is an iterative technique for solving systems of linear equations.

It improves upon the Jacobi Method by immediately using newly computed values during an iteration.

Because of this improvement, Gauss-Seidel often converges faster than Jacobi.
`
    },

    {
      title: "2. Motivation",
      content: `
Jacobi Method waits until the next iteration to use newly computed values.

This can slow convergence.

Gauss-Seidel uses updated values immediately, accelerating convergence in many cases.
`
    },

    {
      title: "3. System of Equations",
      content: `
Consider:

a₁₁x₁ + a₁₂x₂ + a₁₃x₃ = b₁

a₂₁x₁ + a₂₂x₂ + a₂₃x₃ = b₂

a₃₁x₁ + a₃₂x₂ + a₃₃x₃ = b₃

The objective is to obtain approximate solutions iteratively.
`
    },

    {
      title: "4. Iterative Formula",
      content: `
Each equation is rearranged for its corresponding variable.

Example:

x₁ =
(b₁ − a₁₂x₂ − a₁₃x₃)/a₁₁

The process is repeated for all unknowns.
`
    },

    {
      title: "5. Key Difference from Jacobi",
      content: `
Jacobi uses only old values.

Gauss-Seidel uses the latest available values immediately.

This simple change often produces much faster convergence.
`
    },

    {
      title: "6. Initial Guess",
      content: `
The algorithm begins with an initial approximation.

Common choice:

x₁ = 0

x₂ = 0

x₃ = 0

Successive iterations refine the solution.
`
    },

    {
      title: "7. Iteration Procedure",
      content: `
Step 1:
Choose initial guess.

Step 2:
Update x₁.

Step 3:
Use new x₁ to update x₂.

Step 4:
Use new x₁ and x₂ to update x₃.

Step 5:
Repeat until convergence.
`
    },

    {
      title: "8. Convergence Conditions",
      content: `
A sufficient condition for convergence is diagonal dominance.

For each row:

|aᵢᵢ| >

sum of magnitudes of other coefficients.

Many practical systems satisfy this condition.
`
    },

    {
      title: "9. Example",
      content: `
Consider:

10x+y+z=12

x+10y+z=12

x+y+10z=12

Starting with zero values, repeated iterations quickly approach the exact solution.
`
    },

    {
      title: "10. Error Estimation",
      content: `
Error can be estimated using:

|x(k+1)-x(k)|

When the difference becomes sufficiently small, iteration stops.
`
    },

    {
      title: "11. Matrix Interpretation",
      content: `
The system:

Ax=b

is decomposed into:

A = D + L + U

where:

D = diagonal part

L = lower triangular part

U = upper triangular part
`
    },

    {
      title: "12. Advantages",
      content: `
Advantages:

• Faster than Jacobi

• Easy implementation

• Efficient memory usage

• Suitable for sparse systems
`
    },

    {
      title: "13. Limitations",
      content: `
Limitations:

• Convergence is not guaranteed

• Sensitive to matrix properties

• May diverge for poorly conditioned systems
`
    },

    {
      title: "14. Applications",
      content: `
Applications include:

• Heat transfer

• Fluid mechanics

• Structural engineering

• Scientific computing

• Large sparse systems
`
    },

    {
      title: "15. Jacobi vs Gauss-Seidel",
      content: `
Jacobi:

Uses previous iteration values only.

Gauss-Seidel:

Uses newly computed values immediately.

Gauss-Seidel usually converges faster.
`
    },

    {
      title: "16. Computational Efficiency",
      content: `
For many engineering systems, Gauss-Seidel reaches acceptable accuracy in fewer iterations than Jacobi.

This reduces computation time.
`
    },

    {
      title: "17. Practice Problems",
      content: `
1. Perform three Gauss-Seidel iterations.

2. Compare with Jacobi results.

3. Check diagonal dominance.

4. Estimate convergence speed.
`
    },

    {
      title: "18. Quiz",
      content: `
Q1. What is Gauss-Seidel Method?

Q2. How does it differ from Jacobi?

Q3. What is diagonal dominance?

Q4. Why does it often converge faster?

Q5. Give one engineering application.
`
    }

  ]
};
