export const quizzes = {

  floatingPoint: [

    {
      question: "Why is 0.1 not represented exactly in IEEE-754 binary floating-point?",
      options: [
        "Insufficient RAM",
        "Decimal fractions may have infinite binary expansions",
        "Processors round all numbers",
        "IEEE-754 forbids decimal fractions"
      ],
      answer: 1,
      explanation: "0.1 becomes a repeating binary fraction and must be rounded."
    },

    {
      question: "Which floating-point phenomenon occurs when subtracting two nearly equal numbers?",
      options: [
        "Overflow",
        "Normalization",
        "Catastrophic cancellation",
        "Underflow"
      ],
      answer: 2,
      explanation: "Significant digits are lost when close values are subtracted."
    },

    {
      question: "Machine precision primarily depends on:",
      options: [
        "CPU clock speed",
        "Mantissa length",
        "RAM capacity",
        "Operating system"
      ],
      answer: 1,
      explanation: "More mantissa bits provide greater precision."
    },

    {
      question: "What is the principal purpose of normalization?",
      options: [
        "Reduce exponent size",
        "Maximize significant digits",
        "Reduce memory usage",
        "Avoid division"
      ],
      answer: 1,
      explanation: "Normalization preserves precision."
    },

    {
      question: "In floating-point arithmetic, rounding errors are:",
      options: [
        "Always avoidable",
        "Caused by finite representation",
        "Caused by programming mistakes only",
        "Restricted to multiplication"
      ],
      answer: 1,
      explanation: "Finite storage forces approximations."
    },

    {
      question: "A normalized binary number has:",
      options: [
        "Leading 1 before binary point",
        "Exponent equal to zero",
        "Positive sign",
        "Integer mantissa"
      ],
      answer: 0,
      explanation: "Normalization usually keeps a leading 1."
    },

    {
      question: "Which operation amplifies floating-point errors most often?",
      options: [
        "Repeated subtraction",
        "Repeated exact powers of two",
        "Bit shifting",
        "Comparison operations"
      ],
      answer: 0,
      explanation: "Subtraction can destroy significant digits."
    },

    {
      question: "Floating-point arithmetic is generally:",
      options: [
        "Associative",
        "Not always associative",
        "Always distributive",
        "Always exact"
      ],
      answer: 1,
      explanation: "Rounding causes loss of associativity."
    },

    {
      question: "What determines floating-point range?",
      options: [
        "Exponent bits",
        "Mantissa bits only",
        "CPU frequency",
        "Cache memory"
      ],
      answer: 0,
      explanation: "Exponent controls representable magnitude."
    },

    {
      question: "A major limitation of floating-point systems is:",
      options: [
        "Cannot store integers",
        "Finite precision",
        "Cannot represent negatives",
        "Cannot divide"
      ],
      answer: 1,
      explanation: "Precision is limited by mantissa length."
    }

  ],

  numericalErrors: [

    {
      question: "Absolute error is defined as:",
      options: [
        "|True − Approximate|",
        "True/Approximate",
        "Approximate/True",
        "Percentage error"
      ],
      answer: 0,
      explanation: "Absolute error measures magnitude of deviation."
    },

    {
      question: "Relative error is useful because:",
      options: [
        "It includes scale effects",
        "It removes units",
        "It is always smaller",
        "It ignores magnitude"
      ],
      answer: 0,
      explanation: "Relative error compares error to true value."
    },

    {
      question: "Truncation error arises from:",
      options: [
        "Finite arithmetic precision",
        "Approximating mathematical procedures",
        "Hardware faults",
        "Compiler bugs"
      ],
      answer: 1,
      explanation: "Approximating infinite processes causes truncation error."
    },

    {
      question: "Round-off error is caused by:",
      options: [
        "Finite digit storage",
        "Wrong formulas",
        "Bad algorithms",
        "Network delays"
      ],
      answer: 0,
      explanation: "Limited representation introduces rounding."
    },

    {
      question: "Percentage error equals:",
      options: [
        "Relative error × 100",
        "Absolute error × 100",
        "True value × 100",
        "Approximate value × 100"
      ],
      answer: 0,
      explanation: "Percentage error is scaled relative error."
    },

    {
      question: "Error propagation studies:",
      options: [
        "Memory usage",
        "How errors affect later calculations",
        "CPU speed",
        "Data compression"
      ],
      answer: 1,
      explanation: "Small errors can grow through computations."
    },

    {
      question: "A stable algorithm:",
      options: [
        "Amplifies errors",
        "Controls error growth",
        "Eliminates all errors",
        "Needs no memory"
      ],
      answer: 1,
      explanation: "Stable algorithms prevent excessive error accumulation."
    },

    {
      question: "Conditioning refers to:",
      options: [
        "Sensitivity of problem to input errors",
        "Algorithm speed",
        "Programming style",
        "Memory allocation"
      ],
      answer: 0,
      explanation: "Well-conditioned problems react mildly to input changes."
    },

    {
      question: "An ill-conditioned problem:",
      options: [
        "Produces large output changes from small input changes",
        "Always converges",
        "Uses large matrices",
        "Has no solution"
      ],
      answer: 0,
      explanation: "Small perturbations can dramatically affect results."
    },

    {
      question: "Numerical analysis primarily aims to:",
      options: [
        "Eliminate mathematics",
        "Control computational errors",
        "Increase hardware speed",
        "Replace exact methods"
      ],
      answer: 1,
      explanation: "Understanding and controlling error is central to numerical methods."
    }

  ]

};

