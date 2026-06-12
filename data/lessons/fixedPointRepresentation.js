export const fixedPointRepresentationLesson = {
  id: "l30",

  title: "Fixed Point Representation",

  pages: [

    {
      title: "1. Introduction",
      content: `
Fixed Point Representation is a method of storing real numbers in computers.

The position of the decimal (binary) point is fixed and never changes.

It is one of the oldest numerical representation techniques.
`
    },

    {
      title: "2. Motivation",
      content: `
Computers must represent fractions as well as integers.

One approach is to reserve a fixed number of bits for the integer part and a fixed number for the fractional part.
`
    },

    {
      title: "3. Fixed Binary Point",
      content: `
In fixed-point representation, the binary point is assumed to remain at a fixed location.

Example:

1011.101

The position of the binary point never changes.
`
    },

    {
      title: "4. Integer and Fractional Parts",
      content: `
A fixed-point number is divided into:

Integer Part

Fractional Part

Example:

1011.101

Integer = 1011

Fraction = 101
`
    },

    {
      title: "5. Fractional Binary Values",
      content: `
Binary fractions use negative powers of two.

Example:

0.101₂

=

1×2⁻¹ + 0×2⁻² + 1×2⁻³

=

0.625₁₀
`
    },

    {
      title: "6. Example Conversion",
      content: `
Convert:

110.11₂

=

1×4 + 1×2 + 0×1

+

1×0.5 + 1×0.25

=

6.75₁₀
`
    },

    {
      title: "7. Q Format",
      content: `
Fixed-point systems often use Q notation.

Example:

Q4.4

4 integer bits

4 fractional bits

Total = 8 bits
`
    },

    {
      title: "8. Q4.4 Example",
      content: `
Number:

0101.1000

Integer part:

5

Fractional part:

0.5

Value:

5.5
`
    },

    {
      title: "9. Precision",
      content: `
Precision depends on the number of fractional bits.

More fractional bits provide smaller step sizes and better accuracy.
`
    },

    {
      title: "10. Range",
      content: `
Range depends on the number of integer bits.

More integer bits allow larger values to be represented.
`
    },

    {
      title: "11. Trade-Off",
      content: `
There is a trade-off between:

Range

and

Precision

Increasing one often reduces the other.
`
    },

    {
      title: "12. Fixed-Point Addition",
      content: `
Addition is straightforward when both numbers share the same binary-point position.

Normal binary addition is used.
`
    },

    {
      title: "13. Fixed-Point Multiplication",
      content: `
Multiplication requires scaling because the fractional bits double after multiplication.
`
    },

    {
      title: "14. Advantages",
      content: `
Advantages:

• Fast arithmetic

• Low memory usage

• Simple hardware implementation

• Common in embedded systems
`
    },

    {
      title: "15. Limitations",
      content: `
Limitations:

• Limited range

• Fixed precision

• Overflow can occur easily

• Not suitable for very large or very small values
`
    },

    {
      title: "16. Applications",
      content: `
Applications include:

• Microcontrollers

• DSP systems

• Embedded electronics

• Real-time control systems
`
    },

    {
      title: "17. Practice Problems",
      content: `
1. Convert 101.01₂ to decimal.

2. Interpret a Q4.4 number.

3. Compare fixed-point and floating-point representation.

4. Determine range of a Q5.3 format.
`
    },

    {
      title: "18. Quiz",
      content: `
Q1. What is fixed-point representation?

Q2. What is Q notation?

Q3. What determines precision?

Q4. What determines range?

Q5. State one advantage of fixed-point numbers.
`
    }

  ]
};
