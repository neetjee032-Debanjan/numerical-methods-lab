export const decimalToBinaryLesson = {
  id: "l28",

  title: "Decimal to Binary Conversion",

  pages: [

    {
      title: "1. Introduction",
      content: `
Decimal to Binary Conversion is one of the most important skills in computer science.

Computers internally store data in binary.

Therefore decimal values must be converted into binary form before storage and processing.
`
    },

    {
      title: "2. Why Conversion is Needed",
      content: `
Humans naturally use decimal numbers.

Computers use binary numbers.

Conversion acts as a bridge between human-readable numbers and machine-readable numbers.
`
    },

    {
      title: "3. Decimal System Review",
      content: `
Decimal numbers use base 10.

Digits:

0,1,2,3,4,5,6,7,8,9

Each position represents a power of 10.
`
    },

    {
      title: "4. Binary System Review",
      content: `
Binary numbers use base 2.

Digits:

0 and 1

Each position represents a power of 2.
`
    },

    {
      title: "5. Repeated Division Method",
      content: `
The standard method for converting decimal integers to binary is repeated division by 2.

At each step:

Divide by 2.

Record the remainder.

Continue until quotient becomes zero.
`
    },

    {
      title: "6. Example: Convert 13",
      content: `
13 ÷ 2 = 6 remainder 1

6 ÷ 2 = 3 remainder 0

3 ÷ 2 = 1 remainder 1

1 ÷ 2 = 0 remainder 1

Reading upward:

1101₂
`
    },

    {
      title: "7. Example: Convert 25",
      content: `
25 ÷ 2 = 12 remainder 1

12 ÷ 2 = 6 remainder 0

6 ÷ 2 = 3 remainder 0

3 ÷ 2 = 1 remainder 1

1 ÷ 2 = 0 remainder 1

Binary:

11001₂
`
    },

    {
      title: "8. Reading the Result",
      content: `
The remainders must be read from bottom to top.

Reading from top to bottom produces an incorrect answer.
`
    },

    {
      title: "9. Power-of-Two Method",
      content: `
Another method uses powers of two.

Find the largest power of two less than the number.

Subtract repeatedly while recording 1s and 0s.
`
    },

    {
      title: "10. Example Using Powers",
      content: `
Convert 45.

45 = 32 + 8 + 4 + 1

Binary:

101101₂
`
    },

    {
      title: "11. Fractional Binary Numbers",
      content: `
Decimal fractions can also be converted.

Example:

0.625₁₀

can be represented exactly in binary.
`
    },

    {
      title: "12. Multiplication Method",
      content: `
For fractions:

Multiply by 2.

Record integer part.

Repeat using remaining fraction.
`
    },

    {
      title: "13. Example: 0.625",
      content: `
0.625×2 = 1.25

0.25×2 = 0.5

0.5×2 = 1.0

Result:

0.101₂
`
    },

    {
      title: "14. Combined Numbers",
      content: `
Convert integer part separately.

Convert fractional part separately.

Combine results.

Example:

13.625₁₀

=

1101.101₂
`
    },

    {
      title: "15. Conversion Errors",
      content: `
Some decimal fractions never terminate in binary.

Example:

0.1₁₀

becomes an infinite repeating binary fraction.
`
    },

    {
      title: "16. Computer Representation",
      content: `
Because memory is finite, computers store approximations of many decimal fractions.

This is one reason floating-point errors occur.
`
    },

    {
      title: "17. Practice Problems",
      content: `
1. Convert 17 to binary.

2. Convert 50 to binary.

3. Convert 0.75 to binary.

4. Convert 12.5 to binary.
`
    },

    {
      title: "18. Quiz",
      content: `
Q1. Why read remainders upward?

Q2. Convert 31 to binary.

Q3. Convert 0.5 to binary.

Q4. Why do some fractions repeat forever?

Q5. Convert 100 to binary.
`
    }

  ]
};
