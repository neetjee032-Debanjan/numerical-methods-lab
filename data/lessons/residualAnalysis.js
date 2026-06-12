export const residualAnalysisLesson = {
  id: "l39",

  title: "Residual Analysis",

  pages: [

    {
      title: "1. Introduction",
      content: `
Residual Analysis is the study of prediction errors produced by a regression model.

It helps evaluate model quality.
`
    },

    {
      title: "2. Residual Definition",
      content: `
Residual:

e = y − ŷ

Observed value minus predicted value.
`
    },

    {
      title: "3. Interpretation",
      content: `
Residuals indicate how far predictions deviate from actual observations.
`
    },

    {
      title: "4. Positive Residual",
      content: `
Positive residual:

Observed value is greater than predicted value.
`
    },

    {
      title: "5. Negative Residual",
      content: `
Negative residual:

Observed value is less than predicted value.
`
    },

    {
      title: "6. Zero Residual",
      content: `
Residual equal to zero means perfect prediction.
`
    },

    {
      title: "7. Residual Plot",
      content: `
Residuals are commonly visualized using residual plots.
`
    },

    {
      title: "8. Good Model Pattern",
      content: `
A good model produces residuals randomly scattered around zero.
`
    },

    {
      title: "9. Bad Model Pattern",
      content: `
Systematic patterns in residuals often indicate model problems.
`
    },

    {
      title: "10. Detecting Nonlinearity",
      content: `
Residual plots can reveal nonlinear relationships not captured by the model.
`
    },

    {
      title: "11. Detecting Outliers",
      content: `
Large residuals may indicate outliers.
`
    },

    {
      title: "12. Homoscedasticity",
      content: `
A good regression model often exhibits constant residual variance.
`
    },

    {
      title: "13. Heteroscedasticity",
      content: `
Changing residual variance can indicate modeling issues.
`
    },

    {
      title: "14. Model Improvement",
      content: `
Residual analysis often suggests ways to improve regression models.
`
    },

    {
      title: "15. Relationship with R²",
      content: `
Residual analysis complements R².

Both should be considered when evaluating a model.
`
    },

    {
      title: "16. Applications",
      content: `
Machine Learning

Engineering

Research

Forecasting
`
    },

    {
      title: "17. Practice Problems",
      content: `
1. Compute residuals.

2. Interpret residual plots.

3. Identify outliers.
`
    },

    {
      title: "18. Quiz",
      content: `
Q1. What is a residual?

Q2. What does a positive residual mean?

Q3. What does a negative residual mean?

Q4. Why use residual plots?

Q5. How do residuals help improve models?
`
    }

  ]
};
