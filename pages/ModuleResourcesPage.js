import { renderResources } from "./ResourcesPage.js";

export function renderModuleResources(app, module){

app.innerHTML=`

<div
style="
min-height:100vh;
background:
linear-gradient(
180deg,
#020617,
#0f172a
);
padding:40px;
color:white;
font-family:Inter,sans-serif;
">

<div
style="
max-width:1400px;
margin:auto;
">

<button

id="backBtn"

style="
padding:12px 22px;
border:none;
border-radius:12px;
background:#2563eb;
color:white;
font-size:15px;
cursor:pointer;
margin-bottom:28px;
"

>

← Back to Resources

</button>

<div
style="
display:flex;
align-items:center;
gap:20px;
margin-bottom:30px;
">

<div
style="
font-size:65px;
">
${module.icon}
</div>

<div>

<div
style="
color:#60a5fa;
font-size:15px;
letter-spacing:1px;
text-transform:uppercase;
">
${module.module}
</div>

<h1
style="
margin:8px 0;
font-size:42px;
">
${module.title}
</h1>

<p
style="
color:#94a3b8;
font-size:18px;
line-height:1.8;
margin:0;
">
Everything related to ${module.title} is organised below.
</p>

</div>

</div>

<div
style="
display:grid;
grid-template-columns:
repeat(auto-fit,minmax(330px,1fr));
gap:24px;
">

${createSection("📄 Notes",module.resources.notes)}

${createSection("🎥 Video Lectures",module.resources.videos)}

${createSection("📚 Books",module.resources.books)}

${createSection("📝 Practice",module.resources.practice)}

${createSection("💻 Programming Code",module.resources.code)}

${createSection("📐 Formula Sheets",module.resources.formulas)}

${createSection("🔬 Simulators",module.resources.simulators)}

</div>

</div>

</div>

`;

document
.getElementById("backBtn")
.onclick=()=>{

window.location.hash="resources";

renderResources(app);

};

}

function createSection(title,list){

return`

<div
style="
background:#111827;
border-radius:18px;
padding:24px;
border:1px solid #1f2937;
">

<h2
style="
margin-top:0;
margin-bottom:20px;
font-size:24px;
">
${title}
</h2>

${

(!list||list.length===0)

?

`

<div
style="
padding:25px;
text-align:center;
color:#64748b;
">

Resources will be added soon.

</div>

`

:

list.map(item=>createItem(item)).join("")

}

</div>

`;

}

function createItem(item){

const isSimulator=
item.type==="simulation";

const link=
isSimulator
?
item.hash
:
item.url;

return`

<div

style="
background:#1e293b;
padding:16px;
border-radius:12px;
margin-bottom:14px;
transition:.25s;
"

>

<div
style="
font-weight:600;
font-size:17px;
">

${item.title}

</div>

${

item.description

?

`

<div
style="
margin-top:8px;
color:#94a3b8;
font-size:14px;
line-height:1.6;
">

${item.description}

</div>

`

:

""

}

<div
style="
margin-top:16px;
">

<button

onclick="${buttonAction(item)}"

style="
padding:10px 18px;
border:none;
border-radius:10px;
background:#2563eb;
color:white;
cursor:pointer;
font-size:14px;
"

>

${buttonText(item)}

</button>

</div>

</div>

`;

}

function buttonText(item){

switch(item.type){

case"simulation":

return"Open Laboratory";

case"video":

return"Watch Video";

case"pdf":

return"Open PDF";

case"book":

return"View Book";

case"practice":

return"Open Practice";

case"code":

return"View Code";

case"formula":

return"Open Formula Sheet";

default:

return"Open";

}

}

function buttonAction(item){

if(item.type==="simulation"){

return `window.location.hash='${item.hash}'`;

}

if(item.url && item.url!==""){

return `window.open('${item.url}','_blank')`;

}

return `alert('This resource will be added soon.')`;

}