binaryNumberSystem: [

  {
    question: "The binary number system uses which base?",
    options: ["2", "8", "10", "16"],
    answer: 0,
    explanation: "Binary is a base-2 number system."
  },

  {
    question: "Which binary digit is NOT valid?",
    options: ["0", "1", "2", "Both 0 and 1"],
    answer: 2,
    explanation: "Binary numbers contain only 0 and 1."
  },

  {
    question: "The binary number 1011 equals:",
    options: ["9", "10", "11", "12"],
    answer: 2,
    explanation: "1011₂ = 8 + 2 + 1 = 11."
  },

  {
    question: "The decimal number 15 in binary is:",
    options: ["1110", "1111", "1011", "1001"],
    answer: 1,
    explanation: "15 = 8+4+2+1."
  },

  {
    question: "How many unique values can be represented using n bits?",
    options: ["n", "2n", "2^n", "n²"],
    answer: 2,
    explanation: "Each bit has 2 possibilities."
  },

  {
    question: "Which bit is called the Most Significant Bit?",
    options: [
      "Leftmost bit",
      "Rightmost bit",
      "Middle bit",
      "Parity bit"
    ],
    answer: 0,
    explanation: "MSB carries the highest place value."
  },

  {
    question: "Which bit is called the Least Significant Bit?",
    options: [
      "Leftmost bit",
      "Rightmost bit",
      "Sign bit",
      "Overflow bit"
    ],
    answer: 1,
    explanation: "LSB carries the lowest place value."
  },

  {
    question: "The place values in binary are powers of:",
    options: ["2", "8", "10", "16"],
    answer: 0,
    explanation: "Binary is base 2."
  },

  {
    question: "Which representation is most natural for digital circuits?",
    options: [
      "Decimal",
      "Hexadecimal",
      "Binary",
      "Octal"
    ],
    answer: 2,
    explanation: "Digital electronics operate using two states."
  },

  {
    question: "101010₂ equals:",
    options: ["40", "41", "42", "43"],
    answer: 2,
    explanation: "32+8+2 = 42."
  }

],

