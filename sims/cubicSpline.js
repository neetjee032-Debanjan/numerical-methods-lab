export function runCubicSpline(container){

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
Cubic Spline Professional Laboratory
</h2>

<p
style="
color:#94a3b8;
margin-bottom:20px;
"
>
Create points anywhere on the coordinate plane.
Drag points and watch the spline update in real time.
All four quadrants are supported.
</p>

<div
style="
display:flex;
gap:10px;
flex-wrap:wrap;
margin-bottom:15px;
"
>

<button id="clearBtn">
Clear Points
</button>

<button id="sampleBtn">
Load Sample Data
</button>

<button id="animateBtn">
Animate
</button>

</div>

<div
id="mouseInfo"
style="
margin-bottom:12px;
color:#cbd5e1;
font-size:15px;
"
>
x = 0 , y = 0
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
cursor:crosshair;
"
>
</canvas>

<div id="segmentPanel"></div>

<div id="equationPanel"></div>

</div>

`;

const canvas =
container.querySelector("#graph");

const ctx =
canvas.getContext("2d");

const mouseInfo =
container.querySelector("#mouseInfo");

const segmentPanel =
container.querySelector("#segmentPanel");

const equationPanel =
container.querySelector("#equationPanel");

const clearBtn =
container.querySelector("#clearBtn");

const sampleBtn =
container.querySelector("#sampleBtn");

const animateBtn =
container.querySelector("#animateBtn");

const W =
canvas.width;

const H =
canvas.height;

const SCALE = 40;

let points = [];

let dragIndex = -1;

let animationT = 0;

function worldToScreen(x,y){

return {

x:W/2 + x*SCALE,

y:H/2 - y*SCALE

};

}

function screenToWorld(px,py){

return {

x:(px-W/2)/SCALE,

y:(H/2-py)/SCALE

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

ctx.lineWidth = 1;

for(
let x=W/2;
x<W;
x+=SCALE
){

ctx.beginPath();
ctx.moveTo(x,0);
ctx.lineTo(x,H);
ctx.stroke();

}

for(
let x=W/2;
x>0;
x-=SCALE
){

ctx.beginPath();
ctx.moveTo(x,0);
ctx.lineTo(x,H);
ctx.stroke();

}

for(
let y=H/2;
y<H;
y+=SCALE
){

ctx.beginPath();
ctx.moveTo(0,y);
ctx.lineTo(W,y);
ctx.stroke();

}

for(
let y=H/2;
y>0;
y-=SCALE
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

ctx.fillStyle =
"#94a3b8";

ctx.font =
"12px Arial";

for(
let i=-12;
i<=12;
i++
){

if(i===0) continue;

ctx.fillText(
i,
W/2+i*SCALE-4,
H/2+16
);

}

for(
let i=-6;
i<=6;
i++
){

if(i===0) continue;

ctx.fillText(
i,
W/2+8,
H/2-i*SCALE+4
);

}

}

drawGrid();
function drawPoints(){

points.forEach((p,index)=>{

const s =
worldToScreen(
p.x,
p.y
);

ctx.beginPath();

ctx.arc(
s.x,
s.y,
8,
0,
Math.PI*2
);

ctx.fillStyle =
"#60a5fa";

ctx.fill();

ctx.strokeStyle =
"white";

ctx.lineWidth = 2;

ctx.stroke();

ctx.fillStyle =
"white";

ctx.font =
"14px Arial";

ctx.fillText(
`(${p.x.toFixed(1)}, ${p.y.toFixed(1)})`,
s.x + 12,
s.y - 12
);

});

}

function redraw(){

drawGrid();

drawDerivativeCurve():

drawCurvatureCurve():

drawSpline();

drawPoints();

}

canvas.addEventListener(
"mousemove",
e=>{

const rect =
canvas.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const w =
screenToWorld(
x,
y
);

mouseInfo.innerHTML =

`x = ${w.x.toFixed(2)}
&nbsp;&nbsp;&nbsp;
y = ${w.y.toFixed(2)}`;

if(
dragIndex !== -1
){

points[dragIndex] = {

x:w.x,

y:w.y

};

redraw();

}

}
);

canvas.addEventListener(
"mousedown",
e=>{

const rect =
canvas.getBoundingClientRect();

const px =
e.clientX - rect.left;

const py =
e.clientY - rect.top;

for(
let i=0;
i<points.length;
i++
){

const s =
worldToScreen(
points[i].x,
points[i].y
);

const d = Math.hypot(

s.x-px,

s.y-py

);

if(d < 12){

dragIndex = i;

return;

}

}

const w =
screenToWorld(
px,
py
);

points.push({

x:w.x,

y:w.y

});

redraw();

}
);

window.addEventListener(
"mouseup",
()=>{

dragIndex = -1;

}
);

clearBtn.onclick = ()=>{

points = [];

redraw();

};

sampleBtn.onclick = ()=>{

points = [

{x:-6,y:-1},
{x:-3,y:3},
{x:0,y:0},
{x:3,y:4},
{x:6,y:1}

];

redraw();

};

animateBtn.onclick = ()=>{

animationRunning =
!animationRunning;

if(
animationRunning
){

animateSpline();

}
else{

redraw();

}

};
redraw();
function computeNaturalSpline(){

if(points.length < 3)
return null;

const pts =
[...points]
.sort((a,b)=>a.x-b.x);

const n =
pts.length;

const x =
pts.map(p=>p.x);

const y =
pts.map(p=>p.y);

const a =
[...y];

const h = [];

for(
let i=0;
i<n-1;
i++
){

h[i] =
x[i+1]-x[i];

if(h[i]===0)
return null;

}

const alpha =
Array(n).fill(0);

for(
let i=1;
i<n-1;
i++
){

alpha[i] =

(3/h[i])*
(a[i+1]-a[i])

-

(3/h[i-1])*
(a[i]-a[i-1]);

}

const l =
Array(n).fill(0);

const mu =
Array(n).fill(0);

const z =
Array(n).fill(0);

l[0]=1;

for(
let i=1;
i<n-1;
i++
){

l[i] =

2*
(x[i+1]-x[i-1])

-

h[i-1]*
mu[i-1];

mu[i] =
h[i]/l[i];

z[i] =

(
alpha[i]
-
h[i-1]*z[i-1]
)
/
l[i];

}

l[n-1]=1;

const c =
Array(n).fill(0);

const b =
Array(n-1).fill(0);

const d =
Array(n-1).fill(0);

for(
let j=n-2;
j>=0;
j--
){

c[j] =

z[j]
-
mu[j]*
c[j+1];

b[j] =

(
a[j+1]-a[j]
)/h[j]

-

h[j]*
(
c[j+1]
+
2*c[j]
)
/
3;

d[j] =

(
c[j+1]-c[j]
)
/
(
3*h[j]
);

}

return {

pts,
a,
b,
c,
d

};

}

function drawSpline(){

const spline =
computeNaturalSpline();

if(!spline)
return;

ctx.strokeStyle =
"#22c55e";

ctx.lineWidth = 4;

ctx.beginPath();

let started =
false;

for(
let seg=0;
seg<
spline.pts.length-1;
seg++
){

const x0 =
spline.pts[seg].x;

const x1 =
spline.pts[seg+1].x;

for(
let xx=x0;
xx<=x1;
xx+=0.03
){

const dx =
xx-x0;

const yy =

spline.a[seg]

+

spline.b[seg]*dx

+

spline.c[seg]*dx*dx

+

spline.d[seg]*dx*dx*dx;

const s =
worldToScreen(
xx,
yy
);

if(!started){

ctx.moveTo(
s.x,
s.y
);

started=true;

}
else{

ctx.lineTo(
s.x,
s.y
);

}

}

}

ctx.stroke();

renderSegmentTable(
spline
);

}
function renderSegmentTable(spline){

let html = `

<div
style="
margin-top:25px;
padding:20px;
border-radius:16px;
background:#111827;
"
>

<h3>
Spline Segment Coefficients
</h3>

<table
style="
width:100%;
border-collapse:collapse;
margin-top:15px;
"
>

<tr>

<th>Segment</th>

<th>a</th>

<th>b</th>

<th>c</th>

<th>d</th>

</tr>

`;

for(
let i=0;
i<spline.pts.length-1;
i++
){

html += `

<tr
class="segmentRow"
data-segment="${i}"
style="
cursor:pointer;
"
>

<td>

S${i}

</td>

<td>

${spline.a[i].toFixed(5)}

</td>

<td>

${spline.b[i].toFixed(5)}

</td>

<td>

${spline.c[i].toFixed(5)}

</td>

<td>

${spline.d[i].toFixed(5)}

</td>

</tr>

`;

}

html += `

</table>

</div>

`;

segmentPanel.innerHTML =
html;

attachSegmentInspector(
spline
);

}

function attachSegmentInspector(spline){

const rows =

segmentPanel.querySelectorAll(
".segmentRow"
);

rows.forEach(row=>{

row.onclick = ()=>{

const seg = Number(
row.dataset.segment
);

showSegmentEquation(
spline,
seg
);

};

});

}

function showSegmentEquation(
spline,
seg
){

const a =
spline.a[seg];

const b =
spline.b[seg];

const c =
spline.c[seg];

const d =
spline.d[seg];

const x0 =
spline.pts[seg].x;

const x1 =
spline.pts[seg+1].x;

equationPanel.innerHTML = `

<div
style="
margin-top:25px;
padding:20px;
border-radius:16px;
background:#0f172a;
"
>

<h3>
Segment Inspector
</h3>

<div
style="
margin-top:15px;
font-size:18px;
line-height:2;
"
>

Segment:

<b>

S${seg}

</b>

<br>

Range:

<b>

${x0.toFixed(3)}

≤ x ≤

${x1.toFixed(3)}

</b>

<br><br>

S${seg}(x)

=

${a.toFixed(6)}

+

${b.toFixed(6)}

(x−${x0.toFixed(6)})

+

${c.toFixed(6)}

(x−${x0.toFixed(6)})²

+

${d.toFixed(6)}

(x−${x0.toFixed(6)})³

</div>

</div>

`;

}
let animationRunning = false;

function evaluateSplineAtX(
spline,
x
){

for(
let seg=0;
seg<spline.pts.length-1;
seg++
){

const left =
spline.pts[seg].x;

const right =
spline.pts[seg+1].x;

if(
x >= left &&
x <= right
){

const dx =
x-left;

const y =

spline.a[seg]

+

spline.b[seg]*dx

+

spline.c[seg]*dx*dx

+

spline.d[seg]*dx*dx*dx;

const slope =

spline.b[seg]

+

2*spline.c[seg]*dx

+

3*spline.d[seg]*dx*dx;

const curvature =

2*spline.c[seg]

+

6*spline.d[seg]*dx;

return {

y,
slope,
curvature

};

}

}

return null;

}

function createAnalysisPanel(){

let panel =
document.getElementById(
"splineAnalysisPanel"
);

if(panel)
return panel;

panel =
document.createElement("div");

panel.id =
"splineAnalysisPanel";

panel.style.marginTop =
"25px";

panel.style.padding =
"20px";

panel.style.borderRadius =
"16px";

panel.style.background =
"#0f172a";

panel.innerHTML = `

<h3>
Live Spline Analysis
</h3>

<div id="analysisContent">

Waiting for animation...

</div>

`;

equationPanel.after(
panel
);

return panel;

}

function animateSpline(){

const spline =
computeNaturalSpline();

if(
!spline ||
spline.pts.length < 2
)
return;

animationRunning =
true;

const panel =
createAnalysisPanel();

let minX =
spline.pts[0].x;

let maxX =
spline.pts[
spline.pts.length-1
].x;

let currentX =
minX;

function frame(){

if(
!animationRunning
)
return;

redraw();

const result =
evaluateSplineAtX(
spline,
currentX
);

if(result){

const s =
worldToScreen(
currentX,
result.y
);

ctx.beginPath();

ctx.arc(
s.x,
s.y,
10,
0,
Math.PI*2
);

ctx.fillStyle =
"#f59e0b";

ctx.fill();

ctx.strokeStyle =
"white";

ctx.lineWidth = 2;

ctx.stroke();

panel.querySelector(
"#analysisContent"
).innerHTML = `

<div
style="
line-height:2;
font-size:18px;
"
>

Current x:

<b>

${currentX.toFixed(4)}

</b>

<br>

Current y:

<b>

${result.y.toFixed(4)}

</b>

<br>

Slope:

<b>

${result.slope.toFixed(4)}

</b>

<br>

Curvature:

<b>

${result.curvature.toFixed(4)}

</b>

</div>

`;

}

currentX += 0.03;

if(
currentX > maxX
){

currentX = minX;

}

requestAnimationFrame(
frame
);

}

frame();

}
let showTangent = true;

function drawTangentLine(
x,
y,
slope
){

if(!showTangent) return;

const length = 2.5;

const x1 = x - length;
const y1 = y - slope*length;

const x2 = x + length;
const y2 = y + slope*length;

const p1 =
worldToScreen(x1,y1);

const p2 =
worldToScreen(x2,y2);

ctx.beginPath();

ctx.moveTo(
p1.x,
p1.y
);

ctx.lineTo(
p2.x,
p2.y
);

ctx.strokeStyle =
"#f43f5e";

ctx.lineWidth = 3;

ctx.stroke();

}
let showDerivativeCurve = true;

function drawDerivativeCurve(){

if(!showDerivativeCurve)
return;

const spline =
computeNaturalSpline();

if(!spline)
return;

ctx.beginPath();

ctx.strokeStyle =
"#38bdf8";

ctx.lineWidth = 3;

let started =
false;

for(
let seg=0;
seg<
spline.pts.length-1;
seg++
){

const x0 =
spline.pts[seg].x;

const x1 =
spline.pts[seg+1].x;

for(
let x=x0;
x<=x1;
x+=0.03
){

const dx =
x-x0;

const slope =

spline.b[seg]

+

2*spline.c[seg]*dx

+

3*spline.d[seg]*dx*dx;

const screen =
worldToScreen(
x,
slope
);

if(!started){

ctx.moveTo(
screen.x,
screen.y
);

started = true;

}
else{

ctx.lineTo(
screen.x,
screen.y
);

}

}

}

ctx.stroke();

}
function createLegend(){

let old =
document.getElementById(
"splineLegend"
);

if(old) return;

const div =
document.createElement("div");

div.id =
"splineLegend";

div.style.marginTop =
"20px";

div.style.padding =
"15px";

div.style.borderRadius =
"12px";

div.style.background =
"#111827";

div.innerHTML = `

<h3>
Graph Legend
</h3>

<div style="margin-top:10px;">

🟢 Cubic Spline

<br>

🔵 First Derivative

<br>

🟠 Animated Particle

<br>

🔴 Tangent Line

</div>

`;

container.appendChild(div);

}

createLegend();
}
let showCurvatureCurve = true;

function drawCurvatureCurve(){

if(!showCurvatureCurve)
return;

const spline =
computeNaturalSpline();

if(!spline)
return;

ctx.beginPath();

ctx.strokeStyle =
"#f59e0b";

ctx.lineWidth = 3;

let started = false;

for(
let seg=0;
seg<spline.pts.length-1;
seg++
){

const x0 =
spline.pts[seg].x;

const x1 =
spline.pts[seg+1].x;

for(
let x=x0;
x<=x1;
x+=0.03
){

const dx =
x-x0;

const curvature =

2*spline.c[seg]

+

6*spline.d[seg]*dx;

const s =
worldToScreen(
x,
curvature
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

}

ctx.stroke();

}

function createProfessionalPanel(){

if(
document.getElementById(
"professionalSplinePanel"
)
)
return;

const panel =
document.createElement("div");

panel.id =
"professionalSplinePanel";

panel.style.marginTop =
"25px";

panel.style.padding =
"20px";

panel.style.borderRadius =
"16px";

panel.style.background =
"#111827";

panel.innerHTML = `

<h3>
Spline Visualization Controls
</h3>

<div
style="
display:flex;
gap:20px;
flex-wrap:wrap;
margin-top:15px;
"
>

<label>

<input
type="checkbox"
id="toggleDerivative"
checked
>

First Derivative

</label>

<label>

<input
type="checkbox"
id="toggleCurvature"
checked
>

Second Derivative

</label>

<label>

<input
type="checkbox"
id="toggleTangent"
checked
>

Tangent Line

</label>

</div>

<hr
style="
margin:15px 0;
border-color:#334155;
"
>

<div>

🟢 Cubic Spline

<br>

🔵 First Derivative

<br>

🟠 Second Derivative

<br>

🟠 Animated Particle

<br>

🔴 Tangent Line

</div>

`;

container.appendChild(panel);

panel.querySelector(
"#toggleDerivative"
).onchange = e => {

showDerivativeCurve =
e.target.checked;

redraw();

};

panel.querySelector(
"#toggleCurvature"
).onchange = e => {

showCurvatureCurve =
e.target.checked;

redraw();

};

panel.querySelector(
"#toggleTangent"
).onchange = e => {

showTangent =
e.target.checked;

redraw();

};

}

createProfessionalPanel();
}
