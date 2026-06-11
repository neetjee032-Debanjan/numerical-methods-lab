export const newtonBackwardInterpolationLesson = {
  id: "l16",

  title: "Newton Backward Interpolation",

  simulation: "newton-backward",

  pages: [

    {
      title: "1. Introduction",
      content: `
Newton Backward Interpolation is used when equally spaced data is available and the required value lies near the end of the table.

It is the counterpart of Newton Forward Interpolation.

Instead of using forward differences, it uses backward differences.

The method provides accurate interpolation near the last known data points.
`
    },

    {
      title: "2. Motivation",
      content: `
Suppose a data table contains values up to a final measurement.

If the desired value is close to the end of the table, Newton Forward Interpolation becomes less efficient.

Newton Backward Interpolation is specifically designed for this situation.
`
    },

    {
      title: "3. Equally Spaced Data Requirement",
      content: `
The method requires equally spaced x-values.

Example:

x : 10,11,12,13,14

Spacing:

h = 1

Equal spacing is necessary for constructing the backward difference table.
`
    },

    {
      title: "4. Backward Difference Table",
      content: `
Backward differences are defined as:

∇y(i)=y(i)-y(i-1)

Second backward difference:

∇²y

Third backward difference:

∇³y

and so on.
`
    },

    {
      title: "5. Newton Backward Formula",
      content: `
The interpolation polynomial is:

P(x)=

yₙ
+ u∇yₙ
+ u(u+1)/2! ∇²yₙ
+ u(u+1)(u+2)/3! ∇³yₙ

where

u=(x−xₙ)/h
`
    },

    {
      title: "6. Understanding u",
      content: `
Unlike Newton Forward Interpolation, the reference point is the last table value.

Therefore:

u=(x−xₙ)/h

where xₙ is the final x-value.
`
    },

    {
      title: "7. Algorithm",
      content: `
Step 1:
Construct backward difference table.

Step 2:
Compute u.

Step 3:
Substitute values into the Newton Backward formula.

Step 4:
Evaluate the polynomial.
`
    },

    {
      title: "8. Worked Example",
      content: `
Given:

x : 1,2,3

y : 1,4,9

Backward differences:

∇y:
3,5

∇²y:
2

Use the formula to estimate values near x=3.
`
    },

    {
      title: "9. Difference Table Construction",
      content: `
The backward difference table starts from the last row and moves upward.

Each column contains higher-order backward differences.

These values are used directly in the interpolation polynomial.
`
    },

    {
      title: "10. Advantages",
      content: `
Advantages:

• Efficient near the end of a table

• Easy implementation

• Uses structured difference tables

• Computationally efficient
`
    },

    {
      title: "11. Limitations",
      content: `
Limitations:

• Requires equal spacing

• Less suitable near the beginning of the table

• Accuracy decreases for high-degree interpolation
`
    },

    {
      title: "12. Applications",
      content: `
Applications include:

• Experimental data processing

• Engineering measurements

• Numerical modeling

• Scientific computation
`
    },

    {
      title: "13. Comparison with Newton Forward",
      content: `
Newton Forward:

Best near beginning of table.

Newton Backward:

Best near end of table.

Both require equal spacing and difference tables.
`
    },

    {
      title: "14. Practice Problems",
      content: `
1. Construct a backward difference table.

2. Compute ∇²y values.

3. Evaluate u.

4. Estimate an unknown value near the end of a table.
`
    },

    {
      title: "15. Quiz",
      content: `
Q1. What is backward interpolation?

Q2. Define backward difference.

Q3. State the formula for u.

Q4. When should this method be used?

Q5. Compare it with Newton Forward Interpolation.
`
    }

  ]
};