decimalToBinary: [

  {
    question: "The standard method for decimal-to-binary conversion uses:",
    options: [
      "Repeated multiplication by 2",
      "Repeated division by 2",
      "Repeated subtraction by 10",
      "Repeated addition by 2"
    ],
    answer: 1,
    explanation: "Successive division by 2 generates binary digits."
  },

  {
    question: "Decimal 13 converted to binary is:",
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
    question: "Decimal 25 converted to binary is:",
    options: [
      "11001",
      "10110",
      "11100",
      "10011"
    ],
    answer: 0,
    explanation: "25 = 16 + 8 + 1."
  },

  {
    question: "Decimal 32 converted to binary is:",
    options: [
      "100000",
      "100001",
      "11111",
      "10000"
    ],
    answer: 0,
    explanation: "32 = 2⁵."
  },

  {
    question: "Decimal 64 converted to binary is:",
    options: [
      "1000000",
      "1000001",
      "111111",
      "100000"
    ],
    answer: 0,
    explanation: "64 = 2⁶."
  },

  {
    question: "To convert the fractional decimal 0.625 into binary we repeatedly:",
    options: [
      "Multiply by 2",
      "Divide by 2",
      "Multiply by 10",
      "Add 2"
    ],
    answer: 0,
    explanation: "Fractional conversion uses repeated multiplication by 2."
  },

  {
    question: "0.5 in binary is:",
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
    question: "0.25 in binary is:",
    options: [
      "0.1",
      "0.01",
      "0.001",
      "0.11"
    ],
    answer: 1,
    explanation: "0.25 = 1/4."
  },

  {
    question: "Which decimal fraction has an exact binary representation?",
    options: [
      "0.1",
      "0.2",
      "0.3",
      "0.5"
    ],
    answer: 3,
    explanation: "0.5 = 1/2, which is exactly representable."
  },

  {
    question: "Why do some decimal fractions repeat forever in binary?",
    options: [
      "Insufficient memory",
      "Base mismatch between decimal and binary",
      "CPU limitations",
      "Compiler restrictions"
    ],
    answer: 1,
    explanation: "Some decimal fractions have infinite binary expansions."
  }

],

binaryArithmetic: [

  {
    question: "What is 1011₂ + 0101₂ ?",
    options: [
      "10000₂",
      "11000₂",
      "10001₂",
      "11110₂"
    ],
    answer: 0,
    explanation: "11 + 5 = 16, which is 10000₂."
  },

  {
    question: "What is 1101₂ − 0101₂ ?",
    options: [
      "1000₂",
      "1110₂",
      "1010₂",
      "0111₂"
    ],
    answer: 0,
    explanation: "13 − 5 = 8."
  },

  {
    question: "In binary addition, 1 + 1 equals:",
    options: [
      "0",
      "1",
      "10",
      "11"
    ],
    answer: 2,
    explanation: "1+1 produces sum 0 and carry 1."
  },

  {
    question: "In binary addition, 1 + 1 + 1 equals:",
    options: [
      "10",
      "11",
      "100",
      "101"
    ],
    answer: 1,
    explanation: "1+1+1 = 3 decimal = 11₂."
  },

  {
    question: "Binary multiplication is conceptually similar to:",
    options: [
      "Repeated subtraction",
      "Repeated addition",
      "Division",
      "Differentiation"
    ],
    answer: 1,
    explanation: "Multiplication can be viewed as repeated addition."
  },

  {
    question: "What is 101₂ × 10₂ ?",
    options: [
      "111₂",
      "1000₂",
      "1010₂",
      "1100₂"
    ],
    answer: 2,
    explanation: "5 × 2 = 10 decimal = 1010₂."
  },

  {
    question: "Multiplying a binary number by 2 is equivalent to:",
    options: [
      "Right shift",
      "Left shift",
      "Complement",
      "Division"
    ],
    answer: 1,
    explanation: "Left shift by one bit multiplies by 2."
  },

  {
    question: "Dividing a binary number by 2 is equivalent to:",
    options: [
      "Left shift",
      "Right shift",
      "Adding 1",
      "Taking complement"
    ],
    answer: 1,
    explanation: "Right shift by one bit divides by 2."
  },

  {
    question: "What is the 2's complement of 0101₂ ?",
    options: [
      "1010₂",
      "1011₂",
      "1111₂",
      "1001₂"
    ],
    answer: 1,
    explanation: "Invert → 1010, add 1 → 1011."
  },

  {
    question: "Which representation is most commonly used for signed integers?",
    options: [
      "1's complement",
      "Sign magnitude",
      "2's complement",
      "BCD"
    ],
    answer: 2,
    explanation: "Modern systems primarily use 2's complement."
  },

  {
    question: "Overflow occurs in binary arithmetic when:",
    options: [
      "Carry enters MSB",
      "Result exceeds representable range",
      "Number becomes negative",
      "LSB changes"
    ],
    answer: 1,
    explanation: "Overflow means the result cannot be represented."
  },

  {
    question: "What is 1111₂ + 0001₂ in a 4-bit system?",
    options: [
      "0000₂ with overflow",
      "10000₂",
      "1110₂",
      "0001₂"
    ],
    answer: 0,
    explanation: "Overflow carry is discarded in fixed-width arithmetic."
  }

],

