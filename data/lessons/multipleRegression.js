export const multipleRegressionLesson = {
  id: "l41",

  title: "Multiple Linear Regression",

  pages: [

    {
      title: "1. Introduction",
      content: `
Simple linear regression uses one independent variable.

Example:

y = a + bx

However, many real-world systems depend on multiple variables simultaneously.

Examples:

• House price depends on area, location, age, and amenities.
• Crop yield depends on rainfall, temperature, and fertilizer.
• Student performance depends on study hours, attendance, and sleep.

Multiple Linear Regression extends regression to include several predictors.
`
    },

    {
      title: "2. Mathematical Model",
      content: `
The multiple linear regression model is:

y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ

where:

y = dependent variable

x₁, x₂, ... , xₙ = independent variables

β₀ = intercept

β₁, β₂, ... , βₙ = regression coefficients

Each coefficient measures the effect of its predictor while keeping all other variables constant.
`
    },

    {
      title: "3. Example",
      content: `
Suppose house prices depend on:

x₁ = area (sq ft)

x₂ = age (years)

Regression model:

Price = 50000 + 120(area) − 900(age)

Interpretation:

• Each extra square foot increases price by ₹120.
• Each additional year decreases price by ₹900.
`
    },

    {
      title: "4. Matrix Representation",
      content: `
Multiple regression is conveniently written in matrix form.

Y = Xβ + ε

where:

Y = observation vector

X = design matrix

β = coefficient vector

ε = error vector

Matrix notation allows compact and efficient computation.
`
    },

    {
      title: "5. Least Squares Estimation",
      content: `
The objective remains:

Minimize

SSE = Σ(y − ŷ)²

The least-squares solution becomes:

β = (XᵀX)⁻¹XᵀY

This formula produces coefficients that minimize the total squared error.
`
    },

    {
      title: "6. Interpretation of Coefficients",
      content: `
Each coefficient describes the isolated contribution of one predictor.

Example:

y = 10 + 4x₁ + 7x₂

Interpretation:

• Increasing x₁ by 1 increases y by 4.
• Increasing x₂ by 1 increases y by 7.

All other variables are assumed fixed during interpretation.
`
    },

    {
      title: "7. Multicollinearity",
      content: `
A major challenge is multicollinearity.

This occurs when predictors are strongly correlated with each other.

Example:

• Temperature in °C
• Temperature in °F

Both contain essentially the same information.

Consequences:

• Unstable coefficients
• Difficult interpretation
• Increased variance
`
    },

    {
      title: "8. Assumptions",
      content: `
Multiple regression assumes:

• Linear relationship
• Independent observations
• Constant variance of residuals
• Normally distributed errors
• No severe multicollinearity

Violations may reduce model reliability.
`
    },

    {
      title: "9. Applications",
      content: `
Applications include:

• Economics
• Finance
• Engineering
• Medicine
• Machine Learning
• Environmental science

Multiple regression is one of the most widely used predictive techniques.
`
    },

    {
      title: "10. Summary",
      content: `
Multiple Linear Regression models a dependent variable using several predictors.

Key ideas:

• Multiple predictors
• Matrix formulation
• Least-squares estimation
• Coefficient interpretation
• Multicollinearity
• Practical applications

It forms the foundation of modern predictive analytics and machine learning.
`
    }

  ]
};
