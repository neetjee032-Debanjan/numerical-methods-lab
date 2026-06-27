import { applications } from "../data/applications.js";

export function renderApplication(app,id){

const application =
applications.find(
a=>a.id===id
);

if(!application){

app.innerHTML=`

<div
style="
padding:60px;
max-width:1000px;
margin:auto;
color:white;
font-family:Inter,sans-serif;
">

<h1>Application Not Found</h1>

</div>

`;

return;

}

app.innerHTML=`

<div
style="
min-height:100vh;
background:
linear-gradient(
180deg,
#020617,
#07152d,
#0f172a
);
padding:40px;
font-family:Inter,sans-serif;
color:white;
">

<div
style="
max-width:1200px;
margin:auto;
">

<button

id="backApplications"

style="
padding:12px 22px;
background:#2563eb;
border:none;
border-radius:12px;
color:white;
cursor:pointer;
margin-bottom:30px;
font-size:15px;
"

>

← Back

</button>

<div
style="
display:flex;
align-items:center;
gap:25px;
margin-bottom:35px;
">

<div
style="
font-size:70px;
">

${application.icon}

</div>

<div>

<div
style="
color:#60a5fa;
letter-spacing:1px;
text-transform:uppercase;
font-size:15px;
">

Real World Application

</div>

<h1
style="
margin:8px 0;
font-size:46px;
">

${application.title}

</h1>

<p
style="
font-size:18px;
line-height:1.8;
color:#cbd5e1;
max-width:900px;
">

${application.description}

</p>

</div>

</div>

<div
style="
display:grid;
gap:26px;
">

${application.sections.map(section=>{

if(section.text){

return`

<div
style="
background:#111827;
border-radius:18px;
padding:28px;
border:1px solid #1f2937;
">

<h2
style="
margin-top:0;
color:#60a5fa;
">

${section.heading}

</h2>

<p
style="
line-height:2;
font-size:17px;
color:#d1d5db;
">

${section.text}

</p>

</div>

`;

}

return`

<div
style="
background:#111827;
border-radius:18px;
padding:28px;
border:1px solid #1f2937;
">

<h2
style="
margin-top:0;
color:#60a5fa;
">

${section.heading}

</h2>

<div
style="
display:flex;
flex-wrap:wrap;
gap:12px;
margin-top:18px;
">

${section.list.map(item=>`

<div
style="
background:#1e293b;
padding:12px 18px;
border-radius:999px;
">

${item}

</div>

`).join("")}

</div>

</div>

`;

}).join("")}

</div>

</div>

</div>

`;

document
.getElementById(
"backApplications"
)
.onclick=()=>{

window.location.hash=
"applications";

};

}
