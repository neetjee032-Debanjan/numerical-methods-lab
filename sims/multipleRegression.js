export function runMultipleRegression(container) {

  container.innerHTML = `

    <div class="card">

      <h2>Multiple Regression Studio</h2>

      <p>
        Predict House Price using multiple features.
      </p>

      <div
        style="
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(220px,1fr));
          gap:15px;
          margin-top:20px;
        "
      >

        <div>

          <label>
            Bedrooms
          </label>

          <input
            id="bedrooms"
            type="range"
            min="1"
            max="10"
            value="3"
          >

          <div id="bedroomsValue">
            3
          </div>

        </div>

        <div>

          <label>
            Area (sq ft)
          </label>

          <input
            id="area"
            type="range"
            min="500"
            max="5000"
            value="1500"
          >

          <div id="areaValue">
            1500
          </div>

        </div>

        <div>

          <label>
            House Age
          </label>

          <input
            id="age"
            type="range"
            min="0"
            max="50"
            value="10"
          >

          <div id="ageValue">
            10
          </div>

        </div>

        <div>

          <label>
            Location Score
          </label>

          <input
            id="location"
            type="range"
            min="1"
            max="10"
            value="7"
          >

          <div id="locationValue">
            7
          </div>

        </div>

      </div>

      <div
        id="prediction"
        style="
          margin-top:30px;
          padding:20px;
          border-radius:12px;
          background:#0f172a;
        "
      ></div>

      <canvas
        id="regressionCanvas"
        width="700"
        height="350"
        style="
          width:100%;
          max-width:700px;
          margin-top:20px;
          background:#0f172a;
          border-radius:12px;
        "
      ></canvas>

    </div>

  `;

  const bedrooms =
    document.getElementById("bedrooms");

  const area =
    document.getElementById("area");

  const age =
    document.getElementById("age");

  const location =
    document.getElementById("location");

  const canvas =
    document.getElementById(
      "regressionCanvas"
    );

  const ctx =
    canvas.getContext("2d");

  function update() {

    const b =
      Number(bedrooms.value);

    const a =
      Number(area.value);

    const ag =
      Number(age.value);

    const loc =
      Number(location.value);

    document.getElementById(
      "bedroomsValue"
    ).innerText = b;

    document.getElementById(
      "areaValue"
    ).innerText = a;

    document.getElementById(
      "ageValue"
    ).innerText = ag;

    document.getElementById(
      "locationValue"
    ).innerText = loc;

    const price =

      50000

      + b * 25000

      + a * 120

      - ag * 3500

      + loc * 40000;

    document.getElementById(
      "prediction"
    ).innerHTML = `

      <h3>
        Predicted House Price
      </h3>

      <h1>
        ₹${Math.round(price)
          .toLocaleString()}
      </h1>

      <hr>

      <p>
        β₀ = 50000
      </p>

      <p>
        β₁(Bedrooms) = 25000
      </p>

      <p>
        β₂(Area) = 120
      </p>

      <p>
        β₃(Age) = -3500
      </p>

      <p>
        β₄(Location) = 40000
      </p>

    `;

    draw(price);
  }

  function draw(price){

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

      ctx.lineTo(x,300);

      ctx.stroke();
    }

    for(let y=50;y<=300;y+=50){

      ctx.beginPath();

      ctx.moveTo(50,y);

      ctx.lineTo(650,y);

      ctx.stroke();
    }

    ctx.fillStyle =
      "#38bdf8";

    const scaled =

      Math.min(
        price / 20000,
        500
      );

    ctx.fillRect(
      100,
      300-scaled,
      120,
      scaled
    );

    ctx.fillStyle =
      "white";

    ctx.font =
      "18px sans-serif";

    ctx.fillText(
      "Predicted Price",
      85,
      330
    );
  }

  [
    bedrooms,
    area,
    age,
    location
  ].forEach(el => {

    el.addEventListener(
      "input",
      update
    );

  });

  update();
}