fixedPointRepresentation: [

  {
    question: "In fixed-point representation, the binary point is:",
    options: [
      "Variable",
      "Fixed",
      "Removed",
      "Stored separately"
    ],
    answer: 1,
    explanation: "The binary point position remains fixed."
  },

  {
    question: "Fixed-point arithmetic is generally:",
    options: [
      "Slower than floating-point",
      "Faster than floating-point",
      "Impossible in hardware",
      "Only theoretical"
    ],
    answer: 1,
    explanation: "Fixed-point operations are simpler and faster."
  },

  {
    question: "The main limitation of fixed-point systems is:",
    options: [
      "Infinite precision",
      "Limited dynamic range",
      "Unlimited storage",
      "No overflow"
    ],
    answer: 1,
    explanation: "Range is much smaller than floating-point."
  },

  {
    question: "A fixed-point number with 8 fractional bits has resolution:",
    options: [
      "1/8",
      "1/16",
      "1/256",
      "1/512"
    ],
    answer: 2,
    explanation: "Resolution = 2^-8."
  },

  {
    question: "Increasing fractional bits improves:",
    options: [
      "Precision",
      "Range",
      "Memory size",
      "CPU speed"
    ],
    answer: 0,
    explanation: "More fractional bits increase precision."
  },

  {
    question: "Increasing integer bits improves:",
    options: [
      "Precision only",
      "Range",
      "Resolution",
      "Normalization"
    ],
    answer: 1,
    explanation: "More integer bits allow larger values."
  },

  {
    question: "Which system is often preferred in embedded controllers?",
    options: [
      "Fixed-point",
      "Quantum arithmetic",
      "Symbolic arithmetic",
      "BCD only"
    ],
    answer: 0,
    explanation: "Fixed-point is efficient for embedded hardware."
  },

  {
    question: "Overflow in fixed-point systems occurs when:",
    options: [
      "Precision increases",
      "Value exceeds available bits",
      "Binary point shifts",
      "Division occurs"
    ],
    answer: 1,
    explanation: "Values beyond representable range overflow."
  },

  {
    question: "Fixed-point representation is most suitable when:",
    options: [
      "Huge dynamic range is required",
      "Predictable scaling is needed",
      "Infinite precision is needed",
      "Scientific notation is required"
    ],
    answer: 1,
    explanation: "Fixed scaling makes computations predictable."
  },

  {
    question: "Compared to floating-point, fixed-point arithmetic has:",
    options: [
      "Greater dynamic range",
      "Less dynamic range",
      "Infinite dynamic range",
      "Identical range"
    ],
    answer: 1,
    explanation: "Floating-point supports much larger ranges."
  },

  {
    question: "Q-format numbers are associated with:",
    options: [
      "Floating-point",
      "Fixed-point",
      "Complex numbers",
      "Hexadecimal arithmetic"
    ],
    answer: 1,
    explanation: "Q-format is a common fixed-point notation."
  },

  {
    question: "A Q8.8 format allocates:",
    options: [
      "8 integer bits and 8 fractional bits",
      "16 integer bits",
      "8 exponent bits",
      "8 sign bits"
    ],
    answer: 0,
    explanation: "Q8.8 means 8 bits for integer part and 8 for fraction."
  }

],

