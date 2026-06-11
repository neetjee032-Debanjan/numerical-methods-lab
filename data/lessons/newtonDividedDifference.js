export const newtonDividedDifferenceLesson = {
  id: "l22",

  title: "Newton Divided Difference Interpolation",

  simulation: "newton-divided-difference",

  pages: [

    {
      title: "1. Introduction",
      content: `
Newton Divided Difference Interpolation is a powerful interpolation technique that works even when data points are not equally spaced.

Unlike Newton Forward and Newton Backward methods, equal spacing is not required.

This makes the method highly flexible for real-world datasets.
`
    },

    {
      title: "2. Motivation",
      content: `
Many experimental datasets are irregularly spaced.

Forward and Backward interpolation cannot be applied directly.

Newton Divided Difference solves this problem efficiently.
`
    },

    {
      title: "3. Interpolation Goal",
      content: `
Given a set of points:

(x₀,y₀)

(x₁,y₁)

(x₂,y₂)

...

construct a polynomial that passes through all points.
`
    },

    {
      title: "4. First Divided Difference",
      content: `
The first divided difference is:

f[x₀,x₁]

=

(y₁-y₀)/(x₁-x₀)

It represents the slope between two points.
`
    },

    {
      title: "5. Second Divided Difference",
      content: `
The second divided difference is:

f[x₀,x₁,x₂]

=

(f[x₁,x₂]-f[x₀,x₁])

/

(x₂-x₀)

This captures curvature information.
`
    },

    {
      title: "6. Higher Order Differences",
      content: `
The process continues recursively.

Third, fourth and higher-order differences can be constructed similarly.

These values become coefficients of the interpolation polynomial.
`
    },

    {
      title: "7. Newton Polynomial",
      content: `
The interpolation polynomial is:

P(x)=

f[x₀]

+

f[x₀,x₁](x-x₀)

+

f[x₀,x₁,x₂](x-x₀)(x-x₁)

+ ...
`
    },

    {
      title: "8. Recursive Structure",
      content: `
One major advantage is that new points can be added without rebuilding the entire polynomial.

Only new divided differences need to be computed.
`
    },

    {
      title: "9. Example",
      content: `
Points:

(1,1)

(2,4)

(3,9)

Construct divided differences.

Build the interpolation polynomial.

Verify that all points are satisfied.
`
    },

    {
      title: "10. Difference Table",
      content: `
A divided difference table organizes all computed coefficients.

The top entries of each column become polynomial coefficients.
`
    },

    {
      title: "11. Algorithm",
      content: `
Step 1:
Create divided difference table.

Step 2:
Extract coefficients.

Step 3:
Construct Newton polynomial.

Step 4:
Evaluate desired point.
`
    },

    {
      title: "12. Advantages",
      content: `
Advantages:

• Works with unequal spacing

• Efficient updates

• Easy polynomial construction

• Widely used in scientific computing
`
    },

    {
      title: "13. Limitations",
      content: `
Limitations:

• High-degree polynomials may oscillate

• Computation grows with data size

• Numerical errors can accumulate
`
    },

    {
      title: "14. Applications",
      content: `
Applications include:

• Experimental measurements

• Engineering data fitting

• Scientific computing

• Numerical modeling
`
    },

    {
      title: "15. Comparison",
      content: `
Forward Interpolation:

Requires equal spacing.

Backward Interpolation:

Requires equal spacing.

Divided Difference:

No equal spacing requirement.
`
    },

    {
      title: "16. Practice Problems",
      content: `
1. Construct a divided difference table.

2. Build the interpolation polynomial.

3. Evaluate an unknown point.

4. Compare with Lagrange interpolation.
`
    },

    {
      title: "17. Quiz",
      content: `
Q1. What is a divided difference?

Q2. Why is equal spacing unnecessary?

Q3. What are the polynomial coefficients?

Q4. What is the main advantage of this method?

Q5. Compare with Newton Forward interpolation.
`
    }

  ]
};
