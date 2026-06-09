export function runIntegration(container) {

container.innerHTML = `
<div style="color:white;font-family:Arial;padding:15px;">
  <h2>Numerical Integration Lab</h2>

  <label>f(x):</label>
  <input id="fn" value="x*x"/>

  <label>a:</label>
  <input id="a" type="number" value="0"/>

  <label>b:</label>
  <input id="b" type="number" value="4"/>

  <label>n (even for Simpson):</label>
  <input id="n" type="number" value="4"/>

  <select id="method">
    <option value="trap">Trapezoidal</option>
    <option value="simpson">Simpson 1/3</option>
  </select>

  <button id="run">Run</button>

  <div id="out" style="margin-top:10px;"></div>

  <table border="1" style="width:100%;margin-top:10px;color:white;">
    <tbody id="table"></tbody>
  </table>
</div>
`;

const fn = container.querySelector("#fn");
const aIn = container.querySelector("#a");
const bIn = container.querySelector("#b");
const nIn = container.querySelector("#n");
const method = container.querySelector("#method");
const out = container.querySelector("#out");
const table = container.querySelector("#table");

function f(expr,x){
  return Function("x",`return ${expr}`)(x);
}

container.querySelector("#run").onclick = () => {

  let a = +aIn.value;
  let b = +bIn.value;
  let n = +nIn.value;
  let expr = fn.value;

  let h = (b-a)/n;
  let result = 0;

  let rows = [];

  if(method.value === "trap") {

    for(let i=0;i<=n;i++){
      let x = a + i*h;
      let fx = f(expr,x);

      let weight = (i===0 || i===n) ? 1 : 2;
      result += weight * fx;

      rows.push({i,x:x.toFixed(4),fx:fx.toFixed(4),w:weight});
    }

    result *= h/2;

  } else {

    if(n % 2 !== 0){
      out.innerHTML = "Simpson requires even n";
      return;
    }

    for(let i=0;i<=n;i++){
      let x = a + i*h;
      let fx = f(expr,x);

      let weight = (i===0 || i===n) ? 1 : (i%2===0 ? 2 : 4);
      result += weight * fx;

      rows.push({i,x:x.toFixed(4),fx:fx.toFixed(4),w:weight});
    }

    result *= h/3;
  }

  out.innerHTML = `<h3>Result: ${result.toFixed(6)}</h3>`;

  table.innerHTML = rows.map(r=>`
    <tr>
      <td>${r.i}</td><td>${r.x}</td><td>${r.fx}</td><td>${r.w}</td>
    </tr>
  `).join("");
};
}