ieee754: [

  {
    question: "IEEE 754 is a standard for:",
    options: [
      "Integer arithmetic",
      "Floating-point arithmetic",
      "Database storage",
      "Operating systems"
    ],
    answer: 1,
    explanation: "IEEE 754 defines floating-point representation and arithmetic."
  },

  {
    question: "IEEE 754 single precision uses:",
    options: [
      "16 bits",
      "32 bits",
      "64 bits",
      "128 bits"
    ],
    answer: 1,
    explanation: "Single precision occupies 32 bits."
  },

  {
    question: "IEEE 754 double precision uses:",
    options: [
      "32 bits",
      "48 bits",
      "64 bits",
      "128 bits"
    ],
    answer: 2,
    explanation: "Double precision occupies 64 bits."
  },

  {
    question: "How many sign bits are present in IEEE 754 single precision?",
    options: [
      "0",
      "1",
      "8",
      "23"
    ],
    answer: 1,
    explanation: "One bit stores the sign."
  },

  {
    question: "The exponent field in single precision contains:",
    options: [
      "8 bits",
      "11 bits",
      "23 bits",
      "52 bits"
    ],
    answer: 0,
    explanation: "Single precision uses 8 exponent bits."
  },

  {
    question: "The mantissa (fraction) field in single precision contains:",
    options: [
      "8 bits",
      "11 bits",
      "23 bits",
      "52 bits"
    ],
    answer: 2,
    explanation: "Single precision stores 23 fraction bits."
  },

  {
    question: "The exponent field in double precision contains:",
    options: [
      "8 bits",
      "11 bits",
      "23 bits",
      "52 bits"
    ],
    answer: 1,
    explanation: "Double precision uses 11 exponent bits."
  },

  {
    question: "The mantissa field in double precision contains:",
    options: [
      "23 bits",
      "32 bits",
      "52 bits",
      "64 bits"
    ],
    answer: 2,
    explanation: "Double precision stores 52 fraction bits."
  },

  {
    question: "Why is exponent bias used?",
    options: [
      "To store negative exponents without a sign bit",
      "To increase RAM",
      "To remove mantissa",
      "To avoid normalization"
    ],
    answer: 0,
    explanation: "Bias allows positive storage of negative exponents."
  },

  {
    question: "The exponent bias for single precision is:",
    options: [
      "63",
      "127",
      "255",
      "1023"
    ],
    answer: 1,
    explanation: "Single precision uses bias = 127."
  },

  {
    question: "The exponent bias for double precision is:",
    options: [
      "127",
      "255",
      "511",
      "1023"
    ],
    answer: 3,
    explanation: "Double precision uses bias = 1023."
  },

  {
    question: "Which value is represented when exponent bits are all zeros and fraction bits are all zeros?",
    options: [
      "+∞",
      "NaN",
      "0",
      "1"
    ],
    answer: 2,
    explanation: "This pattern represents signed zero."
  },

  {
    question: "Exponent all ones and fraction all zeros represent:",
    options: [
      "NaN",
      "Infinity",
      "Zero",
      "Machine epsilon"
    ],
    answer: 1,
    explanation: "This encoding is used for ±∞."
  },

  {
    question: "Exponent all ones with non-zero fraction represents:",
    options: [
      "Infinity",
      "Machine epsilon",
      "NaN",
      "Overflow"
    ],
    answer: 2,
    explanation: "NaN = Not a Number."
  },

  {
    question: "Subnormal numbers exist primarily to:",
    options: [
      "Increase precision near zero",
      "Increase exponent range",
      "Remove overflow",
      "Store integers"
    ],
    answer: 0,
    explanation: "Subnormals provide gradual underflow."
  }

],

