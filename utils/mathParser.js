export function parseMathExpression(expression) {

  return expression

    .replace(/\^/g, "**")

    .replace(/\bpi\b/gi, "Math.PI")

    .replace(/\bsin\(/gi, "Math.sin(")
    .replace(/\bcos\(/gi, "Math.cos(")
    .replace(/\btan\(/gi, "Math.tan(")

    .replace(/\basin\(/gi, "Math.asin(")
    .replace(/\bacos\(/gi, "Math.acos(")
    .replace(/\batan\(/gi, "Math.atan(")

    .replace(/\bsqrt\(/gi, "Math.sqrt(")

    .replace(/\bexp\(/gi, "Math.exp(")

    .replace(/\blog\(/gi, "Math.log(")

    .replace(/\babs\(/gi, "Math.abs(")

    .replace(/\bfloor\(/gi, "Math.floor(")
    .replace(/\bceil\(/gi, "Math.ceil(")

    .replace(/\bround\(/gi, "Math.round(");
}
