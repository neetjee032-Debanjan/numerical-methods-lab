export function runCorrelation(container) {

  container.innerHTML = `

    <div class="card">

      <h2>Correlation Visual Lab</h2>

      <p>
        Add points and explore correlation visually.
      </p>

      <div
        style="
          display:flex;
          gap:10px;
          flex-wrap:wrap;
          margin-bottom:15px;
        "
      >

        <button id="positiveBtn">
          Strong Positive
        </button>

        <button id="negativeBtn">
          Strong Negative
        </button>

        <button id="weakBtn">
          Weak Correlation
        </button>

        <button id="randomBtn">
          Random Data
        </button>

        <button id="clearBtn">
          Clear
        </button>

      </div>

      <canvas
        id="corrCanvas"
        width="700"
        height="450"
        style="
          width:100%;
          max-width:700px;
          border:1px solid #334155;
          border-radius:12px;
          background:#0f172a;
        "
      ></canvas>

      <div
        id="corrInfo"
        style="
          margin-top:20px;
          font-size:18px;
        "
      ></div>

    </div>

  `;

  const canvas =
    document.getElementById(
      "corrCanvas"
    );

  const ctx =
    canvas.getContext("2d");

  let points = [];

  function random(min,max){

    return Math.random()*
      (max-min)+min;
  }

  function generatePositive(){

    points = [];

    for(let i=0;i<25;i++){

      const x =
        random(50,650);

      const y =
        400 -
        x*0.45 +
        random(-30,30);

      points.push({x,y});
    }

    draw();
  }

  function generateNegative(){

    points = [];

    for(let i=0;i<25;i++){

      const x =
        random(50,650);

      const y =
        x*0.45 +
        random(-30,30);

      points.push({x,y});
    }

    draw();
  }

  function generateWeak(){

    points = [];

    for(let i=0;i<25;i++){

      const x =
        random(50,650);

      const y =
        random(50,400);

      points.push({x,y});
    }

    draw();
  }

  function generateRandom(){

    points = [];

    for(let i=0;i<40;i++){

      points.push({

        x: random(50,650),

        y: random(50,400)

      });
    }

    draw();
  }

  function correlation(){

    if(points.length < 2)
      return 0;

    const xs =
      points.map(p=>p.x);

    const ys =
      points.map(p=>p.y);

    const mx =
      xs.reduce((a,b)=>a+b,0)
      / xs.length;

    const my =
      ys.reduce((a,b)=>a+b,0)
      / ys.length;

    let num = 0;
    let dx = 0;
    let dy = 0;

    for(let i=0;i<xs.length;i++){

      num +=
        (xs[i]-mx)*
        (ys[i]-my);

      dx +=
        (xs[i]-mx)**2;

      dy +=
        (ys[i]-my)**2;
    }

    return num /
      Math.sqrt(dx*dy);
  }

  function draw(){

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    ctx.strokeStyle =
      "#334155";

    for(let x=50;x<=650;x+=50){

      ctx.beginPath();

      ctx.moveTo(x,50);
      ctx.lineTo(x,400);

      ctx.stroke();
    }

    for(let y=50;y<=400;y+=50){

      ctx.beginPath();

      ctx.moveTo(50,y);
      ctx.lineTo(650,y);

      ctx.stroke();
    }

    ctx.strokeStyle =
      "#94a3b8";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(50,400);
    ctx.lineTo(650,400);

    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(50,50);
    ctx.lineTo(50,400);

    ctx.stroke();

    points.forEach(p=>{

      ctx.fillStyle =
        "#38bdf8";

      ctx.beginPath();

      ctx.arc(
        p.x,
        p.y,
        6,
        0,
        Math.PI*2
      );

      ctx.fill();
    });

    const r =
      correlation();

    let strength =
      "No Correlation";

    if(Math.abs(r)>0.9)
      strength =
      "Very Strong";

    else if(Math.abs(r)>0.7)
      strength =
      "Strong";

    else if(Math.abs(r)>0.5)
      strength =
      "Moderate";

    else if(Math.abs(r)>0.3)
      strength =
      "Weak";

    document
      .getElementById(
        "corrInfo"
      )
      .innerHTML = `

        <strong>
          Pearson r:
        </strong>

        ${r.toFixed(4)}

        <br><br>

        <strong>
          Strength:
        </strong>

        ${strength}

      `;
  }

  canvas.addEventListener(
    "click",
    e=>{

      const rect =
        canvas.getBoundingClientRect();

      points.push({

        x:
          e.clientX
          -
          rect.left,

        y:
          e.clientY
          -
          rect.top
      });

      draw();
    }
  );

  document
    .getElementById(
      "positiveBtn"
    )
    .onclick =
      generatePositive;

  document
    .getElementById(
      "negativeBtn"
    )
    .onclick =
      generateNegative;

  document
    .getElementById(
      "weakBtn"
    )
    .onclick =
      generateWeak;

  document
    .getElementById(
      "randomBtn"
    )
    .onclick =
      generateRandom;

  document
    .getElementById(
      "clearBtn"
    )
    .onclick = ()=>{

      points = [];

      draw();
    };

  generatePositive();
}
