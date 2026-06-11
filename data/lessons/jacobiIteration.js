export const jacobiIterationLesson = {
  id: "l20",

  title: "Jacobi Iteration Method",

  simulation: "jacobi",

  pages: [

    {
      title: "1. Introduction",
      content: `
Jacobi Iteration Method is an iterative technique for solving systems of linear equations.

Unlike Gauss Elimination and LU Decomposition, it does not directly compute the exact solution.

Instead, it generates successive approximations that gradually converge toward the solution.
`
    },

    {
      title: "2. Motivation",
      content: `
For very large systems, direct methods can become computationally expensive.

Iterative methods often require less memory and are suitable for sparse matrices.

Jacobi Method is one of the simplest iterative techniques.
`
    },

    {
      title: "3. System of Equations",
      content: `
Consider:

a₁₁x₁ + a₁₂x₂ + a₁₃x₃ = b₁

a₂₁x₁ + a₂₂x₂ + a₂₃x₃ = b₂

a₃₁x₁ + a₃₂x₂ + a₃₃x₃ = b₃

The goal is to approximate the unknown variables iteratively.
`
    },

    {
      title: "4. Rearranging Equations",
      content: `
Each equation is solved for its own variable.

Example:

x₁ = (b₁ − a₁₂x₂ − a₁₃x₃)/a₁₁

Similar expressions are obtained for x₂ and x₃.
`
    },

    {
      title: "5. Iterative Formula",
      content: `
At iteration k+1:

x₁(k+1) =
(b₁ − a₁₂x₂(k) − a₁₃x₃(k))/a₁₁

The same idea applies to all variables.

Only previous iteration values are used.
`
    },

    {
      title: "6. Initial Guess",
      content: `
The process starts with an initial guess.

Common choice:

x₁=0

x₂=0

x₃=0

The algorithm then improves these estimates.
`
    },

    {
      title: "7. Iteration Process",
      content: `
Step 1:
Choose initial guess.

Step 2:
Compute new values.

Step 3:
Measure error.

Step 4:
Repeat until convergence.
`
    },

    {
      title: "8. Convergence",
      content: `
Jacobi Method does not always converge.

A sufficient condition is diagonal dominance.

A matrix is diagonally dominant if:

|aᵢᵢ| >
sum of magnitudes of other entries in the row.
`
    },

    {
      title: "9. Example",
      content: `
Consider:

10x+y+z=12

x+10y+z=12

x+y+10z=12

Starting with zeros, repeated iterations quickly approach the true solution.
`
    },

    {
      title: "10. Error Estimation",
      content: `
The difference between successive iterations is often used as an error estimate.

When this error becomes sufficiently small, iteration stops.
`
    },

    {
      title: "11. Matrix Form",
      content: `
The system can be written as:

Ax=b

Jacobi decomposes:

A=D+R

where:

D = diagonal matrix

R = remaining terms
`
    },

    {
      title: "12. Advantages",
      content: `
Advantages:

• Simple implementation

• Suitable for sparse matrices

• Easy parallelization

• Low memory requirements
`
    },

    {
      title: "13. Limitations",
      content: `
Limitations:

• May converge slowly

• May diverge

• Requires convergence conditions
`
    },

    {
      title: "14. Applications",
      content: `
Applications include:

• Finite element analysis

• Heat transfer simulations

• Structural mechanics

• Large sparse systems

• Scientific computing
`
    },

    {
      title: "15. Comparison with Direct Methods",
      content: `
Gauss Elimination:

Direct solution.

Jacobi:

Iterative approximation.

Direct methods are often faster for small systems.

Jacobi becomes useful for large sparse systems.
`
    },

    {
      title: "16. Comparison with Gauss-Seidel",
      content: `
Gauss-Seidel improves Jacobi by using newly computed values immediately.

As a result, Gauss-Seidel often converges faster.
`
    },

    {
      title: "17. Practice Problems",
      content: `
1. Perform three Jacobi iterations.

2. Test diagonal dominance.

3. Estimate convergence rate.

4. Compare with Gauss Elimination.
`
    },

    {
      title: "18. Quiz",
      content: `
Q1. What is the Jacobi Method?

Q2. What values are used in updates?

Q3. What is diagonal dominance?

Q4. Why might convergence fail?

Q5. Compare Jacobi and Gauss-Seidel.
`
    }

  ]
};
