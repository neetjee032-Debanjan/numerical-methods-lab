export const binaryNumberSystemLesson = {
  id: "l27",

  title: "Binary Number System",

  pages: [

    {
      title: "1. Introduction",
      content: `
The Binary Number System is the foundation of all modern digital computers.

Unlike the decimal system which uses ten digits (0-9), binary uses only two digits:

0 and 1.

These digits are called bits.
`
    },

    {
      title: "2. Why Computers Use Binary",
      content: `
Electronic circuits naturally have two stable states:

ON and OFF

HIGH and LOW

TRUE and FALSE

These states are represented using 1 and 0.
`
    },

    {
      title: "3. Decimal Review",
      content: `
The decimal system is base 10.

Example:

527

=

5×10² + 2×10¹ + 7×10⁰

Each position represents a power of 10.
`
    },

    {
      title: "4. Binary Place Values",
      content: `
Binary is base 2.

Example:

1011₂

=

1×2³ + 0×2² + 1×2¹ + 1×2⁰
`
    },

    {
      title: "5. Binary to Decimal Conversion",
      content: `
Example:

101101₂

=

1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 1×1

=

45₁₀
`
    },

    {
      title: "6. Decimal to Binary Conversion",
      content: `
Repeatedly divide by 2.

Record remainders.

Read remainders from bottom to top.

Example:

13₁₀ = 1101₂
`
    },

    {
      title: "7. Binary Digits",
      content: `
A binary digit is called a bit.

Examples:

0 bit

1 bit

Computers store information using billions of bits.
`
    },

    {
      title: "8. Byte Representation",
      content: `
8 bits = 1 byte

Examples:

00000000

11111111

A byte can represent values from 0 to 255.
`
    },

    {
      title: "9. Binary Counting",
      content: `
Decimal   Binary

0         0000
1         0001
2         0010
3         0011
4         0100
5         0101
`
    },

    {
      title: "10. Binary Addition",
      content: `
Rules:

0+0=0

0+1=1

1+0=1

1+1=10

Carry occurs when sum exceeds 1.
`
    },

    {
      title: "11. Binary Subtraction",
      content: `
Rules:

1−0=1

1−1=0

Borrowing may be required just like decimal subtraction.
`
    },

    {
      title: "12. Binary Multiplication",
      content: `
Rules:

0×0=0

0×1=0

1×0=0

1×1=1

The process resembles decimal multiplication.
`
    },

    {
      title: "13. Binary Division",
      content: `
Binary division follows the same long-division process used in decimal arithmetic.
`
    },

    {
      title: "14. Advantages",
      content: `
Advantages:

• Simple hardware design

• Reliable storage

• Easy logic implementation

• Fast computation
`
    },

    {
      title: "15. Binary in Memory",
      content: `
All data inside a computer is stored in binary:

Numbers

Images

Videos

Audio

Text
`
    },

    {
      title: "16. Applications",
      content: `
Applications include:

• Computer architecture

• Networking

• Data storage

• Digital electronics
`
    },

    {
      title: "17. Practice Problems",
      content: `
1. Convert 29 to binary.

2. Convert 110101₂ to decimal.

3. Perform binary addition.

4. Perform binary subtraction.
`
    },

    {
      title: "18. Quiz",
      content: `
Q1. Why do computers use binary?

Q2. What is a bit?

Q3. What is a byte?

Q4. Convert 1111₂ to decimal.

Q5. Convert 25₁₀ to binary.
`
    }

  ]
};
