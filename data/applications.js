export const applications = [

{

id:"aircraft",

title:"Aircraft Design",

icon:"✈️",

description:
"Aircraft engineering extensively relies on numerical methods to design, analyse and optimize aircraft before manufacturing begins.",

sections:[

{

heading:"Structural Analysis",

text:
"Finite Difference Methods, Finite Element Methods and numerical linear algebra are used to calculate stress, strain and deformation on wings, fuselage and landing gears. Engineers solve thousands of simultaneous equations that cannot be solved analytically."

},

{

heading:"Aerodynamics",

text:
"Computational Fluid Dynamics (CFD) solves the Navier–Stokes equations numerically to study airflow around aircraft. Numerical integration, interpolation and iterative methods are heavily used."

},

{

heading:"Flight Stability",

text:
"Ordinary Differential Equation solvers such as Euler and Runge-Kutta simulate aircraft motion under changing atmospheric conditions."

},

{

heading:"Optimization",

text:
"Gradient based optimization and nonlinear numerical algorithms reduce drag while maximizing lift and fuel efficiency."

},

{

heading:"Numerical Methods Used",

list:[

"Bisection Method",

"Newton-Raphson",

"Gauss Elimination",

"LU Decomposition",

"Euler Method",

"Runge-Kutta",

"Interpolation",

"Numerical Integration"

]

}

]

},

{

id:"bridge",

title:"Bridge Analysis",

icon:"🌉",

description:
"Bridge engineers depend upon numerical methods to predict structural behaviour under traffic, wind and earthquake loading.",

sections:[

{

heading:"Applications",

text:
"Finite element models divide bridges into thousands of small elements. Large systems of equations are solved numerically to determine displacement and stresses."

},

{

heading:"Numerical Methods Used",

list:[

"Gauss Elimination",

"LU Decomposition",

"Matrix Methods",

"Interpolation",

"Numerical Integration"

]

}

]

},

{

id:"weather",

title:"Weather Forecasting",

icon:"🌦️",

description:
"Modern weather prediction is almost completely numerical.",

sections:[

{

heading:"Applications",

text:
"The atmosphere is represented using millions of grid points. Differential equations governing temperature, humidity, pressure and wind are solved every few minutes."

},

{

heading:"Numerical Methods Used",

list:[

"Euler Method",

"Runge-Kutta",

"Finite Difference",

"Interpolation",

"FFT",

"Numerical Integration"

]

}

]

},

{

id:"machinelearning",

title:"Machine Learning",

icon:"🧠",

description:
"Training modern AI models is fundamentally a numerical optimization problem.",

sections:[

{

heading:"Applications",

text:
"Optimization algorithms minimize loss functions using iterative numerical techniques. Matrix operations and numerical linear algebra are at the core of neural networks."

},

{

heading:"Numerical Methods Used",

list:[

"Gradient Descent",

"Matrix Algebra",

"Least Squares",

"Regression",

"Optimization"

]

}

]

},

{

id:"medical",

title:"Medical Imaging",

icon:"🏥",

description:
"CT, MRI and Ultrasound scanners reconstruct images using numerical algorithms.",

sections:[

{

heading:"Applications",

text:
"Tomographic reconstruction relies on interpolation, Fourier transforms and solving inverse problems numerically."

},

{

heading:"Numerical Methods Used",

list:[

"FFT",

"Interpolation",

"Least Squares",

"Numerical Integration"

]

}

]

},

{

id:"space",

title:"Space Missions",

icon:"🚀",

description:
"Every satellite and spacecraft trajectory is computed numerically.",

sections:[

{

heading:"Applications",

text:
"Orbital motion is governed by differential equations solved using high-order Runge-Kutta and predictor-corrector algorithms."

},

{

heading:"Numerical Methods Used",

list:[

"Runge-Kutta",

"Euler",

"Interpolation",

"Optimization"

]

}

]

},

{

id:"stocks",

title:"Stock Prediction",

icon:"📈",

description:
"Financial engineering applies numerical methods for forecasting and option pricing.",

sections:[

{

heading:"Applications",

text:
"Regression models, optimization and numerical integration are widely used in quantitative finance."

},

{

heading:"Numerical Methods Used",

list:[

"Regression",

"Interpolation",

"Optimization"

]

}

]

},

{

id:"game",

title:"Game Physics",

icon:"🎮",

description:
"Modern game engines simulate realistic physics numerically.",

sections:[

{

heading:"Applications",

text:
"Every moving object is updated through numerical integration of Newton's equations."

},

{

heading:"Numerical Methods Used",

list:[

"Euler",

"Runge-Kutta",

"Collision Detection"

]

}

]

},

{

id:"signal",

title:"Signal Processing",

icon:"📡",

description:
"Digital signal processing depends heavily on numerical computation.",

sections:[

{

heading:"Numerical Methods Used",

list:[

"FFT",

"Interpolation",

"Regression",

"Matrix Algebra"

]

}

]

},

{

id:"climate",

title:"Climate Modelling",

icon:"🌍",

description:
"Climate simulation solves millions of nonlinear differential equations.",

sections:[

{

heading:"Numerical Methods Used",

list:[

"Finite Difference",

"Runge-Kutta",

"Interpolation",

"Numerical Integration"

]

}

]

},

{

id:"quantum",

title:"Quantum Simulations",

icon:"⚛️",

description:
"Quantum systems are solved numerically using matrix mechanics.",

sections:[

{

heading:"Numerical Methods Used",

list:[

"Eigenvalue Algorithms",

"LU",

"Matrix Methods",

"FFT"

]

}

]

},

{

id:"telecom",

title:"Telecommunications",

icon:"📡",

description:
"Signal transmission, coding and filtering are based upon numerical computation.",

sections:[

{

heading:"Numerical Methods Used",

list:[

"FFT",

"Interpolation",

"Matrix Methods"

]

}

]

}

];
