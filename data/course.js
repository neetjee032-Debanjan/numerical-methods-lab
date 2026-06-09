export const course = {
  title: "Numerical Methods",

  modules: [

    {
      id: "m1",
      title: "Numbers, Precision & Errors",
      lessons: [
        {
          id: "l1",
          title: "Floating Point Representation",
          pages: [
            { title: "Concept", content: "Floating point numbers use sign, exponent, mantissa." },
            { title: "Why needed", content: "Computers approximate real numbers." },
            { title: "Error", content: "Leads to rounding errors." }
          ]
        }
      ]
    },

    {
      id: "m2",
      title: "Root Finding Methods",
      lessons: [
        {
          id: "l2",
          title: "Bisection Method",
          simulation: "bisection",
          pages: [
            { title: "Idea", content: "Divide interval repeatedly to find root." }
          ]
        },

        {
          id: "l3",
          title: "Newton-Raphson Method",
          simulation: "newton",
          pages: [
            { title: "Formula", content: "x(n+1)=x - f(x)/f'(x)" }
          ]
        }
      ]
    },

    {
      id: "m3",
      title: "Interpolation",
      lessons: [
        {
          id: "l4",
          title: "Lagrange Interpolation",
          simulation: "lagrange",
          pages: [
            { title: "Concept", content: "Polynomial through points." }
          ]
        }
      ]
    },

    {
      id: "m4",
      title: "Numerical Integration",
      lessons: [
        {
          id: "l5",
          title: "Trapezoidal Rule",
          simulation: "trapezoid",
          pages: [
            { title: "Concept", content: "Area approximation using trapezoids." }
          ]
        }
      ]
    },

    {
      id: "m5",
      title: "Differential Equations",
      lessons: [
        {
          id: "l6",
          title: "Euler Method",
          simulation: "euler",
          pages: [
            { title: "Concept", content: "Stepwise ODE approximation." }
          ]
        }
      ]
    }
  ]
};
