export const binaryArithmeticLesson = {
  id: "l29",

  title: "Binary Arithmetic",

  simulation: "binaryarithmetic",

  pages: [

    {
      title: "1. Introduction",
      content: `
Binary arithmetic is the arithmetic performed on binary numbers.

Computers perform all calculations using binary arithmetic.

Addition, subtraction, multiplication, and division are all implemented using binary operations.
`
    },

    {
      title: "2. Why Binary Arithmetic Matters",
      content: `
Every calculation inside a computer eventually becomes a sequence of binary operations.

Understanding binary arithmetic helps explain how processors perform computations.
`
    },

    {
      title: "3. Binary Digits",
      content: `
Binary numbers use only:

0 and 1

These digits are called bits.

All arithmetic operations are built from these two symbols.
`
    },

    {
      title: "4. Binary Addition Rules",
      content: `
Basic addition rules:

0 + 0 = 0

0 + 1 = 1

1 + 0 = 1

1 + 1 = 10
`
    },

    {
      title: "5. Carry Operation",
      content: `
When:

1 + 1

the result is:

10

The 0 remains in the current position and 1 is carried to the next position.
`
    },

    {
      title: "6. Addition Example",
      content: `
  1011
+ 0110
-------
 10001

Binary addition follows the same column-wise process used in decimal arithmetic.
`
    },

    {
      title: "7. Binary Subtraction Rules",
      content: `
Basic subtraction rules:

0 − 0 = 0

1 − 0 = 1

1 − 1 = 0

0 − 1 requires borrowing.
`
    },

    {
      title: "8. Borrowing",
      content: `
Borrowing in binary is similar to decimal subtraction.

Instead of borrowing 10, we borrow 2.
`
    },

    {
      title: "9. Subtraction Example",
      content: `
 1010
-0011
------
 0111

Result:

7₁₀
`
    },

    {
      title: "10. Binary Multiplication Rules",
      content: `
Rules:

0 × 0 = 0

0 × 1 = 0

1 × 0 = 0

1 × 1 = 1
`
    },

    {
      title: "11. Multiplication Example",
      content: `
   101
 ×  11
 -------
   101
  101
 -------
 1111
`
    },

    {
      title: "12. Binary Division",
      content: `
Binary division works similarly to decimal long division.

The quotient and remainder are determined using repeated subtraction.
`
    },

    {
      title: "13. Division Example",
      content: `
1100₂ ÷ 10₂

=

110₂

which equals:

12 ÷ 2 = 6
`
    },

    {
      title: "14. Two's Complement Arithmetic",
      content: `
Modern computers represent negative numbers using Two's Complement representation.

This allows subtraction to be performed using addition circuits.
`
    },

    {
      title: "15. Overflow",
      content: `
Overflow occurs when a result requires more bits than available.

Example:

1111 + 0001

requires 5 bits.
`
    },

    {
      title: "16. Computer Hardware",
      content: `
Arithmetic Logic Units (ALUs) perform binary arithmetic.

Every CPU contains hardware designed specifically for binary calculations.
`
    },

    {
      title: "17. Practice Problems",
      content: `
1. Add 1010 and 1101.

2. Subtract 1001 from 1110.

3. Multiply 101 by 11.

4. Divide 1100 by 10.
`
    },

    {
      title: "18. Quiz",
      content: `
Q1. What is 1+1 in binary?

Q2. Why is carrying needed?

Q3. What is borrowing?

Q4. What causes overflow?

Q5. Why do computers use binary arithmetic?
`
    }

  ]
};