machineEpsilon: [

  {
    question: "Machine epsilon is defined as:",
    options: [
      "Largest representable number",
      "Smallest positive number",
      "Smallest value that changes 1 when added to it",
      "Maximum rounding error"
    ],
    answer: 2,
    explanation: "Machine epsilon measures precision around 1."
  },

  {
    question: "Machine epsilon is a measure of:",
    options: [
      "Range",
      "Precision",
      "Memory usage",
      "CPU speed"
    ],
    answer: 1,
    explanation: "It quantifies floating-point precision."
  },

  {
    question: "A smaller machine epsilon implies:",
    options: [
      "Lower precision",
      "Higher precision",
      "Smaller RAM",
      "Larger overflow"
    ],
    answer: 1,
    explanation: "Smaller epsilon means finer numerical resolution."
  },

  {
    question: "Machine epsilon depends primarily on:",
    options: [
      "Mantissa length",
      "Exponent size",
      "Clock frequency",
      "Cache size"
    ],
    answer: 0,
    explanation: "Precision is determined by mantissa bits."
  },

  {
    question: "Machine epsilon for IEEE 754 single precision is approximately:",
    options: [
      "10⁻²",
      "10⁻⁴",
      "10⁻⁷",
      "10⁻¹²"
    ],
    answer: 2,
    explanation: "Single precision epsilon ≈ 1.19 × 10⁻⁷."
  },

  {
    question: "Machine epsilon for IEEE 754 double precision is approximately:",
    options: [
      "10⁻⁷",
      "10⁻¹⁰",
      "10⁻¹⁶",
      "10⁻²⁰"
    ],
    answer: 2,
    explanation: "Double precision epsilon ≈ 2.22 × 10⁻¹⁶."
  },

  {
    question: "Machine epsilon is useful when analyzing:",
    options: [
      "Rounding errors",
      "Sorting algorithms",
      "File compression",
      "Networking"
    ],
    answer: 0,
    explanation: "It helps estimate numerical precision limits."
  },

  {
    question: "Which expression is commonly used to determine machine epsilon?",
    options: [
      "Find smallest ε such that 1 + ε > 1",
      "Find largest integer",
      "Find maximum exponent",
      "Find minimum RAM"
    ],
    answer: 0,
    explanation: "This is the standard computational definition."
  },

  {
    question: "Machine epsilon provides an estimate of:",
    options: [
      "Relative rounding error",
      "Absolute overflow",
      "Memory allocation",
      "Execution time"
    ],
    answer: 0,
    explanation: "It approximates the upper bound of relative error."
  },

  {
    question: "If ε is machine epsilon, then values smaller than ε near 1 are often:",
    options: [
      "Detected exactly",
      "Ignored due to rounding",
      "Converted to infinity",
      "Converted to NaN"
    ],
    answer: 1,
    explanation: "They may be too small to affect representation."
  },

  {
    question: "Machine epsilon is most closely related to:",
    options: [
      "Overflow",
      "Precision loss",
      "Exponent bias",
      "Integer arithmetic"
    ],
    answer: 1,
    explanation: "It quantifies floating-point precision limits."
  },

  {
    question: "Why is machine epsilon important in numerical methods?",
    options: [
      "It helps estimate achievable accuracy",
      "It removes truncation error",
      "It guarantees convergence",
      "It increases memory capacity"
    ],
    answer: 0,
    explanation: "Numerical results cannot usually be trusted beyond machine precision."
  }

]
