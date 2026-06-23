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
margin-bottom:10px;
color:#60a5fa;
"
>
Cubic Spline Laboratory
</h2>

<p
style="
color:#94a3b8;
margin-bottom:20px;
"
>
Add points and compare Linear Interpolation
with Smooth Cubic Spline Curves.
</p>

<div
style="
display:flex;
gap:12px;
flex-wrap:wrap;
margin-bottom:20px;
"
>

<button
id="sampleBtn"
style="
padding:12px 20px;
border:none;
border-radius:12px;
background:#2563eb;
color:white;
font-weight:bold;
cursor:pointer;
"
>
Load Sample Data
</button>

<button
id="clearBtn"
style="
padding:12px 20px;
border:none;
border-radius:12px;
background:#475569;
color:white;
font-weight:bold;
cursor:pointer;
"
>
Clear Points
</button>

</div>

<div
style="
margin-bottom:12px;
color:#94a3b8;
"
>

Click anywhere on graph to add points.

</div>

<canvas
id="canvas"
width="950"
height="500"
style="
width:100%;
background:#0f172a;
border-radius:16px;
border:1px solid rgba(255,255,255,.08);
cursor:crosshair;
"
></canvas>

<div
id="info"
style="
margin-top:20px;
padding:16px;
border-radius:14px;
background:#111827;
"
>
No points added.
</div>

</div>

`;

const canvas =
container.querySelector("#canvas");

const ctx =
canvas.getContext("2d");

const info =
container.querySelector("#info");

const sampleBtn =
container.querySelector("#sampleBtn");

const clearBtn =
container.querySelector("#clearBtn");

const W =
canvas.width;

const H =
canvas.height;

const points = [];

function drawGrid(){

ctx.clearRect(
0,
0,
W,
H
);

ctx.strokeStyle =
"rgba(255,255,255,.08)";

for(
let x=0;
x<W;
x+=50
){

ctx.beginPath();

ctx.moveTo(x,0);

ctx.lineTo(x,H);

ctx.stroke();

}

for(
let y=0;
y<H;
y+=50
){

ctx.beginPath();

ctx.moveTo(0,y);

ctx.lineTo(W,y);

ctx.stroke();

}

}

function drawPoints(){

ctx.fillStyle =
"#60a5fa";

for(
const p of points
){

ctx.beginPath();

ctx.arc(
p.x,
p.y,
7,
0,
Math.PI*2
);

ctx.fill();

}

}

function drawLinear(){

if(
points.length < 2
)return;

ctx.strokeStyle =
"#ef4444";

ctx.lineWidth = 3;

ctx.beginPath();

ctx.moveTo(
points[0].x,
points[0].y
);

for(
let i=1;
i<points.length;
i++
){

ctx.lineTo(
points[i].x,
points[i].y
);

}

ctx.stroke();

}

function redraw(){

drawGrid();

drawLinear();

drawPoints();

info.innerHTML = `
Points:
<b>${points.length}</b>
`;

}

redraw();
function drawLegend(){

ctx.fillStyle = "#ef4444";

ctx.fillRect(
20,
20,
18,
18
);

ctx.fillStyle = "white";

ctx.font =
"15px Arial";

ctx.fillText(
"Linear Interpolation",
50,
34
);

ctx.fillStyle =
"#22c55e";

ctx.fillRect(
250,
20,
18,
18
);

ctx.fillStyle =
"white";

ctx.fillText(
"Cubic Spline",
280,
34
);

ctx.fillStyle =
"#60a5fa";

ctx.fillRect(
430,
20,
18,
18
);

ctx.fillStyle =
"white";

ctx.fillText(
"Control Points",
460,
34
);

}

function drawSpline(){

if(
points.length < 3
)return;

ctx.strokeStyle =
"#22c55e";

ctx.lineWidth = 4;

ctx.beginPath();

ctx.moveTo(
points[0].x,
points[0].y
);

for(
let i=0;
i<points.length-1;
i++
){

const p0 =
points[
Math.max(
0,
i-1
)
];

const p1 =
points[i];

const p2 =
points[i+1];

const p3 =
points[
Math.min(
points.length-1,
i+2
)
];

for(
let t=0;
t<=1;
t+=0.03
){

const t2 =
t*t;

const t3 =
t2*t;

const x =

0.5 *

(

(2*p1.x)

+

(-p0.x+p2.x)*t

+

(
2*p0.x
-
5*p1.x
+
4*p2.x
-
p3.x
)
*
t2

+

(
-p0.x
+
3*p1.x
-
3*p2.x
+
p3.x
)
*
t3

);

const y =

0.5 *

(

(2*p1.y)

+

(-p0.y+p2.y)*t

+

(
2*p0.y
-
5*p1.y
+
4*p2.y
-
p3.y
)
*
t2

+

(
-p0.y
+
3*p1.y
-
3*p2.y
+
p3.y
)
*
t3

);

ctx.lineTo(
x,
y
);

}

}

ctx.stroke();

}

function redraw(){

drawGrid();

drawLinear();

drawSpline();

drawPoints();

drawLegend();

info.innerHTML = `

