export function parseMathExpression(expression) {

  return expression

    /* Powers */
    .replace(/\^/g, "**")

    /* Constants */

    .replace(/\bpi\b/gi, "Math.PI")
    .replace(/\be\b/g, "Math.E")

    /* Trigonometric */

    .replace(/\bsin\(/gi, "Math.sin(")
    .replace(/\bcos\(/gi, "Math.cos(")
    .replace(/\btan\(/gi, "Math.tan(")

    .replace(/\basin\(/gi, "Math.asin(")
    .replace(/\bacos\(/gi, "Math.acos(")
    .replace(/\batan\(/gi, "Math.atan(")

    /* Hyperbolic */

    .replace(/\bsinh\(/gi, "Math.sinh(")
    .replace(/\bcosh\(/gi, "Math.cosh(")
    .replace(/\btanh\(/gi, "Math.tanh(")

    /* Roots */

    .replace(/\bsqrt\(/gi, "Math.sqrt(")

    /* Exponential */

    .replace(/\bexp\(/gi, "Math.exp(")

    /* Logarithms */

    .replace(/\bln\(/gi, "Math.log(")

    .replace(/\blog10\(/gi, "Math.log10(")

    .replace(/\blog\(/gi, "Math.log(")

    /* Misc */

    .replace(/\babs\(/gi, "Math.abs(")

    .replace(/\bfloor\(/gi, "Math.floor(")

    .replace(/\bceil\(/gi, "Math.ceil(")

    .replace(/\bround\(/gi, "Math.round(")

    .replace(/\bmax\(/gi, "Math.max(")

    .replace(/\bmin\(/gi, "Math.min(");
}
