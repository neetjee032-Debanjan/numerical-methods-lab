export const newtonForwardInterpolationLesson = {
  id: "l15",

  title: "Newton Forward Interpolation",

simulation: "newtonforward",

  pages: [

    {
      title: "1. Introduction",
      content: `
Newton Forward Interpolation is one of the most important interpolation techniques.

It is used when data points are equally spaced and the required value lies near the beginning of the table.

The method uses forward differences to construct an interpolation polynomial.

It is widely used in numerical analysis and engineering computations.
`
    },

    {
      title: "2. Why Interpolation?",
      content: `
In many situations we know only discrete data values.

For example:

Temperature measurements,
Experimental observations,
Engineering test results.

Interpolation allows us to estimate values between known data points.
`
    },

    {
      title: "3. Equally Spaced Data",
      content: `
Newton Forward Interpolation requires equally spaced x-values.

Example:

x : 0,1,2,3,4

The spacing h is constant.

This property allows us to build a forward difference table.
`
    },

    {
      title: "4. Forward Difference Table",
      content: `
Given function values:

y₀,y₁,y₂,...

First forward difference:

Δy = y(i+1)-y(i)

Second forward difference:

Δ²y

Third forward difference:

Δ³y

and so on.
`
    },

    {
      title: "5. Newton Forward Formula",
      content: `
The interpolation polynomial is:

P(x)=

y₀
+ uΔy₀
+ u(u−1)/2! Δ²y₀
+ u(u−1)(u−2)/3! Δ³y₀

where

u=(x−x₀)/h
`
    },

    {
      title: "6. Understanding u",
      content: `
u measures how far the desired point is from the first table value.

u=(x−x₀)/h

It normalizes the distance using the spacing h.
`
    },

    {
      title: "7. Algorithm",
      content: `
Step 1:
Create forward difference table.

Step 2:
Compute u.

Step 3:
Substitute values into Newton formula.

Step 4:
Evaluate polynomial.
`
    },

    {
      title: "8. Worked Example",
      content: `
x : 0,1,2

y : 1,2,5

Forward differences:

Δy:
1,3

Δ²y:
2

Use the Newton formula to estimate intermediate values.
`
    },

    {
      title: "9. Difference Table Construction",
      content: `
A difference table organizes all forward differences.

Each column represents a higher-order difference.

The table is the core computational tool of the method.
`
    },

    {
      title: "10. Advantages",
      content: `
Advantages:

• Efficient for equally spaced data

• Easy difference table construction

• Suitable near the beginning of the table

• Computationally simple
`
    },

    {
      title: "11. Limitations",
      content: `
Limitations:

• Requires equal spacing

• Less suitable near the end of the table

• High-degree polynomials may oscillate
`
    },

    {
      title: "12. Engineering Applications",
      content: `
Applications include:

• Experimental data analysis

• Engineering measurements

• Signal reconstruction

• Scientific computing
`
    },

    {
      title: "13. Comparison with Lagrange",
      content: `
Lagrange interpolation does not require equally spaced data.

Newton Forward is usually faster when equal spacing exists.

The difference table provides computational efficiency.
`
    },

    {
      title: "14. Practice Problems",
      content: `
1. Construct a forward difference table.

2. Find Δ²y values.

3. Estimate an unknown point.

4. Compute u for a given x.
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. What is forward interpolation?

Q2. Define forward difference.

Q3. What is u?

Q4. Why must spacing be equal?

Q5. State one limitation.
`
    }

  ]
};