<div>

Points:

<b>
${points.length}
</b>

</div>

<br>

<div style="color:#ef4444;">

Linear Interpolation:
Straight segments connect points.

</div>

<br>

<div style="color:#22c55e;">

Cubic Spline:
Smooth curve passing through all points.

</div>

`;

}
canvas.addEventListener(
"click",
e => {

const rect =
canvas.getBoundingClientRect();

const x =
(e.clientX - rect.left)
*
(
canvas.width /
rect.width
);

const y =
(e.clientY - rect.top)
*
(
canvas.height /
rect.height
);

points.push({
x,
y
});

points.sort(
(a,b)=>a.x-b.x
);

redraw();

}
);

sampleBtn.onclick = () => {

points.length = 0;

points.push(

{ x:80 , y:360 },

{ x:180 , y:260 },

{ x:300 , y:310 },

{ x:420 , y:140 },

{ x:560 , y:220 },

{ x:720 , y:120 },

{ x:860 , y:200 }

);

redraw();

animateSpline();

};

clearBtn.onclick = () => {

points.length = 0;

redraw();

};

function animateSpline(){

if(
points.length < 3
)return;

drawGrid();

drawLinear();

drawPoints();

drawLegend();

let progress = 0;

const timer =
setInterval(()=>{

drawGrid();

drawLinear();

drawPoints();

drawLegend();

ctx.strokeStyle =
"#22c55e";

ctx.lineWidth = 4;

ctx.beginPath();

ctx.moveTo(
points[0].x,
points[0].y
);

let segmentsDrawn = 0;

for(
let i=0;
i<points.length-1;
i++
){

const p0 =
points[
Math.max(
0,
i-1
)
];

const p1 =
points[i];

const p2 =
points[i+1];

const p3 =
points[
Math.min(
points.length-1,
i+2
)
];

for(
let t=0;
t<=1;
t+=0.03
){

if(
segmentsDrawn >
progress
)
break;

const t2 =
t*t;

const t3 =
t2*t;

const x =

0.5 *

(

(2*p1.x)

+

(-p0.x+p2.x)*t

+

(
2*p0.x
-
5*p1.x
+
4*p2.x
-
p3.x
)
*
t2

+

(
-p0.x
+
3*p1.x
-
3*p2.x
+
p3.x
)
*
t3

);

const y =

0.5 *

(

(2*p1.y)

+

(-p0.y+p2.y)*t

+

(
2*p0.y
-
5*p1.y
+
4*p2.y
-
p3.y
)
*
t2

+

(
-p0.y
+
3*p1.y
-
3*p2.y
+
p3.y
)
*
t3

);

ctx.lineTo(
x,
y
);

segmentsDrawn++;

}

}

ctx.stroke();

progress += 5;

if(
progress > 500
){

clearInterval(
timer
);

drawSpline();

}

},25);

}

function curvatureScore(){

if(
points.length < 4
)
return 0;

let score = 0;

for(
let i=1;
i<points.length-1;
i++
){

const dy1 =
points[i].y -
points[i-1].y;

const dy2 =
points[i+1].y -
points[i].y;

score +=
Math.abs(
dy2-dy1
);

}

return Math.round(score);

}

const oldRedraw =
redraw;

redraw = function(){

oldRedraw();

if(
points.length >= 3
){

const score =
curvatureScore();

let quality =
"Excellent";

if(score > 300)
quality = "Moderate";

if(score > 700)
quality = "Poor";

info.innerHTML += `

<br><br>

<div
style="
padding:12px;
border-radius:12px;
background:#0f172a;
"
>

Spline Smoothness Score:

<b>
${score}
</b>

<br><br>

Curve Quality:

<b
style="
color:#22c55e;
"
>

${quality}

</b>

</div>

`;

}

};

redraw();
}
