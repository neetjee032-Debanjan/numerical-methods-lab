export const ieee754Lesson = {
  id: "l31",

  title: "IEEE 754 Floating Point Standard",

  simulation: "ieee754",

  pages: [

    {
      title: "1. Introduction",
      content: `
IEEE 754 is the international standard used by computers to store floating-point numbers.

Almost every modern programming language and processor follows this standard.

It defines how real numbers are represented, rounded, and manipulated.
`
    },

    {
      title: "2. Why IEEE 754 Exists",
      content: `
Computers cannot store every real number exactly.

A standard representation is needed so that calculations produce consistent results across different systems.
`
    },

    {
      title: "3. Scientific Notation Review",
      content: `
Floating-point numbers are similar to scientific notation.

Example:

12345

=

1.2345 × 10⁴

IEEE 754 uses base 2 instead of base 10.
`
    },

    {
      title: "4. Floating Point Structure",
      content: `
A floating-point number contains:

Sign Bit

Exponent

Mantissa (Fraction)

Together these determine the stored value.
`
    },

    {
      title: "5. Single Precision Format",
      content: `
Single precision uses 32 bits.

1 bit  : Sign

8 bits : Exponent

23 bits: Fraction
`
    },

    {
      title: "6. Double Precision Format",
      content: `
Double precision uses 64 bits.

1 bit  : Sign

11 bits : Exponent

52 bits : Fraction

This provides much greater precision.
`
    },

    {
      title: "7. Sign Bit",
      content: `
Sign Bit:

0 → Positive

1 → Negative

Example:

0 = positive number

1 = negative number
`
    },

    {
      title: "8. Exponent Field",
      content: `
The exponent stores the scale factor.

Instead of storing negative exponents directly, IEEE 754 uses a biased exponent representation.
`
    },

    {
      title: "9. Exponent Bias",
      content: `
Single Precision Bias:

127

Double Precision Bias:

1023

Stored Exponent

=

Actual Exponent + Bias
`
    },

    {
      title: "10. Mantissa",
      content: `
The mantissa stores the significant digits of the number.

It determines precision.

More mantissa bits mean more accurate representation.
`
    },

    {
      title: "11. Hidden Leading Bit",
      content: `
Normalized numbers assume a leading 1 before the binary point.

This bit is not stored.

It provides one extra bit of precision.
`
    },

    {
      title: "12. Example Representation",
      content: `
Binary:

101.101₂

Normalize:

1.01101 × 2²

Sign = 0

Exponent = 2

Mantissa = 01101...
`
    },

    {
      title: "13. Special Values",
      content: `
IEEE 754 supports:

+∞

−∞

NaN (Not a Number)

Subnormal Numbers
`
    },

    {
      title: "14. Infinity",
      content: `
Infinity occurs when a number exceeds the representable range.

Example:

1e308 × 1e308

may produce Infinity.
`
    },

    {
      title: "15. NaN",
      content: `
NaN means:

Not a Number

Examples:

0/0

√(-1)

undefined operations
`
    },

    {
      title: "16. Rounding",
      content: `
Most real numbers cannot be represented exactly.

IEEE 754 specifies standard rounding rules to minimize error.
`
    },

    {
      title: "17. Floating Point Error",
      content: `
Because many decimal fractions cannot be represented exactly in binary,

rounding errors occur.

Example:

0.1 + 0.2

often does not equal exactly 0.3.
`
    },

    {
      title: "18. Applications",
      content: `
IEEE 754 is used in:

Programming Languages

Scientific Computing

Machine Learning

Graphics Processing

Engineering Simulations
`
    },

    {
      title: "19. Practice Problems",
      content: `
1. Explain the role of the sign bit.

2. What is exponent bias?

3. Why is a hidden bit used?

4. Define NaN.
`
    },

    {
      title: "20. Quiz",
      content: `
Q1. How many bits are in single precision?

Q2. What is exponent bias?

Q3. What is the purpose of the mantissa?

Q4. What is NaN?

Q5. Why does floating-point error occur?
`
    }

  ]
};
