export const quizzes = {

  /* =========================
     l1 - Floating Point
  ========================= */

  l1: [

    {
      question: "Why is 0.1 not represented exactly in binary floating-point?",
      options: [
        "Insufficient RAM",
        "Infinite binary expansion",
        "CPU limitation",
        "Exponent overflow"
      ],
      answer: 1,
      explanation: "Many decimal fractions become repeating binary fractions."
    },

    {
      question: "What is machine precision primarily determined by?",
      options: [
        "RAM size",
        "Exponent bits",
        "Mantissa length",
        "CPU speed"
      ],
      answer: 2,
      explanation: "Mantissa bits determine numerical precision."
    },

    {
      question: "Floating-point arithmetic is:",
      options: [
        "Always exact",
        "Always associative",
        "Not always associative",
        "Integer only"
      ],
      answer: 2,
      explanation: "Rounding destroys associativity."
    },

    {
      question: "Normalization improves:",
      options: [
        "Precision",
        "RAM",
        "CPU frequency",
        "Cache"
      ],
      answer: 0,
      explanation: "Normalization maximizes significant digits."
    },

    {
      question: "Subtracting nearly equal numbers may cause:",
      options: [
        "Overflow",
        "Cancellation",
        "Normalization",
        "Compression"
      ],
      answer: 1,
      explanation: "This is called catastrophic cancellation."
    }

  ],

  /* =========================
     l2 - Numerical Errors
  ========================= */

  l2: [

    {
      question: "Absolute error is:",
      options: [
        "|True - Approximate|",
        "Approximate / True",
        "Percentage error",
        "Relative error"
      ],
      answer: 0,
      explanation: "Absolute error measures deviation magnitude."
    },

    {
      question: "Relative error is:",
      options: [
        "Absolute error divided by true value",
        "Absolute error multiplied by true value",
        "Approximate value",
        "Machine epsilon"
      ],
      answer: 0,
      explanation: "Relative error scales error by the true value."
    },

    {
      question: "Round-off error arises because:",
      options: [
        "Algorithms fail",
        "Finite precision exists",
        "RAM is low",
        "Operating systems differ"
      ],
      answer: 1,
      explanation: "Finite representation causes rounding."
    },

    {
      question: "Truncation error occurs when:",
      options: [
        "Infinite process is approximated",
        "CPU overheats",
        "RAM is full",
        "Compiler fails"
      ],
      answer: 0,
      explanation: "Approximations introduce truncation error."
    },

    {
      question: "An ill-conditioned problem:",
      options: [
        "Is always unstable",
        "Produces large output changes from small input changes",
        "Has no solution",
        "Requires interpolation"
      ],
      answer: 1,
      explanation: "Ill-conditioned problems amplify input errors."
    }

  ],

  /* =========================
     l27 - Binary Number System
  ========================= */

  l27: [

    {
      question: "Binary uses which base?",
      options: ["2", "8", "10", "16"],
      answer: 0,
      explanation: "Binary is base-2."
    },

    {
      question: "Which digit is invalid in binary?",
      options: ["0", "1", "2", "Both 0 and 1"],
      answer: 2,
      explanation: "Binary contains only 0 and 1."
    },

    {
      question: "1011₂ equals:",
      options: ["9", "10", "11", "12"],
      answer: 2,
      explanation: "8 + 2 + 1 = 11."
    },

    {
      question: "MSB means:",
      options: [
        "Most Significant Bit",
        "Minimum Significant Bit",
        "Memory Storage Bit",
        "Main System Bit"
      ],
      answer: 0,
      explanation: "MSB is the leftmost significant bit."
    },

    {
      question: "The place values in binary are powers of:",
      options: ["2", "8", "10", "16"],
      answer: 0,
      explanation: "Binary is base 2."
    }

  ],

  /* =========================
     l28 - Decimal To Binary
  ========================= */

  l28: [

    {
      question: "Decimal to binary conversion uses:",
      options: [
        "Repeated division by 2",
        "Repeated multiplication by 10",
        "Repeated subtraction",
        "Repeated addition"
      ],
      answer: 0,
      explanation: "Successive division by 2 generates binary digits."
    },

    {
      question: "13 in binary is:",
      options: [
        "1011",
        "1101",
        "1110",
        "1001"
      ],
      answer: 1,
      explanation: "13 = 8 + 4 + 1."
    },

    {
      question: "25 in binary is:",
      options: [
        "11001",
        "10110",
        "11100",
        "10011"
      ],
      answer: 0,
      explanation: "16 + 8 + 1."
    },

    {
      question: "0.5 in binary equals:",
      options: [
        "0.1",
        "0.01",
        "0.11",
        "1.0"
      ],
      answer: 0,
      explanation: "0.5 = 1/2."
    },

    {
      question: "Fractional decimal conversion uses:",
      options: [
        "Multiply by 2",
        "Divide by 2",
        "Multiply by 10",
        "Subtract 2"
      ],
      answer: 0,
      explanation: "Repeated multiplication by 2."
    }

  ],

  /* =========================
     l29 - Binary Arithmetic
  ========================= */

  l29: [

    {
      question: "1 + 1 in binary equals:",
      options: ["0", "1", "10", "11"],
      answer: 2,
      explanation: "Sum 0, carry 1."
    },

    {
      question: "1 + 1 + 1 equals:",
      options: ["10", "11", "100", "101"],
      answer: 1,
      explanation: "3 decimal = 11 binary."
    },

    {
      question: "101₂ × 10₂ equals:",
      options: [
        "111₂",
        "1000₂",
        "1010₂",
        "1100₂"
      ],
      answer: 2,
      explanation: "5 × 2 = 10 decimal."
    },

    {
      question: "Left shift by one bit is equivalent to:",
      options: [
        "Divide by 2",
        "Multiply by 2",
        "Complement",
        "Subtract 1"
      ],
      answer: 1,
      explanation: "Left shift multiplies by 2."
    },

    {
      question: "Most computers represent signed integers using:",
      options: [
        "BCD",
        "Sign magnitude",
        "1's complement",
        "2's complement"
      ],
      answer: 3,
      explanation: "Modern systems use 2's complement."
    }

  ],

  /* =========================
     l30 - Fixed Point Representation
  ========================= */

  l30: [

    {
      question: "In fixed-point representation the binary point is:",
      options: [
        "Variable",
        "Fixed",
        "Hidden",
        "Removed"
      ],
      answer: 1,
      explanation: "Its position remains fixed."
    },

    {
      question: "Fixed-point arithmetic is generally:",
      options: [
        "Slower",
        "Faster",
        "Impossible",
        "Random"
      ],
      answer: 1,
      explanation: "It is computationally simpler."
    },

    {
      question: "Main limitation of fixed-point systems:",
      options: [
        "Infinite precision",
        "Limited dynamic range",
        "Unlimited range",
        "No overflow"
      ],
      answer: 1,
      explanation: "Range is restricted."
    },

    {
      question: "Increasing fractional bits improves:",
      options: [
        "Precision",
        "Range",
        "Memory",
        "Exponent"
      ],
      answer: 0,
      explanation: "More fractional bits increase precision."
    },

    {
      question: "Q-format is associated with:",
      options: [
        "Floating-point",
        "Fixed-point",
        "Complex numbers",
        "Hexadecimal"
      ],
      answer: 1,
      explanation: "Q-format is widely used for fixed-point numbers."
    }

  ],

  /* =========================
     l31 - IEEE754
  ========================= */

  l31: [

    {
      question: "IEEE 754 defines:",
      options: [
        "Integer arithmetic",
        "Floating-point arithmetic",
        "Databases",
        "Networking"
      ],
      answer: 1,
      explanation: "IEEE 754 is the floating-point standard."
    },

    {
      question: "Single precision uses:",
      options: [
        "16 bits",
        "32 bits",
        "64 bits",
        "128 bits"
      ],
      answer: 1,
      explanation: "Single precision = 32 bits."
    },

    {
      question: "Double precision uses:",
      options: [
        "32 bits",
        "48 bits",
        "64 bits",
        "128 bits"
      ],
      answer: 2,
      explanation: "Double precision = 64 bits."
    },

    {
      question: "Exponent bias in single precision:",
      options: [
        "63",
        "127",
        "255",
        "1023"
      ],
      answer: 1,
      explanation: "Bias = 127."
    },

    {
      question: "Exponent all 1s and fraction non-zero represent:",
      options: [
        "Infinity",
        "Zero",
        "NaN",
        "Overflow"
      ],
      answer: 2,
      explanation: "NaN = Not a Number."
    }

  ],

  /* =========================
     l32 - Machine Epsilon
  ========================= */

  l32: [

    {
      question: "Machine epsilon is:",
      options: [
        "Largest number",
        "Smallest value changing 1 when added",
        "Maximum exponent",
        "Overflow value"
      ],
      answer: 1,
      explanation: "It measures floating-point precision."
    },

    {
      question: "Machine epsilon primarily measures:",
      options: [
        "Range",
        "Precision",
        "RAM",
        "Speed"
      ],
      answer: 1,
      explanation: "It quantifies precision."
    },

    {
      question: "Smaller epsilon means:",
      options: [
        "Lower precision",
        "Higher precision",
        "Smaller memory",
        "Larger overflow"
      ],
      answer: 1,
      explanation: "Smaller epsilon means finer resolution."
    },

    {
      question: "Machine epsilon depends mainly on:",
      options: [
        "Mantissa bits",
        "CPU speed",
        "RAM size",
        "Cache"
      ],
      answer: 0,
      explanation: "Mantissa length controls precision."
    },

    {
      question: "Machine epsilon is important because:",
      options: [
        "It estimates achievable accuracy",
        "It removes truncation error",
        "It guarantees convergence",
        "It increases speed"
      ],
      answer: 0,
      explanation: "Numerical accuracy is limited by machine precision."
    }

  ]

};
