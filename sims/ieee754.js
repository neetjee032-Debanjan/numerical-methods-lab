export function runIEEE754(container) {

container.innerHTML = `

<div
style="
padding:24px;
background:rgba(15,23,42,.7);
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
IEEE 754 Floating Point Laboratory
</h2>

<p
style="
color:#94a3b8;
margin-bottom:25px;
"
>
Convert numbers into IEEE754 floating-point format
and visualize every bit of memory.
</p>

<div
style="
display:flex;
gap:10px;
flex-wrap:wrap;
margin-bottom:20px;
"
>

<input
id="decimalInput"
type="number"
step="any"
value="13.625"
placeholder="Enter Decimal Number"
style="
padding:12px;
border-radius:12px;
width:220px;
"
/>

<select
id="precision"
style="
padding:12px;
border-radius:12px;
"
>

<option value="32">
Single Precision (32-bit)
</option>

<option value="64">
Double Precision (64-bit)
</option>

</select>

<button
id="convertBtn"
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
Convert
</button>

<button
id="resetBtn"
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
Reset
</button>

</div>

<div id="status"></div>

<div id="steps"></div>

<div id="layout"></div>

<div id="hexView"></div>

<div id="memoryView"></div>

</div>

`;

const decimalInput =
container.querySelector("#decimalInput");

const precision =
container.querySelector("#precision");

const convertBtn =
container.querySelector("#convertBtn");

const resetBtn =
container.querySelector("#resetBtn");

const status =
container.querySelector("#status");

const steps =
container.querySelector("#steps");

const layout =
container.querySelector("#layout");

const hexView =
container.querySelector("#hexView");

const memoryView =
container.querySelector("#memoryView");

function clearAll(){

status.innerHTML = "";
steps.innerHTML = "";
layout.innerHTML = "";
hexView.innerHTML = "";
memoryView.innerHTML = "";

}

resetBtn.onclick = () => {

decimalInput.value = "13.625";

clearAll();

};

function binaryFractionToString(value){

let integerPart =
Math.floor(Math.abs(value));

let fractionalPart =
Math.abs(value) - integerPart;

let intBinary =
integerPart.toString(2);

let fracBinary = "";

let count = 0;

while(
fractionalPart > 0 &&
count < 20
){

fractionalPart *= 2;

if(fractionalPart >= 1){

fracBinary += "1";

fractionalPart -= 1;

}else{

fracBinary += "0";

}

count++;

}

return {
integer:intBinary,
fraction:fracBinary
};

}
function float32ToBinary(num){

const buffer =
new ArrayBuffer(4);

const view =
new DataView(buffer);

view.setFloat32(
0,
num,
false
);

let binary = "";

for(let i=0;i<4;i++){

binary +=
view
.getUint8(i)
.toString(2)
.padStart(8,"0");

}

return binary;

}

function float64ToBinary(num){

const buffer =
new ArrayBuffer(8);

const view =
new DataView(buffer);

view.setFloat64(
0,
num,
false
);

let binary = "";

for(let i=0;i<8;i++){

binary +=
view
.getUint8(i)
.toString(2)
.padStart(8,"0");

}

return binary;

}

function binaryToHex(binary){

let hex = "";

for(
let i=0;
i<binary.length;
i+=4
){

hex += parseInt(
binary.slice(i,i+4),
2
)
.toString(16)
.toUpperCase();

}

return hex;

}

function decodeIEEE(binary,precision){

let sign;
let exponent;
let mantissa;

if(precision === 32){

sign =
binary[0];

exponent =
binary.slice(1,9);

mantissa =
binary.slice(9);

}
else{

sign =
binary[0];

exponent =
binary.slice(1,12);

mantissa =
binary.slice(12);

}

return {
sign,
exponent,
mantissa
};

}

function buildBitCard(bit,color){

return `

<div
style="
width:32px;
height:32px;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
border-radius:8px;
background:${color};
"
>
${bit}
</div>

`;

}

function sleep(ms){

return new Promise(
resolve =>
setTimeout(resolve,ms)
);

}

async function animateSteps(num,binary,precision){

clearAll();

const signBits =
precision === 32
? 1
: 1;

const exponentBits =
precision === 32
? 8
: 11;

const mantissaBits =
precision === 32
? 23
: 52;

const parts =
decodeIEEE(
binary,
precision
);

const bin =
binaryFractionToString(num);

status.innerHTML = `

<div
style="
background:#0f172a;
padding:16px;
border-radius:12px;
margin-bottom:20px;
"
>

Decimal Number:

<b>${num}</b>

</div>

`;

await sleep(500);

steps.innerHTML += `

<div
style="
padding:15px;
margin-bottom:12px;
background:#111827;
border-radius:12px;
"
>

<b>Step 1:</b>

Convert Decimal to Binary

<br><br>

Integer Part:

${bin.integer}

<br>

Fractional Part:

.${bin.fraction}

</div>

`;

await sleep(700);

steps.innerHTML += `

<div
style="
padding:15px;
margin-bottom:12px;
background:#111827;
border-radius:12px;
"
>

<b>Step 2:</b>

IEEE754 Structure

<br><br>

Sign Bits:
${signBits}

<br>

Exponent Bits:
${exponentBits}

<br>

Mantissa Bits:
${mantissaBits}

</div>

`;

await sleep(700);

steps.innerHTML += `

<div
style="
padding:15px;
margin-bottom:12px;
background:#111827;
border-radius:12px;
"
>

<b>Step 3:</b>

Extract Fields

<br><br>

Sign:
${parts.sign}

<br>

Exponent:
${parts.exponent}

<br>

Mantissa:
${parts.mantissa}

</div>

`;

}
function renderLayout(binary,precision){

const parts =
decodeIEEE(
binary,
precision
);

layout.innerHTML = `

<div
style="
margin-top:25px;
padding:20px;
border-radius:16px;
background:#0f172a;
"
>

<h3 style="margin-bottom:15px;">
IEEE754 Bit Layout
</h3>

<div
style="
display:flex;
gap:4px;
flex-wrap:wrap;
margin-bottom:20px;
"
>

${parts.sign
.split("")
.map(
bit =>
buildBitCard(
bit,
"#16a34a"
)
)
.join("")}

${parts.exponent
.split("")
.map(
bit =>
buildBitCard(
bit,
"#2563eb"
)
)
.join("")}

${parts.mantissa
.split("")
.map(
bit =>
buildBitCard(
bit,
"#9333ea"
)
)
.join("")}

</div>

<div
style="
display:flex;
gap:25px;
flex-wrap:wrap;
font-size:14px;
"
>

<div>
🟢 Sign
</div>

<div>
🔵 Exponent
</div>

<div>
🟣 Mantissa
</div>

</div>

</div>

`;

}

function renderHex(binary){

const hex =
binaryToHex(binary);

hexView.innerHTML = `

<div
style="
margin-top:20px;
padding:20px;
border-radius:16px;
background:#111827;
"
>

<h3>
Hexadecimal Representation
</h3>

<div
style="
font-size:28px;
font-weight:bold;
margin-top:10px;
color:#60a5fa;
letter-spacing:3px;
"
>

${hex}

</div>

</div>

`;

}

function renderMemory(binary){

memoryView.innerHTML = `

<div
style="
margin-top:20px;
padding:20px;
border-radius:16px;
background:#111827;
"
>

<h3>
Memory View
</h3>

<div
style="
margin-top:15px;
font-family:monospace;
font-size:18px;
word-break:break-all;
line-height:1.8;
color:#f8fafc;
"
>

${binary}

</div>

</div>

`;

}

convertBtn.onclick =
async () => {

const value =
parseFloat(
decimalInput.value
);

if(
isNaN(value)
){

status.innerHTML = `

<div
style="
padding:14px;
border-radius:12px;
background:#7f1d1d;
color:white;
"
>

Please enter a valid number.

</div>

`;

return;

}

const mode =
Number(
precision.value
);

const binary =
mode === 32
? float32ToBinary(value)
: float64ToBinary(value);

await animateSteps(
value,
binary,
mode
);

await sleep(700);

renderLayout(
binary,
mode
);

await sleep(500);

renderHex(binary);

await sleep(500);

renderMemory(binary);

status.innerHTML = `

<div
style="
margin-top:15px;
padding:14px;
border-radius:12px;
background:#14532d;
color:white;
"
>

✅ Conversion Completed

</div>

`;

};

}
