export const spectralLeakageWindowFunctionsLesson = {
  id: "l50",

  title: "Spectral Leakage & Window Functions",

  simulation: "spectralleakage",

  pages: [

    {
      title: "1. Introduction",
      content: `
In practical signal processing, we rarely analyze infinite signals.

Instead, we analyze finite segments of data.

Unfortunately, truncating a signal introduces errors in the frequency spectrum.

One of the most important of these errors is:

Spectral Leakage

Window Functions were developed to reduce this problem.
`
    },

    {
      title: "2. Why Leakage Occurs",
      content: `
The Fourier Transform assumes signals extend indefinitely.

Real measurements are finite.

When we select a finite portion of a signal, abrupt edges are introduced.

These edges create artificial frequencies that were not present in the original signal.

The result is spectral leakage.
`
    },

    {
      title: "3. Frequency Spectrum Distortion",
      content: `
Ideally:

A pure sinusoid should produce one sharp spectral peak.

In practice:

Energy spreads into nearby frequencies.

Instead of a single spike, we observe a wider frequency distribution.

This spreading is called leakage.
`
    },

    {
      title: "4. Example of Leakage",
      content: `
Suppose a signal contains:

100 Hz

If the sampled interval does not contain an exact integer number of cycles:

The FFT spreads energy into neighboring bins.

The frequency still exists at 100 Hz, but leakage makes the spectrum appear less precise.
`
    },

    {
      title: "5. Rectangular Window",
      content: `
When no special window is applied:

The signal is effectively multiplied by a Rectangular Window.

Rectangular Window:

1 inside interval

0 outside interval

This sudden transition creates strong spectral leakage.
`
    },

    {
      title: "6. Time Domain View",
      content: `
Truncating a signal means:

Signal × Window

The window determines how the data begins and ends.

Sharp edges create discontinuities.

Discontinuities generate unwanted frequency components.
`
    },

    {
      title: "7. Frequency Domain View",
      content: `
Multiplication in time domain corresponds to:

Convolution in frequency domain.

Because the window has its own spectrum, the signal spectrum becomes smeared.

This smearing is spectral leakage.
`
    },

    {
      title: "8. Main Lobe and Side Lobes",
      content: `
Window spectra contain:

Main Lobe

Side Lobes

Main Lobe:

Contains desired frequency energy.

Side Lobes:

Cause leakage into neighboring frequencies.

Good windows attempt to reduce side lobes.
`
    },

    {
      title: "9. Window Functions",
      content: `
Window Functions modify signal edges smoothly.

Instead of abrupt cuts:

Signal gradually tapers to zero.

Benefits:

• Reduced leakage
• Cleaner spectra
• Better frequency analysis
`
    },

    {
      title: "10. Hann Window",
      content: `
The Hann Window is one of the most popular windows.

Characteristics:

• Smooth tapering
• Good leakage reduction
• Widely used in DSP

It provides a good balance between frequency resolution and leakage suppression.
`
    },

    {
      title: "11. Hamming Window",
      content: `
The Hamming Window is similar to Hann.

Advantages:

• Lower side lobes
• Better leakage suppression

Disadvantage:

• Slightly wider main lobe

Frequently used in speech processing.
`
    },

    {
      title: "12. Blackman Window",
      content: `
Blackman Window provides:

Very low side lobes

Excellent leakage reduction

Trade-off:

Poorer frequency resolution due to wider main lobe.
`
    },

    {
      title: "13. Kaiser Window",
      content: `
The Kaiser Window is highly flexible.

A parameter controls:

• Main-lobe width
• Side-lobe attenuation

Engineers can tune performance based on application requirements.
`
    },

    {
      title: "14. Comparing Windows",
      content: `
Different windows offer different compromises.

Rectangular:

Best resolution

Worst leakage

Hann:

Good balance

Hamming:

Better leakage suppression

Blackman:

Excellent leakage suppression

Kaiser:

Adjustable performance
`
    },

    {
      title: "15. Frequency Resolution Trade-Off",
      content: `
Reducing leakage comes at a cost.

Lower side lobes:

↓

Wider main lobe

Wider main lobe:

↓

Reduced frequency resolution

No window is perfect.
`
    },

    {
      title: "16. Choosing a Window",
      content: `
Selection depends on goals.

Need accurate frequencies?

Use Rectangular or Hann.

Need low leakage?

Use Hamming or Blackman.

Need flexibility?

Use Kaiser.
`
    },

    {
      title: "17. Practical FFT Workflow",
      content: `
Typical FFT analysis:

Acquire Signal

↓

Apply Window

↓

Compute FFT

↓

Analyze Spectrum

Windowing is often a mandatory preprocessing step.
`
    },

    {
      title: "18. Applications",
      content: `
Window functions appear in:

• Audio Processing
• Speech Recognition
• Radar Systems
• Medical Signal Analysis
• Communication Systems
• Vibration Analysis

Nearly every FFT-based system uses windowing.
`
    },

    {
      title: "19. Importance in DSP",
      content: `
Without windowing:

Spectral estimates may become misleading.

Peaks may appear wider.

Weak frequencies may become hidden.

Window functions greatly improve spectral reliability.
`
    },

    {
      title: "20. Summary",
      content: `
Key Concepts:

• Spectral Leakage
• Windowing
• Main Lobes
• Side Lobes
• Hann Window
• Hamming Window
• Blackman Window
• Kaiser Window

Window functions reduce leakage and are essential tools in practical frequency-domain analysis.
`
    }

  ]
};
