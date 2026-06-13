export const logisticRegressionLesson = {
  id: "l43",

  title: "Logistic Regression",

  pages: [

    {
      title: "1. Introduction",
      content: `
Logistic Regression is one of the most important predictive models in statistics, data analytics, and machine learning.

Unlike linear regression, which predicts continuous numerical values, logistic regression predicts probabilities.

Examples:

• Will a customer buy a product?
• Will a patient develop a disease?
• Will an email be spam?
• Will a student pass an exam?

The outcome is typically binary:

0 = No
1 = Yes

Thus logistic regression is primarily a classification technique.
`
    },

    {
      title: "2. Why Linear Regression Fails for Classification",
      content: `
Suppose we try to predict whether a student passes an exam.

Possible outputs:

0 = Fail
1 = Pass

A linear regression model can produce values such as:

-0.3
1.7
2.4

These values have no probabilistic meaning.

Probabilities must always lie between:

0 and 1

Logistic regression solves this problem by restricting outputs to the interval [0,1].
`
    },

    {
      title: "3. The Logistic Function",
      content: `
The core of logistic regression is the logistic (sigmoid) function.

σ(z) = 1 / (1 + e^(-z))

Properties:

• Output always lies between 0 and 1
• Smooth curve
• Monotonically increasing
• Widely used in machine learning

The sigmoid transforms any real number into a probability.
`
    },

    {
      title: "4. Shape of the Sigmoid Curve",
      content: `
The logistic function has an S-shaped curve.

Characteristics:

z → -∞  =>  σ(z) → 0

z = 0   =>  σ(z) = 0.5

z → +∞  =>  σ(z) → 1

This behavior makes it ideal for binary classification.
`
    },

    {
      title: "5. Logistic Regression Equation",
      content: `
The model is:

P(y=1) =
1 / (1 + e^-(β₀ + β₁x₁ + β₂x₂ + ...))

where:

P(y=1) = probability of class 1

β = regression coefficients

x = predictor variables

The model outputs probabilities rather than direct class labels.
`
    },

    {
      title: "6. Decision Boundary",
      content: `
After computing probabilities, we classify observations.

Typical rule:

If P ≥ 0.5

Predict Class 1

If P < 0.5

Predict Class 0

The value 0.5 is called the decision threshold.

Different applications may use different thresholds.
`
    },

    {
      title: "7. Odds and Log-Odds",
      content: `
Logistic regression is built on odds.

Odds = p / (1-p)

Example:

p = 0.8

Odds = 0.8 / 0.2 = 4

Meaning:

Success is four times more likely than failure.

Taking logarithms gives:

log(p/(1-p))

called the logit transformation.
`
    },

    {
      title: "8. Training the Model",
      content: `
Unlike linear regression, coefficients cannot be computed using ordinary least squares.

Instead, logistic regression uses:

Maximum Likelihood Estimation (MLE)

The objective is to find coefficients that maximize the probability of observing the training data.
`
    },

    {
      title: "9. Applications",
      content: `
Logistic regression is used extensively in:

• Medicine
• Finance
• Marketing
• Risk assessment
• Fraud detection
• Customer analytics
• Machine learning

It remains one of the most important classification algorithms ever developed.
`
    },

    {
      title: "10. Advantages and Limitations",
      content: `
Advantages:

• Simple
• Interpretable
• Fast
• Probabilistic output

Limitations:

• Assumes linear relationship in log-odds
• Sensitive to outliers
• Cannot easily model highly complex patterns

More advanced methods often build upon logistic regression concepts.
`
    },

    {
      title: "11. Summary",
      content: `
Logistic Regression is a probabilistic classification technique.

Key concepts:

• Binary classification
• Sigmoid function
• Probability prediction
• Decision boundaries
• Odds and log-odds
• Maximum likelihood estimation

It forms the foundation of modern classification methods in data science and machine learning.
`
    }

  ]
};
