export function runForwardDifference(container){

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
color:#60a5fa;
margin-bottom:10px;
"
>
Forward Difference Laboratory
</h2>

<p
style="
color:#94a3b8;
margin-bottom:20px;
"
>
Visualize how numerical differentiation works
and see the secant line converge to the tangent.
</p>

<div
style="
display:flex;
gap:12px;
flex-wrap:wrap;
margin-bottom:20px;
"
>

<select id="functionSelect">

<option value="x*x">
x²
</option>

<option value="Math.sin(x)">
sin(x)
</option>

<option value="x*x*x">
x³
</option>

<option value="Math.exp(x)">
eˣ
</option>

<option value="Math.cos(x)">
cos(x)
</option>

</select>

</div>

<div
style="
margin-bottom:15px;
"
>

<div>

x =
<span id="xValue">
1
</span>

</div>

<input
id="xSlider"
type="range"
min="-5"
max="5"
step="0.1"
value="1"
style="width:100%;"
/>

</div>

<div
style="
margin-bottom:20px;
"
>

<div>

h =
<span id="hValue">
1
</span>

</div>

<input
id="hSlider"
type="range"
min="0.01"
max="2"
step="0.01"
value="1"
style="width:100%;"
/>

</div>

<canvas
id="graph"
width="1000"
height="550"
style="
background:#020617;
border:1px solid #334155;
border-radius:16px;
max-width:100%;
"
>
</canvas>

<div id="results"></div>

</div>

`;

const canvas =
container.querySelector("#graph");

const ctx =
canvas.getContext("2d");

const functionSelect =
container.querySelector("#functionSelect");

const xSlider =
container.querySelector("#xSlider");

const hSlider =
container.querySelector("#hSlider");

const xValue =
container.querySelector("#xValue");

const hValue =
container.querySelector("#hValue");

const results =
container.querySelector("#results");

const W =
canvas.width;

const H =
canvas.height;

const SCALE = 50;

function worldToScreen(x,y){

return {

x:W/2 + x*SCALE,

y:H/2 - y*SCALE

};

}

function drawGrid(){

ctx.clearRect(
0,
0,
W,
H
);

ctx.fillStyle =
"#020617";

ctx.fillRect(
0,
0,
W,
H
);

ctx.strokeStyle =
"#1e293b";

for(
let x=0;
x<W;
x+=SCALE
){

ctx.beginPath();

ctx.moveTo(x,0);

ctx.lineTo(x,H);

ctx.stroke();

}

for(
let y=0;
y<H;
y+=SCALE
){

ctx.beginPath();

ctx.moveTo(0,y);

ctx.lineTo(W,y);

ctx.stroke();

}

ctx.strokeStyle =
"#94a3b8";

ctx.lineWidth = 2;

ctx.beginPath();

ctx.moveTo(0,H/2);

ctx.lineTo(W,H/2);

ctx.stroke();

ctx.beginPath();

ctx.moveTo(W/2,0);

ctx.lineTo(W/2,H);

ctx.stroke();

drawTicks();

drawAxesLabels();

}
function drawAxesLabels(){

ctx.fillStyle =
"#cbd5e1";

ctx.font =
"16px Arial";

ctx.fillText(
"X",
W-30,
H/2-10
);

ctx.fillText(
"Y",
W/2+10,
25
);

ctx.fillStyle =
"#475569";

ctx.font =
"18px Arial";

ctx.fillText(
"I",
W*0.75,
H*0.25
);

ctx.fillText(
"II",
W*0.25,
H*0.25
);

ctx.fillText(
"III",
W*0.25,
H*0.75
);

ctx.fillText(
"IV",
W*0.75,
H*0.75
);

}

function drawTicks(){

ctx.strokeStyle =
"#334155";

ctx.fillStyle =
"#64748b";

ctx.font =
"12px Arial";

for(
let i=-10;
i<=10;
i++
){

const sx =
W/2 + i*SCALE;

ctx.beginPath();

ctx.moveTo(
sx,
H/2-5
);

ctx.lineTo(
sx,
H/2+5
);

ctx.stroke();

if(i!==0){

ctx.fillText(
i,
sx-4,
H/2+20
);

}

}

for(
let i=-5;
i<=5;
i++
){

const sy =
H/2 - i*SCALE;

ctx.beginPath();

ctx.moveTo(
W/2-5,
sy
);

ctx.lineTo(
W/2+5,
sy
);

ctx.stroke();

if(i!==0){

ctx.fillText(
i,
W/2+10,
sy+4
);

}

}

}

function getFunction(){

return new Function(
"x",
`return ${functionSelect.value};`
);

}

function plotFunction(){

const f =
getFunction();

ctx.beginPath();

ctx.strokeStyle =
"#22c55e";

ctx.lineWidth = 3;

let started =
false;

for(
let x=-10;
x<=10;
x+=0.02
){

let y;

try{

y = f(x);

}
catch{

continue;

}

if(
!isFinite(y)
)
continue;

const s =
worldToScreen(
x,
y
);

if(!started){

ctx.moveTo(
s.x,
s.y
);

started = true;

}
else{

ctx.lineTo(
s.x,
s.y
);

}

}

ctx.stroke();

}
function drawForwardDifferenceLab(){

const f =
getFunction();

const x =
Number(
xSlider.value
);

const h =
Number(
hSlider.value
);

xValue.textContent =
x.toFixed(2);

hValue.textContent =
h.toFixed(2);

let fx;
let fxh;

try{

fx =
f(x);

fxh =
f(x+h);

}
catch{

return;

}

if(
!isFinite(fx) ||
!isFinite(fxh)
)
return;

const derivative =

(fxh-fx)/h;

const p1 =
worldToScreen(
x,
fx
);

const p2 =
worldToScreen(
x+h,
fxh
);

ctx.beginPath();

ctx.arc(
p1.x,
p1.y,
8,
0,
Math.PI*2
);

ctx.fillStyle =
"#f59e0b";

ctx.fill();

ctx.beginPath();

ctx.arc(
p2.x,
p2.y,
8,
0,
Math.PI*2
);

ctx.fillStyle =
"#ef4444";

ctx.fill();

ctx.strokeStyle =
"#fbbf24";

ctx.lineWidth = 3;

ctx.beginPath();

ctx.moveTo(
p1.x,
p1.y
);

ctx.lineTo(
p2.x,
p2.y
);

ctx.stroke();

const tangentLength = 2;

const tx1 =
x-tangentLength;

const ty1 =
fx-
derivative*
tangentLength;

const tx2 =
x+tangentLength;

const ty2 =
fx+
derivative*
tangentLength;

const t1 =
worldToScreen(
tx1,
ty1
);

const t2 =
worldToScreen(
tx2,
ty2
);

ctx.strokeStyle =
"#22c55e";

ctx.lineWidth = 2;

ctx.beginPath();

ctx.moveTo(
t1.x,
t1.y
);

ctx.lineTo(
t2.x,
t2.y
);

ctx.stroke();

ctx.fillStyle =
"white";

ctx.font =
"15px Arial";

ctx.fillText(
`P(${x.toFixed(2)}, ${fx.toFixed(2)})`,
p1.x+10,
p1.y-10
);

ctx.fillText(
`Q(${(x+h).toFixed(2)}, ${fxh.toFixed(2)})`,
p2.x+10,
p2.y-10
);

results.innerHTML = `

<div
style="
margin-top:20px;
padding:20px;
border-radius:16px;
background:#111827;
"
>

<h3>
Forward Difference Analysis
</h3>

<div
style="
line-height:2;
margin-top:12px;
"
>

Forward Difference Formula

<br>

<b>

f'(x)

≈

[f(x+h)-f(x)]/h

</b>

<br><br>

f(x)

=

${fx.toFixed(6)}

<br>

f(x+h)

=

${fxh.toFixed(6)}

<br>

h

=

${h.toFixed(6)}

<br><br>

Approx Derivative

=

<b>

${derivative.toFixed(6)}

</b>

</div>

</div>

`;

}
  
function redrawLab(){

drawGrid();

plotFunction();

drawForwardDifferenceLab();

}

function initializeLab(){

redrawLab();

functionSelect.addEventListener(
"change",
redrawLab
);

xSlider.addEventListener(
"input",
redrawLab
);

hSlider.addEventListener(
"input",
redrawLab
);

}

initializeLab();
function numericalDerivative(f,x){

const h = 0.00001;

return (

f(x+h)-f(x-h)

)/(2*h);

}

function drawExactTangent(){

const f =
getFunction();

const x =
Number(
xSlider.value
);

const h =
Number(
hSlider.value
);

let fx;

try{

fx = f(x);

}
catch{

return;

}

if(!isFinite(fx))
return;

const exactSlope =
numericalDerivative(
f,
x
);

const length = 2;

const x1 =
x-length;

const y1 =
fx-exactSlope*length;

const x2 =
x+length;

const y2 =
fx+exactSlope*length;

const p1 =
worldToScreen(
x1,
y1
);

const p2 =
worldToScreen(
x2,
y2
);

ctx.strokeStyle =
"#ec4899";

ctx.lineWidth = 3;

ctx.beginPath();

ctx.moveTo(
p1.x,
p1.y
);

ctx.lineTo(
p2.x,
p2.y
);

ctx.stroke();

}
function renderErrorPanel(){

const f =
getFunction();

const x =
Number(
xSlider.value
);

const h =
Number(
hSlider.value
);

let fx;
let fxh;

try{

fx = f(x);

fxh = f(x+h);

}
catch{

return;
}

const forward =

(fxh-fx)/h;

const exact =

numericalDerivative(
f,
x
);

const error =

Math.abs(
forward-exact
);

const percentError =

Math.abs(
(error/exact)*100
);

const color =

error < 0.001
? "#16a34a"

: error < 0.01
? "#eab308"

: "#ef4444";

results.innerHTML += `

<div
style="
margin-top:20px;
padding:20px;
border-radius:16px;
background:#0f172a;
"
>

<h3>
Exact Derivative Comparison
</h3>

<div
style="
margin-top:15px;
line-height:2;
"
>

Forward Difference

=

<b>

${forward.toFixed(8)}

</b>

<br>

Exact Derivative

=

<b>

${exact.toFixed(8)}

</b>

<br>

Absolute Error

=

<b style="color:${color};">

${error.toExponential(4)}

</b>

<br>

Percentage Error

=

<b style="color:${color};">

${percentError.toFixed(6)}%

</b>

</div>

</div>

`;

}
function drawConvergenceHint(){

const h =
Number(
hSlider.value
);

ctx.fillStyle =
"#94a3b8";

ctx.font =
"18px Arial";

ctx.fillText(

`Smaller h → Better Approximation`,

20,

35

);

ctx.fillText(

`Current h = ${h.toFixed(3)}`,

20,

65

);

}
const oldRedrawLab =
redrawLab;

redrawLab = function(){

drawGrid();

plotFunction();

drawForwardDifferenceLab();

drawExactTangent();

drawConvergenceHint();

renderErrorPanel();

};
