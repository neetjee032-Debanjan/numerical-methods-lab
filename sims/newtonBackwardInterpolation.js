export function runNewtonBackwardInterpolation(container){

container.innerHTML = `

<div
style="
padding:24px;
background:rgba(15,23,42,.75);
backdrop-filter:blur(12px);
border-radius:20px;
border:1px solid rgba(255,255,255,.08);
color:white;
font-family:Inter,sans-serif;
"
>

<h2
style="
margin-bottom:10px;
color:#60a5fa;
"
>
Newton Backward Interpolation Laboratory
</h2>

<p
style="
color:#94a3b8;
margin-bottom:25px;
"
>
Perform interpolation using Newton's Backward Difference Method.
Ideal for estimating values near the last tabulated point.
</p>

<div
style="
display:flex;
gap:20px;
flex-wrap:wrap;
align-items:flex-start;
"
>

<div
style="
flex:1;
min-width:340px;
"
>

<h3>
Data Points
</h3>

<table
id="pointTable"
style="
width:100%;
border-collapse:collapse;
margin-top:10px;
"
>
</table>

<div
style="
display:flex;
gap:10px;
margin-top:15px;
flex-wrap:wrap;
"
>

<button id="addRowBtn">
➕ Add Point
</button>

<button id="removeRowBtn">
➖ Remove Point
</button>

<button id="resetBtn">
🔄 Reset
</button>

</div>

</div>

<div
style="
flex:1;
min-width:340px;
"
>

<h3>
Interpolation Controls
</h3>

<div
style="
margin-top:15px;
"
>

<label>
Evaluate At x =
</label>

<input
id="interpX"
type="number"
step="0.1"
value="3.6"
style="
padding:10px;
margin-left:10px;
width:120px;
"
>

</div>

<div
style="
margin-top:15px;
"
>

<button
id="computeBtn"
style="
background:#2563eb;
color:white;
border:none;
padding:12px 20px;
border-radius:10px;
cursor:pointer;
font-weight:bold;
"
>
Compute Interpolation
</button>

</div>

<div
id="resultPanel"
style="
margin-top:20px;
"
>
</div>

</div>

</div>

<hr
style="
margin:30px 0;
border-color:rgba(255,255,255,.08);
"
>

<div id="uPanel"></div>

<div id="differenceTable"></div>

<div id="formulaPanel"></div>

<div id="stepsPanel"></div>

<div id="graphPanel"></div>

<div id="qualityPanel"></div>

</div>

`;

let points = [

{x:1,y:2},
{x:2,y:5},
{x:3,y:10},
{x:4,y:17}

];

const pointTable =
container.querySelector("#pointTable");

const addRowBtn =
container.querySelector("#addRowBtn");

const removeRowBtn =
container.querySelector("#removeRowBtn");

const resetBtn =
container.querySelector("#resetBtn");

const computeBtn =
container.querySelector("#computeBtn");

const interpX =
container.querySelector("#interpX");

const resultPanel =
container.querySelector("#resultPanel");

const differenceTable =
container.querySelector("#differenceTable");

const formulaPanel =
container.querySelector("#formulaPanel");

const stepsPanel =
container.querySelector("#stepsPanel");

const graphPanel =
container.querySelector("#graphPanel");

const qualityPanel =
container.querySelector("#qualityPanel");

const uPanel =
container.querySelector("#uPanel");

function renderPointTable(){

pointTable.innerHTML = `
<tr>
<th>x</th>
<th>y</th>
</tr>
`;

points.forEach((p,index)=>{

pointTable.innerHTML += `

<tr>

<td>

<input
type="number"
value="${p.x}"
data-x="${index}"
style="
width:100%;
padding:8px;
"
>

</td>

<td>

<input
type="number"
value="${p.y}"
data-y="${index}"
style="
width:100%;
padding:8px;
"
>

</td>

</tr>

`;

});

attachEditors();

}

function attachEditors(){

pointTable
.querySelectorAll("[data-x]")
.forEach(input=>{

input.oninput = ()=>{

points[
Number(
input.dataset.x
)
].x =
parseFloat(input.value);

};

});

pointTable
.querySelectorAll("[data-y]")
.forEach(input=>{

input.oninput = ()=>{

points[
Number(
input.dataset.y
)
].y =
parseFloat(input.value);

};

});

}

renderPointTable();
function buildBackwardDifferenceTable(){

const n =
points.length;

const table =
Array.from(
{length:n},
()=>Array(n).fill(null)
);

for(
let i=0;
i<n;
i++
){

table[i][0] =
Number(points[i].y);

}

for(
let j=1;
j<n;
j++
){

for(
let i=n-1;
i>=j;
i--
){

table[i][j] =

table[i][j-1]
-
table[i-1][j-1];

}

}

return table;

}

function renderDifferenceTable(){

const diff =
buildBackwardDifferenceTable();

let html = `

<div
style="
margin-top:25px;
padding:20px;
border-radius:16px;
background:#111827;
overflow:auto;
"
>

<h3>
Backward Difference Table
</h3>

<table
style="
border-collapse:collapse;
margin-top:15px;
min-width:800px;
"
>

<tr>

<th style="padding:8px;">
x
</th>

<th style="padding:8px;">
y
</th>

`;

for(
let j=1;
j<points.length;
j++
){

html += `

<th
style="
padding:8px;
color:#60a5fa;
"
>

∇${j}

</th>

`;

}

html += `</tr>`;

for(
let i=0;
i<points.length;
i++
){

html += `<tr>`;

html += `

<td
style="
padding:8px;
"
>

${points[i].x}

</td>

`;

for(
let j=0;
j<=i;
j++
){

if(
diff[i][j] !== null
){

html += `

<td
style="
padding:8px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
"
>

${Number(
diff[i][j]
).toFixed(6)}

</td>

`;

}

}

html += `</tr>`;

}

html += `
</table>
</div>
`;

differenceTable.innerHTML =
html;

}

function factorial(n){

let f = 1;

for(
let i=2;
i<=n;
i++
){

f *= i;

}

return f;

}

function backwardInterpolation(x){

const diff =
buildBackwardDifferenceTable();

const n =
points.length;

const h =
points[1].x -
points[0].x;

const xn =
points[n-1].x;

const u =
(
x - xn
)
/
h;

let result =
points[n-1].y;

let formula = `

P(x)
=
${points[n-1].y}

`;

let steps = `
<h3>
Calculation Steps
</h3>
`;

for(
let i=1;
i<n;
i++
){

let product = 1;

for(
let j=0;
j<i;
j++
){

product *=
(u+j);

}

const term =

(
product *
diff[n-1][i]
)

/

factorial(i);

result += term;

steps += `

<div
style="
margin-bottom:12px;
padding:12px;
border-radius:12px;
background:#1e293b;
"
>

Order ${i}

<br><br>

Backward Difference:

<b>

${diff[n-1][i].toFixed(8)}

</b>

<br><br>

Contribution:

<b>

${term.toFixed(8)}

</b>

</div>

`;

}

return {

u,
value:result,
formula,
steps

};

}

function renderUCalculation(u,h,xn,x){

uPanel.innerHTML = `

<div
style="
margin-top:25px;
padding:20px;
border-radius:16px;
background:#0f172a;
"
>

<h3>
u Calculation
</h3>

<div
style="
margin-top:15px;
line-height:1.8;
font-size:18px;
"
>

u = (x − xn)/h

<br><br>

u = (${x} − ${xn}) / ${h}

<br><br>

<b>

u = ${u.toFixed(6)}

</b>

</div>

</div>

`;

}
function renderFormula(formula){

formulaPanel.innerHTML = `

<div
style="
margin-top:25px;
padding:20px;
border-radius:16px;
background:#0f172a;
"
>

<h3>
Newton Backward Formula
</h3>

<div
style="
margin-top:15px;
font-size:18px;
line-height:1.8;
color:#e2e8f0;
"
>

${formula}

</div>

</div>

`;

}

function renderResult(value){

resultPanel.innerHTML = `

<div
style="
padding:16px;
border-radius:14px;
background:#14532d;
margin-top:15px;
"
>

Interpolated Value

<br><br>

<div
style="
font-size:32px;
font-weight:bold;
color:#86efac;
"
>

${value.toFixed(8)}

</div>

</div>

`;

}

function renderQuality(){

if(points.length < 3) return;

let spacing = [];

for(
let i=1;
i<points.length;
i++
){

spacing.push(
points[i].x -
points[i-1].x
);

}

const avg =

spacing.reduce(
(a,b)=>a+b,
0
)
/
spacing.length;

let error = 0;

spacing.forEach(v=>{

error +=
Math.abs(v-avg);

});

let quality =
100 -
Math.min(
100,
error*15
);

quality =
Math.round(quality);

qualityPanel.innerHTML = `

<div
style="
margin-top:25px;
padding:20px;
border-radius:16px;
background:#111827;
"
>

<h3>
Interpolation Confidence
</h3>

<div
style="
margin-top:15px;
height:22px;
background:#1e293b;
border-radius:999px;
overflow:hidden;
"
>

<div
style="
height:100%;
width:${quality}%;
background:#22c55e;
"
>
</div>

</div>

<div
style="
margin-top:10px;
font-size:18px;
"
>

${quality}% Confidence

</div>

</div>

`;

}

function renderGraph(xTarget,yTarget){

graphPanel.innerHTML = `

<div
style="
margin-top:25px;
padding:20px;
border-radius:16px;
background:#0f172a;
"
>

<h3>
Interpolation Graph
</h3>

<canvas
id="backwardCanvas"
width="900"
height="450"
style="
margin-top:15px;
background:#020617;
border:1px solid #334155;
border-radius:12px;
max-width:100%;
"
>
</canvas>

</div>

`;

const canvas =
graphPanel.querySelector(
"#backwardCanvas"
);

const ctx =
canvas.getContext("2d");

const W =
canvas.width;

const H =
canvas.height;

const xs =
points.map(
p=>p.x
);

const ys =
points.map(
p=>p.y
);

const minX =
Math.min(...xs);

const maxX =
Math.max(...xs);

const minY =
Math.min(...ys);

const maxY =
Math.max(...ys);

function SX(x){

return 60 +

(
(x-minX)
/
(maxX-minX)
)
*
(W-120);

}

function SY(y){

return H-60 -

(
(y-minY)
/
(maxY-minY)
)
*
(H-120);

}

ctx.strokeStyle =
"#334155";

for(
let i=0;
i<10;
i++
){

ctx.beginPath();

ctx.moveTo(
0,
i*50
);

ctx.lineTo(
W,
i*50
);

ctx.stroke();

}

ctx.strokeStyle =
"#22c55e";

ctx.lineWidth = 3;

ctx.beginPath();

for(
let i=0;
i<points.length;
i++
){

const px =
SX(points[i].x);

const py =
SY(points[i].y);

if(i===0){

ctx.moveTo(px,py);

}else{

ctx.lineTo(px,py);

}

}

ctx.stroke();

points.forEach(p=>{

ctx.fillStyle =
"#60a5fa";

ctx.beginPath();

ctx.arc(
SX(p.x),
SY(p.y),
6,
0,
Math.PI*2
);

ctx.fill();

});

ctx.fillStyle =
"#f59e0b";

ctx.beginPath();

ctx.arc(
SX(xTarget),
SY(yTarget),
8,
0,
Math.PI*2
);

ctx.fill();

ctx.fillStyle =
"white";

ctx.font =
"16px Arial";

ctx.fillText(
"Interpolated Point",
SX(xTarget)+10,
SY(yTarget)-10
);

}

computeBtn.onclick = () => {

try{

points.sort(
(a,b)=>a.x-b.x
);

renderPointTable();

const x =
parseFloat(
interpX.value
);

const h =
points[1].x -
points[0].x;

const xn =
points[
points.length-1
].x;

const result =
backwardInterpolation(x);

renderUCalculation(
result.u,
h,
xn,
x
);

renderDifferenceTable();

renderFormula(
result.formula
);

stepsPanel.innerHTML = `

<div
style="
margin-top:25px;
padding:20px;
border-radius:16px;
background:#111827;
"
>

${result.steps}

</div>

`;

renderResult(
result.value
);

renderGraph(
x,
result.value
);

renderQuality();

}
catch(err){

resultPanel.innerHTML = `

<div
style="
padding:16px;
border-radius:12px;
background:#7f1d1d;
color:white;
"
>

Error:

${err.message}

</div>

`;

}

};

addRowBtn.onclick = () => {

const lastX =
points.length
? points[
points.length-1
].x
: 0;

points.push({

x:lastX+1,

y:0

});

renderPointTable();

};

removeRowBtn.onclick = () => {

if(
points.length > 2
){

points.pop();

renderPointTable();

}

};

resetBtn.onclick = () => {

points = [

{x:1,y:2},
{x:2,y:5},
{x:3,y:10},
{x:4,y:17}

];

interpX.value = "3.6";

renderPointTable();

uPanel.innerHTML = "";

differenceTable.innerHTML = "";

formulaPanel.innerHTML = "";

stepsPanel.innerHTML = "";

graphPanel.innerHTML = "";

resultPanel.innerHTML = "";

qualityPanel.innerHTML = "";

};

renderDifferenceTable();

renderQuality();

}
