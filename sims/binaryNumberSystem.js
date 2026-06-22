export function runBinaryNumberSystem(container) {

  container.innerHTML = `
    <div style="
      color:white;
      padding:20px;
      font-family:Arial;
    ">

      <h2>Binary Number System Laboratory</h2>

      <p style="
        color:#94a3b8;
        margin-bottom:20px;
      ">
        Learn binary numbers interactively.
        Convert values, visualize bits,
        simulate memory and explore
        binary counting.
      </p>

      <!-- Decimal to Binary -->

      <div style="
        background:#111827;
        padding:18px;
        border-radius:12px;
        margin-bottom:20px;
      ">

        <h3>Decimal → Binary Converter</h3>

        <input
          id="decInput"
          type="number"
          value="13"
          style="
            width:150px;
            padding:8px;
          "
        >

        <button id="convertBtn">
          Convert
        </button>

        <div
          id="binaryOutput"
          style="
            margin-top:15px;
            font-size:22px;
            color:#4cc9f0;
            font-weight:bold;
          "
        ></div>

        <div
          id="conversionSteps"
          style="
            margin-top:15px;
            color:#cbd5e1;
            white-space:pre-line;
          "
        ></div>

      </div>

      <!-- Binary to Decimal -->

      <div style="
        background:#111827;
        padding:18px;
        border-radius:12px;
        margin-bottom:20px;
      ">

        <h3>Binary → Decimal Converter</h3>

        <input
          id="binInput"
          value="1101"
          style="
            width:200px;
            padding:8px;
          "
        >

        <button id="binaryToDecimalBtn">
          Convert
        </button>

        <div
          id="decimalOutput"
          style="
            margin-top:15px;
            font-size:22px;
            color:#22c55e;
            font-weight:bold;
          "
        ></div>

      </div>

      <!-- Interactive Bits -->

      <div style="
        background:#111827;
        padding:18px;
        border-radius:12px;
        margin-bottom:20px;
      ">

        <h3>Interactive Byte Visualizer</h3>

        <div
          id="bitContainer"
          style="
            display:flex;
            gap:8px;
            flex-wrap:wrap;
            margin-top:15px;
          "
        ></div>

        <div
          id="byteValue"
          style="
            margin-top:15px;
            font-size:20px;
            color:#fbbf24;
          "
        >
          Decimal Value: 0
        </div>

      </div>

      <!-- Binary Counter -->

      <div style="
        background:#111827;
        padding:18px;
        border-radius:12px;
        margin-bottom:20px;
      ">

        <h3>Binary Counter</h3>

        <button id="startCounter">
          Start Counter
        </button>

        <button id="stopCounter">
          Stop Counter
        </button>

        <div
          id="counterDisplay"
          style="
            margin-top:20px;
            font-size:30px;
            color:#38bdf8;
            font-weight:bold;
          "
        >
          00000000
        </div>

      </div>

      <!-- Memory Simulator -->

      <div style="
        background:#111827;
        padding:18px;
        border-radius:12px;
      ">

        <h3>Memory Representation</h3>

        <input
          id="memoryInput"
          type="number"
          value="65"
          style="
            width:150px;
            padding:8px;
          "
        >

        <button id="memoryBtn">
          Store
        </button>

        <div
          id="memoryBlocks"
          style="
            display:flex;
            gap:8px;
            flex-wrap:wrap;
            margin-top:20px;
          "
        ></div>

      </div>

    </div>
  `;

  const decInput =
    container.querySelector("#decInput");

  const convertBtn =
    container.querySelector("#convertBtn");

  const binaryOutput =
    container.querySelector("#binaryOutput");

  const conversionSteps =
    container.querySelector("#conversionSteps");

  const binInput =
    container.querySelector("#binInput");

  const binaryToDecimalBtn =
    container.querySelector(
      "#binaryToDecimalBtn"
    );

  const decimalOutput =
    container.querySelector(
      "#decimalOutput"
    );

  const bitContainer =
    container.querySelector(
      "#bitContainer"
    );

  const byteValue =
    container.querySelector(
      "#byteValue"
    );

  const counterDisplay =
    container.querySelector(
      "#counterDisplay"
    );

  const startCounter =
    container.querySelector(
      "#startCounter"
    );

  const stopCounter =
    container.querySelector(
      "#stopCounter"
    );

  const memoryInput =
    container.querySelector(
      "#memoryInput"
    );

  const memoryBtn =
    container.querySelector(
      "#memoryBtn"
    );

  const memoryBlocks =
    container.querySelector(
      "#memoryBlocks"
    );

  let bits =
    [0,0,0,0,0,0,0,0];

  let counter = 0;

  let timer = null;

  function updateByteValue() {

    let value = 0;

    bits.forEach((bit,index)=>{

      value +=
        bit *
        Math.pow(
          2,
          7-index
        );

    });

    byteValue.innerHTML =
      "Decimal Value: " +
      value;
  }

  function renderBits() {

    bitContainer.innerHTML = "";

    bits.forEach((bit,index)=>{

      const btn =
        document.createElement(
          "button"
        );

      btn.innerHTML = bit;

      btn.style.width = "50px";
      btn.style.height = "50px";
      btn.style.fontSize = "18px";

      btn.onclick = ()=>{

        bits[index] =
          bits[index]
          ? 0
          : 1;

        renderBits();
      };

      bitContainer.appendChild(btn);

    });

    updateByteValue();
  }
    function decimalToBinary() {

    const n =
      parseInt(
        decInput.value
      );

    if (
      isNaN(n) ||
      n < 0
    ) {
      return;
    }

    binaryOutput.innerHTML =
      n.toString(2);

    let temp = n;

    let steps = "";

    while(temp > 0){

      const rem =
        temp % 2;

      steps +=
        temp +
        " ÷ 2 = " +
        Math.floor(temp/2) +
        " remainder " +
        rem +
        "\n";

      temp =
        Math.floor(
          temp/2
        );
    }

    conversionSteps.innerHTML =
      steps ||
      "0 in binary is 0";
  }

  function binaryToDecimal() {

    const binary =
      binInput.value.trim();

    if(
      !/^[01]+$/.test(binary)
    ){

      decimalOutput.innerHTML =
        "Invalid Binary";

      return;
    }

    let value = 0;

    for(
      let i=0;
      i<binary.length;
      i++
    ){

      value =
        value * 2 +
        Number(binary[i]);

    }

    decimalOutput.innerHTML =
      value;
  }

  function updateCounter() {

    counterDisplay.innerHTML =
      counter
        .toString(2)
        .padStart(
          8,
          "0"
        );

    counter++;

    if(counter > 255){

      counter = 0;

    }
  }

  function startBinaryCounter() {

    if(timer){

      return;

    }

    timer =
      setInterval(
        updateCounter,
        300
      );
  }

  function stopBinaryCounter() {

    clearInterval(
      timer
    );

    timer = null;
  }

  function renderMemory(value) {

    memoryBlocks.innerHTML =
      "";

    const binary =
      value
      .toString(2)
      .padStart(
        8,
        "0"
      );

    binary
      .split("")
      .forEach(bit=>{

        const block =
          document.createElement(
            "div"
          );

        block.style.width =
          "60px";

        block.style.height =
          "60px";

        block.style.display =
          "flex";

        block.style.alignItems =
          "center";

        block.style.justifyContent =
          "center";

        block.style.border =
          "1px solid #334155";

        block.style.borderRadius =
          "10px";

        block.style.background =
          "#0f172a";

        block.style.fontSize =
          "22px";

        block.innerHTML =
          bit;

        memoryBlocks.appendChild(
          block
        );

      });
  }

  function initializeMemory() {

    const value =
      parseInt(
        memoryInput.value
      );

    if(
      isNaN(value)
    ){

      return;

    }

    renderMemory(
      value
    );
  }

  convertBtn.onclick =
    decimalToBinary;

  binaryToDecimalBtn.onclick =
    binaryToDecimal;

  startCounter.onclick =
    startBinaryCounter;

  stopCounter.onclick =
    stopBinaryCounter;

  memoryBtn.onclick =
    initializeMemory;

  renderBits();

  decimalToBinary();

  binaryToDecimal();

  initializeMemory();
    function drawBitWeights() {

    const wrapper =
      document.createElement("div");

    wrapper.style.marginTop =
      "12px";

    wrapper.style.color =
      "#94a3b8";

    wrapper.innerHTML = `
      <div style="
        display:flex;
        gap:8px;
        flex-wrap:wrap;
      ">
        <div>128</div>
        <div>64</div>
        <div>32</div>
        <div>16</div>
        <div>8</div>
        <div>4</div>
        <div>2</div>
        <div>1</div>
      </div>
    `;

    bitContainer.parentElement.appendChild(
      wrapper
    );
  }

  function showBinaryExplanation() {

    const explain =
      document.createElement("div");

    explain.style.marginTop =
      "20px";

    explain.style.padding =
      "15px";

    explain.style.borderRadius =
      "12px";

    explain.style.background =
      "#0f172a";

    explain.style.color =
      "#cbd5e1";

    explain.innerHTML = `
      <h3>How Binary Works</h3>

      <p>
        Each bit position represents a
        power of 2.
      </p>

      <p>
        Example:
      </p>

      <p>
        1101₂ =
        1×8 +
        1×4 +
        0×2 +
        1×1
        =
        13₁₀
      </p>

      <p>
        Computers use billions of these
        bits to store numbers,
        images, videos, text and
        software instructions.
      </p>
    `;

    container
      .firstElementChild
      .appendChild(explain);
  }

  drawBitWeights();

  showBinaryExplanation();

}
