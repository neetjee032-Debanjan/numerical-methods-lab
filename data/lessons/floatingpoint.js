export const floatingPointLesson = {
  id: "l1",
  title: "Floating Point Representation",

  pages: [

    {
      title: "1. Historical Motivation",
      content: `
Modern computers perform billions of calculations every second. However, unlike mathematics, computers do not possess infinite memory.

Scientists, engineers, and mathematicians frequently work with extremely large and extremely small numbers. Examples include:

• Distance between galaxies
• Mass of an electron
• Quantum-scale measurements
• Economic forecasting values

Storing all these numbers exactly is impossible because computer memory is finite.

Early computer scientists therefore developed floating-point representation, a system inspired by scientific notation.

Instead of storing every digit, a number is stored using:

Sign
Mantissa (Significand)
Exponent

This innovation allowed computers to represent an enormous range of values efficiently and remains one of the most important ideas in numerical computing.
`
    },

    {
      title: "2. Why Real Numbers Are Difficult To Store",
      content: `
Integers are relatively easy to store because they have finite representations.

Examples:

5
100
-27

Real numbers are different.

Examples:

π = 3.1415926535...
√2 = 1.414213562...
1/3 = 0.333333333...

These numbers may contain infinitely many digits.

Since computers possess finite memory, exact storage becomes impossible.

Consequently computers store approximations.

Numerical methods must therefore be designed with approximation errors in mind.
`
    },

    {
      title: "3. Scientific Notation Review",
      content: `
Floating-point representation is based on scientific notation.

Examples:

5000 = 5 × 10³

0.00042 = 4.2 × 10⁻⁴

6,700,000 = 6.7 × 10⁶

Scientific notation separates:

Magnitude
Significant digits

This idea allows representation of numbers spanning enormous ranges while storing only essential information.

Computers use the same concept but replace base 10 with base 2.
`
    },

    {
      title: "4. Binary Number System",
      content: `
Computers operate using binary digits.

Only two symbols exist:

0
1

Examples:

Decimal 5 = Binary 101

Decimal 10 = Binary 1010

Decimal 13 = Binary 1101

Each position represents a power of two:

1101₂

= 1×2³ + 1×2² + 0×2¹ + 1×2⁰

= 13

Understanding binary numbers is essential because floating-point values are ultimately stored in binary form.
`
    },

    {
      title: "5. Binary Fractions",
      content: `
Binary fractions use negative powers of two.

Example:

0.101₂

= 1×2⁻¹ + 0×2⁻² + 1×2⁻³

= 0.5 + 0 + 0.125

= 0.625

Many decimal fractions cannot be represented exactly in binary.

Example:

0.1₁₀

becomes

0.00011001100110011...

which repeats infinitely.

Therefore computers must truncate the representation and introduce rounding error.
`
    },

    {
      title: "6. Floating Point Structure",
      content: `
A floating-point number consists of three components:

1. Sign Bit
2. Exponent
3. Mantissa (Significand)

General form:

Number = (-1)^sign × Mantissa × Base^Exponent

The sign determines positivity or negativity.

The mantissa stores significant digits.

The exponent determines scale.

This design allows representation of both huge and tiny numbers using limited storage.
`
    },

    {
      title: "7. IEEE 754 Standard",
      content: `
To ensure consistency across computer systems, IEEE introduced the IEEE 754 floating-point standard.

Almost all modern computers follow this standard.

The standard specifies:

• Storage format
• Precision levels
• Rounding methods
• Special values

Examples of special values:

+∞
−∞
NaN (Not a Number)

IEEE 754 forms the foundation of numerical computing worldwide.
`
    },

    {
      title: "8. Single Precision Format",
      content: `
Single precision uses 32 bits.

Structure:

1 Sign Bit
8 Exponent Bits
23 Mantissa Bits

Total:

1 + 8 + 23 = 32 bits

Advantages:

• Less memory
• Faster calculations

Disadvantages:

• Lower precision

Typically provides around 7 decimal digits of accuracy.
`
    },

    {
      title: "9. Double Precision Format",
      content: `
Double precision uses 64 bits.

Structure:

1 Sign Bit
11 Exponent Bits
52 Mantissa Bits

Advantages:

• Higher accuracy
• Reduced rounding error

Typical accuracy:

15–16 decimal digits

Most scientific software uses double precision because numerical stability is improved significantly.
`
    },

    {
      title: "10. Machine Epsilon",
      content: `
Machine epsilon is the smallest number that can be added to 1 and still produce a distinguishable result.

It represents the limit of floating-point precision.

For double precision:

Machine epsilon ≈ 2.22 × 10⁻¹⁶

Machine epsilon is crucial because it determines:

• Numerical accuracy
• Convergence criteria
• Error tolerances

Many numerical algorithms depend directly on machine epsilon.
`
    },

    {
      title: "11. Rounding Errors",
      content: `
Since most numbers cannot be stored exactly, rounding becomes necessary.

Example:

0.1

is stored approximately rather than exactly.

Consequently:

0.1 + 0.2

may produce:

0.30000000000000004

instead of:

0.3

These small discrepancies are called rounding errors.

While tiny individually, they may accumulate during repeated calculations.
`
    },

    {
      title: "12. Catastrophic Cancellation",
      content: `
Catastrophic cancellation occurs when two nearly equal numbers are subtracted.

Example:

1000.123456
−1000.123455

Result:

0.000001

Most significant digits disappear.

Precision is lost dramatically.

This problem frequently appears in:

• Numerical differentiation
• Optimization algorithms
• Scientific simulations

Careful algorithm design is required to avoid cancellation.
`
    },

    {
      title: "13. Overflow and Underflow",
      content: `
Overflow occurs when a number becomes too large to represent.

Example:

10^500

A computer may return:

Infinity

Underflow occurs when a number becomes too small.

Example:

10^-500

The value may become:

0

Both situations can cause numerical instability and must be handled carefully.
`
    },

    {
      title: "14. Engineering Applications",
      content: `
Floating-point arithmetic appears everywhere.

Applications include:

• Weather prediction
• Space missions
• Artificial Intelligence
• Financial modeling
• Structural engineering
• Computational fluid dynamics

Engineers must understand floating-point limitations because tiny numerical errors can grow into significant computational problems.
`
    },

    {
      title: "15. Practice Problems and Quiz",
      content: `
Practice Problems

1. Convert decimal 13 into binary.

2. Convert binary 10101 into decimal.

3. Express 0.625 in binary.

4. Explain why 0.1 cannot be represented exactly in binary.

5. Compare single and double precision.

Quiz

Q1. What are the three components of a floating-point number?

Q2. What is machine epsilon?

Q3. Define overflow.

Q4. Define underflow.

Q5. What is catastrophic cancellation?

Q6. Why is IEEE 754 important?

Q7. Which precision format provides approximately 15–16 digits of accuracy?

Q8. Why do rounding errors occur?
`
    }

  ]
};
