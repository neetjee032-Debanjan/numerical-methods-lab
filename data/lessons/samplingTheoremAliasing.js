export const samplingTheoremAliasingLesson = {
  id: "l49",

  title: "Sampling Theorem & Aliasing",

  simulation: "aliasing",

  pages: [

    {
      title: "1. Introduction",
      content: `
Almost every modern digital system works with sampled signals.

Examples:

• Smartphones
• Cameras
• Microphones
• ECG machines
• Digital radios

Real-world signals are continuous, but computers require discrete samples.

The Sampling Theorem explains how continuous signals can be accurately represented using discrete samples.

Aliasing explains what happens when sampling is performed incorrectly.
`
    },

    {
      title: "2. Continuous vs Discrete Signals",
      content: `
Continuous Signal:

Exists at every instant of time.

Example:

Temperature variation.

Discrete Signal:

Exists only at sampled time points.

Example:

Digital recording.

Sampling converts continuous signals into discrete signals suitable for computation.
`
    },

    {
      title: "3. What Is Sampling?",
      content: `
Sampling means measuring a signal at regular intervals.

Example:

x(t)

↓

x[0], x[1], x[2], x[3], ...

The time interval between samples is called:

Sampling Period (Ts)

Sampling Frequency:

Fs = 1/Ts
`
    },

    {
      title: "4. Sampling Frequency",
      content: `
Sampling Frequency determines how often measurements are taken.

Examples:

8 kHz

44.1 kHz

96 kHz

1 MHz

Higher sampling frequencies capture more signal detail.
`
    },

    {
      title: "5. The Fundamental Question",
      content: `
How many samples are needed to reconstruct a signal perfectly?

Too few samples:

Information is lost.

Too many samples:

Storage requirements increase.

The Sampling Theorem provides the answer.
`
    },

    {
      title: "6. Nyquist-Shannon Sampling Theorem",
      content: `
The theorem states:

A signal can be perfectly reconstructed if:

Fs > 2Fmax

where:

Fs = Sampling Frequency

Fmax = Highest signal frequency

This is one of the most important results in signal processing.
`
    },

    {
      title: "7. Nyquist Rate",
      content: `
Nyquist Rate:

2Fmax

It is the minimum theoretical sampling frequency required to avoid information loss.

Sampling below the Nyquist Rate leads to aliasing.
`
    },

    {
      title: "8. Nyquist Frequency",
      content: `
Nyquist Frequency:

FN = Fs/2

This is the highest frequency that can be represented without ambiguity.

Any frequency above FN causes problems.
`
    },

    {
      title: "9. Example",
      content: `
Suppose a signal contains frequencies up to:

5 kHz

Then:

Nyquist Rate = 10 kHz

Valid sampling frequencies:

12 kHz

20 kHz

44.1 kHz

Invalid:

6 kHz

8 kHz

9 kHz
`
    },

    {
      title: "10. Perfect Reconstruction",
      content: `
When the Sampling Theorem is satisfied:

Original Signal

↓

Sampling

↓

Reconstruction

↓

Original Signal Recovered

No information is lost.
`
    },

    {
      title: "11. What Is Aliasing?",
      content: `
Aliasing occurs when the sampling frequency is too low.

High-frequency components appear as false lower frequencies.

The reconstructed signal becomes incorrect.

Aliasing creates distortion that cannot be corrected afterward.
`
    },

    {
      title: "12. Understanding Aliasing",
      content: `
Imagine a wheel spinning rapidly.

Under certain camera frame rates it appears:

• Stationary
• Rotating slowly
• Rotating backward

This visual illusion is aliasing.

The same phenomenon occurs in sampled signals.
`
    },

    {
      title: "13. Frequency Folding",
      content: `
Frequencies above the Nyquist Frequency fold back into lower frequencies.

Example:

Fs = 1000 Hz

Nyquist Frequency:

500 Hz

A true frequency of:

700 Hz

may appear as:

300 Hz

after sampling.
`
    },

    {
      title: "14. Mathematical View",
      content: `
Aliased Frequency:

Fa = |F − nFs|

for suitable integer n.

This equation predicts where frequencies appear after aliasing.

It explains why false frequency components emerge.
`
    },

    {
      title: "15. Anti-Aliasing Filters",
      content: `
Before sampling, engineers often apply:

Low-Pass Filters

These remove frequencies above the Nyquist limit.

Such filters are called:

Anti-Aliasing Filters

They help prevent distortion.
`
    },

    {
      title: "16. Real-World Example: Audio",
      content: `
Human hearing:

Approximately 20 Hz to 20 kHz

CD Audio:

44.1 kHz sampling

Nyquist Frequency:

22.05 kHz

This safely exceeds the audible frequency range.
`
    },

    {
      title: "17. Real-World Example: Imaging",
      content: `
Digital cameras sample spatial information.

Insufficient resolution causes:

• Moiré patterns
• Jagged edges
• False textures

These are spatial forms of aliasing.
`
    },

    {
      title: "18. Oversampling",
      content: `
Oversampling means sampling significantly above the Nyquist Rate.

Advantages:

• Reduced aliasing
• Better filtering
• Improved accuracy

Many modern systems deliberately oversample.
`
    },

    {
      title: "19. Importance in FFT Analysis",
      content: `
FFT results are only meaningful when proper sampling is used.

Poor sampling leads to:

• Incorrect spectra
• False frequencies
• Misleading conclusions

Understanding aliasing is essential before performing frequency analysis.
`
    },

    {
      title: "20. Summary",
      content: `
Key Concepts:

• Sampling
• Sampling Frequency
• Nyquist Rate
• Nyquist Frequency
• Signal Reconstruction
• Aliasing
• Frequency Folding
• Anti-Aliasing Filters
• Oversampling

The Sampling Theorem provides the foundation for digital signal processing, while aliasing explains the consequences of violating that theorem.
`
    }

  ]
};
