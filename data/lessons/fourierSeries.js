export const fourierSeriesLesson = {
  id: "l45",

  title: "Fourier Series",

  simulation: "fourierseries",

  pages: [

    {
      title: "1. Introduction",
      content: `
Fourier Series is one of the most important ideas in mathematics and engineering.

It states that any periodic signal can be represented as a sum of sine and cosine waves.

Instead of studying a complicated waveform directly, we break it into simpler components.

Complex Signal

↓

Collection of Simple Sinusoids

This principle forms the foundation of signal processing, communication systems, image compression, and modern data science.
`
    },

    {
      title: "2. Why Fourier Series Exists",
      content: `
Many natural signals are periodic.

Examples:

• Musical tones
• Electrical power signals
• Rotating machinery vibrations
• Radio waves

Direct analysis of these signals can be difficult.

Fourier Series allows us to analyze them frequency by frequency.

This often reveals information hidden in the original waveform.
`
    },

    {
      title: "3. Periodic Functions",
      content: `
A periodic function repeats itself after a fixed interval.

Mathematically:

f(t) = f(t + T)

where:

T = Period

Examples:

sin(t)

cos(t)

Square waves

Sawtooth waves

Triangular waves

Fourier Series applies specifically to periodic functions.
`
    },

    {
      title: "4. Fundamental Frequency",
      content: `
For a periodic signal with period T:

Fundamental Frequency:

f₀ = 1/T

Angular Frequency:

ω₀ = 2π/T

This frequency forms the basis of the entire Fourier Series.

All other frequencies are integer multiples of the fundamental frequency.
`
    },

    {
      title: "5. Harmonics",
      content: `
Harmonics are frequencies that are multiples of the fundamental frequency.

Examples:

1st harmonic = f₀

2nd harmonic = 2f₀

3rd harmonic = 3f₀

4th harmonic = 4f₀

Higher harmonics contribute additional detail to the signal.
`
    },

    {
      title: "6. Fourier Series Formula",
      content: `
The trigonometric Fourier Series is:

f(t) = a₀/2 +
Σ [aₙ cos(nω₀t) + bₙ sin(nω₀t)]

where:

a₀ = average component

aₙ = cosine coefficients

bₙ = sine coefficients

n = harmonic number

The coefficients determine how much of each frequency is present.
`
    },

    {
      title: "7. The DC Component",
      content: `
The term:

a₀/2

is called the DC component.

It represents the average value of the signal over one period.

If the signal oscillates around zero:

DC Component = 0

If the signal has an offset:

DC Component ≠ 0
`
    },

    {
      title: "8. Cosine Coefficients",
      content: `
Cosine coefficients are given by:

aₙ =
(2/T)
∫ f(t)cos(nω₀t) dt

These coefficients measure the contribution of cosine waves at each harmonic.
`
    },

    {
      title: "9. Sine Coefficients",
      content: `
Sine coefficients are:

bₙ =
(2/T)
∫ f(t)sin(nω₀t) dt

They measure the contribution of sine waves at each harmonic frequency.
`
    },

    {
      title: "10. Orthogonality",
      content: `
The entire Fourier Series depends on orthogonality.

Sine and cosine functions satisfy special integral relationships.

These relationships allow individual frequencies to be isolated independently.

Without orthogonality, Fourier analysis would not work.
`
    },

    {
      title: "11. Even Functions",
      content: `
An even function satisfies:

f(-t)=f(t)

Examples:

cos(t)

t²

For even functions:

All sine coefficients vanish.

bₙ = 0

Only cosine terms remain.
`
    },

    {
      title: "12. Odd Functions",
      content: `
An odd function satisfies:

f(-t) = -f(t)

Examples:

sin(t)

t³

For odd functions:

All cosine coefficients vanish.

aₙ = 0

Only sine terms remain.
`
    },

    {
      title: "13. Square Wave Example",
      content: `
A square wave can be represented as:

f(t) =
(4/π)
[
sin(ω₀t)
+
1/3 sin(3ω₀t)
+
1/5 sin(5ω₀t)
+ ...
]

Only odd harmonics appear.

This is one of the most famous Fourier Series examples.
`
    },

    {
      title: "14. Sawtooth Wave Example",
      content: `
Sawtooth waves contain:

Fundamental frequency

+
All higher harmonics

Their harmonic content decreases gradually as frequency increases.

They produce a rich frequency spectrum.
`
    },

    {
      title: "15. Triangular Wave Example",
      content: `
Triangular waves contain:

Only odd harmonics

Amplitude decreases much faster than for square waves.

As a result, triangular waves appear smoother.
`
    },

    {
      title: "16. Convergence",
      content: `
As more harmonics are added:

Fourier approximation becomes increasingly accurate.

1 harmonic

↓

5 harmonics

↓

20 harmonics

↓

100 harmonics

The approximation approaches the original waveform.
`
    },

    {
      title: "17. Gibbs Phenomenon",
      content: `
Near discontinuities, Fourier approximations exhibit oscillations.

This behavior is called Gibbs Phenomenon.

Even with infinitely many harmonics, small oscillations remain near jumps.

It is a fundamental property of Fourier Series.
`
    },

    {
      title: "18. Applications",
      content: `
Fourier Series is used in:

• Signal Processing
• Electronics
• Control Systems
• Acoustics
• Mechanical Vibrations
• Image Analysis
• Communication Engineering

Many modern technologies depend on Fourier decompositions.
`
    },

    {
      title: "19. Connection to Fourier Transform",
      content: `
Fourier Series handles periodic signals.

Fourier Transform handles non-periodic signals.

The Fourier Transform can be viewed as an extension of Fourier Series where the period becomes infinitely large.

Thus Fourier Series naturally leads to Fourier Transform theory.
`
    },

    {
      title: "20. Summary",
      content: `
Key Ideas:

• Periodic signals
• Fundamental frequency
• Harmonics
• Fourier coefficients
• Orthogonality
• Even and odd functions
• Convergence
• Gibbs phenomenon

Fourier Series provides a powerful method for representing complex periodic signals using simple sine and cosine waves.
`
    }

  ]
};
