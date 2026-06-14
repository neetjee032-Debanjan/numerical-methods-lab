import { parseMathExpression }
from "./mathParser.js";

export function evaluateFunction(
  expression,
  x
) {

  const parsed =
    parseMathExpression(
      expression
    );

  return Function(
    "x",
    `
      return ${parsed};
    `
  )(x);
}
