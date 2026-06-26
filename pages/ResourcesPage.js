import { resources } from "../data/resources.js";
import { renderModuleResources } from "./ModuleResourcesPage.js";

export function renderResources(app) {

  app.innerHTML = `

  <div style="
    max-width:1300px;
    margin:auto;
    padding:40px;
  ">

    <h1 style="
      color:#60a5fa;
      font-size:42px;
      margin-bottom:10px;
    ">
      📚 Resources Hub
    </h1>

    <p style="
      color:#94a3b8;
      margin-bottom:40px;
      font-size:18px;
    ">
      All learning resources for Numerical Methods are organized module-wise.
      Click any module to explore notes, videos, books, formulas,
      practice sheets, codes and simulations.
    </p>

    <div id="resourceGrid"
      style="
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(340px,1fr));
      gap:28px;
      ">
    </div>

  </div>

  `;

  const grid =
    document.getElementById("resourceGrid");

  resources.forEach(module=>{

    const card =
      document.createElement("div");

    card.style.cssText=`

      background:#111827;
      border-radius:18px;
      padding:28px;
      cursor:pointer;
      transition:.25s;
      border:1px solid #1f2937;

    `;

    card.onmouseenter=()=>{

      card.style.transform="translateY(-6px)";
      card.style.borderColor="#60a5fa";
      card.style.boxShadow=
      "0 20px 40px rgba(0,0,0,.35)";

    };

    card.onmouseleave=()=>{

      card.style.transform="";
      card.style.borderColor="#1f2937";
      card.style.boxShadow="";

    };

    card.innerHTML=`

      <div style="
      font-size:42px;
      margin-bottom:18px;
      ">
      ${module.icon}
      </div>

      <div style="
      color:#94a3b8;
      font-size:14px;
      margin-bottom:6px;
      ">
      ${module.module}
      </div>

      <h2 style="
      color:white;
      margin:0;
      font-size:24px;
      ">
      ${module.title}
      </h2>

      <div style="
      color:#94a3b8;
      margin-top:18px;
      line-height:1.8;
      ">

      ${module.topics.map(t=>`• ${t}`).join("<br>")}

      </div>

      <button
      style="
      margin-top:28px;
      width:100%;
      padding:14px;
      border:none;
      border-radius:10px;
      background:#2563eb;
      color:white;
      font-size:16px;
      cursor:pointer;
      ">
      Open Resources →
      </button>

    `;

    card.onclick=()=>{

      openModule(module);

    };

    grid.appendChild(card);

  });

}
function openModule(module){

alert(

module.title +

"\n\nDetailed resources page will be built in the next step."

);

}
