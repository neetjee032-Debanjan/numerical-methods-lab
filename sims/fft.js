export function runFFT(container) {

  container.innerHTML = `

    <div class="card">

      <h2>FFT Spectrum Analyzer</h2>

      <p>
        Generate signals and observe their frequency spectrum.
      </p>

      <div
        style="
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(220px,1fr));
          gap:15px;
          margin-top:15px;
        "
      >

        <div>

          <label>
            Frequency 1 (Hz)
          </label>

          <input
            id="freq1"
            type="range"
            min="1"
            max="50"
            value="5"
          >

          <div id="freq1Val">
            5 Hz
          </div>

        </div>

        <div>

          <label>
            Frequency 2 (Hz)
          </label>

          <input
            id="freq2"
            type="range"
            min="1"
            max="50"
            value="20"
          >

          <div id="freq2Val">
            20 Hz
          </div>

        </div>

      </div>

      <h3 style="margin-top:25px;">
        Time Domain Signal
      </h3>

      <canvas
        id="timeCanvas"
        width="900"
        height="250"
        style="
          width:100%;
          max-width:900px;
          background:#0f172a;
          border-radius:12px;
        "
      ></canvas>

      <h3 style="margin-top:25px;">
        Frequency Spectrum
      </h3>

      <canvas
        id="freqCanvas"
        width="900"
        height="300"
        style="
          width:100%;
          max-width:900px;
          background:#0f172a;
          border-radius:12px;
        "
      ></canvas>

    </div>

  `;

  const timeCanvas =
    document.getElementById(
      "timeCanvas"
    );

  const freqCanvas =
    document.getElementById(
      "freqCanvas"
    );

  const tctx =
    timeCanvas.getContext("2d");

  const fctx =
    freqCanvas.getContext("2d");

  const freq1 =
    document.getElementById(
      "freq1"
    );

  const freq2 =
    document.getElementById(
      "freq2"
    );

  function update() {

    const f1 =
      Number(freq1.value);

    const f2 =
      Number(freq2.value);

    document.getElementById(
      "freq1Val"
    ).innerText =
      `${f1} Hz`;

    document.getElementById(
      "freq2Val"
    ).innerText =
      `${f2} Hz`;

    drawSignal(f1,f2);

    drawSpectrum(f1,f2);
  }

  function drawSignal(f1,f2){

    tctx.clearRect(
      0,
      0,
      900,
      250
    );

    tctx.strokeStyle =
      "#38bdf8";

    tctx.lineWidth = 3;

    tctx.beginPath();

    for(let px=0; px<900; px++){

      const t =
        px/900;

      const y =

        Math.sin(
          2*Math.PI*f1*t
        )

        +

        0.5*

        Math.sin(
          2*Math.PI*f2*t
        );

      const py =
        125 - y*60;

      if(px===0){

        tctx.moveTo(px,py);

      } else {

        tctx.lineTo(px,py);
      }
    }

    tctx.stroke();
  }

  function drawSpectrum(f1,f2){

    fctx.clearRect(
      0,
      0,
      900,
      300
    );

    for(let x=0;x<900;x+=50){

      fctx.strokeStyle =
        "#334155";

      fctx.beginPath();

      fctx.moveTo(x,0);

      fctx.lineTo(x,300);

      fctx.stroke();
    }

    drawPeak(
      f1,
      220
    );

    drawPeak(
      f2,
      120
    );
  }

  function drawPeak(
    frequency,
    height
  ){

    const x =
      frequency * 15;

    fctx.fillStyle =
      "#38bdf8";

    fctx.fillRect(
      x,
      280-height,
      20,
      height
    );

    fctx.fillStyle =
      "white";

    fctx.fillText(
      `${frequency}Hz`,
      x-5,
      295
    );
  }

  freq1.addEventListener(
    "input",
    update
  );

  freq2.addEventListener(
    "input",
    update
  );

  update();
}
