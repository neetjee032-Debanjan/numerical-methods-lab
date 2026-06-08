// ---------- SIMULATION 1: HISTOGRAM (mean/median simulation) ----------
const canvasHist = document.getElementById('histogramCanvas');
let histChart = null;

function generateRandomData(n) {
    // generate moderately right-skewed mixture to show interesting mean/median difference
    let data = [];
    for(let i = 0; i < n; i++) {
        // mix of normal + exponential to mimic real data
        let val = Math.random() < 0.7 ? (Math.random() * 30 + 10) : (Math.random() * 50 + 20);
        // add some skewness via exponent
        if(Math.random() > 0.6) val += Math.random() * 25;
        data.push(parseFloat(val.toFixed(1)));
    }
    return data;
}

let currentData = generateRandomData(50);

function updateHistogram() {
    const bins = 12;
    const minVal = Math.min(...currentData);
    const maxVal = Math.max(...currentData);
    const binWidth = (maxVal - minVal) / bins;
    let counts = new Array(bins).fill(0);
    let binLabels = [];
    for(let i=0; i<bins; i++) {
        let lower = minVal + i*binWidth;
        let upper = lower + binWidth;
        binLabels.push(`${lower.toFixed(1)}-${upper.toFixed(1)}`);
    }
    for(let val of currentData) {
        let idx = Math.min(bins-1, Math.floor((val - minVal) / binWidth));
        if(idx>=0 && idx<bins) counts[idx]++;
    }
    
    const meanVal = (currentData.reduce((a,b)=>a+b,0)/currentData.length).toFixed(2);
    const sorted = [...currentData].sort((a,b)=>a-b);
    let median;
    const mid = Math.floor(sorted.length/2);
    if(sorted.length %2 ===0) median = ((sorted[mid-1]+sorted[mid])/2).toFixed(2);
    else median = sorted[mid].toFixed(2);
    
    const variance = currentData.reduce((acc,val)=> acc + Math.pow(val - parseFloat(meanVal),2),0)/currentData.length;
    const stdDev = Math.sqrt(variance).toFixed(2);
    
    document.getElementById('meanVal').innerText = meanVal;
    document.getElementById('medianVal').innerText = median;
    document.getElementById('stdVal').innerText = stdDev;
    
    if(histChart) histChart.destroy();
    histChart = new Chart(canvasHist, {
        type: 'bar',
        data: { labels: binLabels, datasets: [{ label: 'Frequency', data: counts, backgroundColor: '#3b82f6', borderRadius: 8 }] },
        options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (ctx) => `Count: ${ctx.raw}` } } } }
    });
}

document.getElementById('sampleSizeSlider').addEventListener('input', (e) => {
    let newSize = parseInt(e.target.value);
    document.getElementById('sampleSizeVal').innerText = newSize;
    currentData = generateRandomData(newSize);
    updateHistogram();
});

document.getElementById('refreshDataBtn').addEventListener('click', () => {
    let size = parseInt(document.getElementById('sampleSizeSlider').value);
    currentData = generateRandomData(size);
    updateHistogram();
});

// ---------- SIMULATION 2: LINEAR REGRESSION ----------
const canvasReg = document.getElementById('regressionCanvas');
let regChart = null;
let currentX = [], currentY = [];

function generateRegressionData(slope, noiseLevel, n=45) {
    let x = Array.from({length: n}, (_,i) => (i / (n-1)) * 10 + 1); // 1..11 range
    let y = [];
    let intercept = 5.0;
    for(let xi of x) {
        let trueVal = intercept + slope * xi;
        let noise = (Math.random() - 0.5) * noiseLevel * 3;
        y.push(parseFloat((trueVal + noise).toFixed(2)));
    }
    return {x, y};
}

function computeLinearRegression(xArr, yArr) {
    let n = xArr.length;
    let sumX = xArr.reduce((a,b)=>a+b,0);
    let sumY = yArr.reduce((a,b)=>a+b,0);
    let sumXY = 0, sumX2 = 0;
    for(let i=0;i<n;i++) { sumXY += xArr[i]*yArr[i]; sumX2 += xArr[i]*xArr[i]; }
    let denominator = (n * sumX2 - sumX*sumX);
    let slope = (n * sumXY - sumX*sumY) / denominator;
    let intercept = (sumY - slope*sumX) / n;
    // compute R2
    let ssRes = 0, ssTot = 0;
    let meanY = sumY/n;
    for(let i=0;i<n;i++) {
        let pred = intercept + slope*xArr[i];
        ssRes += (yArr[i]-pred)**2;
        ssTot += (yArr[i]-meanY)**2;
    }
    let r2 = 1 - (ssRes/ssTot);
    r2 = r2<0?0:r2>1?1:r2;
    return {slope, intercept, r2};
}

let currentSlope = 2.0, currentNoise = 1.5;
let regressionData = {x:[], y:[]};

function refreshRegression() {
    currentSlope = parseFloat(document.getElementById('slopeSlider').value);
    currentNoise = parseFloat(document.getElementById('noiseSlider').value);
    document.getElementById('slopeVal').innerText = currentSlope.toFixed(2);
    document.getElementById('noiseVal').innerText = currentNoise.toFixed(2);
    
    let {x, y} = generateRegressionData(currentSlope, currentNoise, 45);
    regressionData = {x, y};
    let {slope, intercept, r2} = computeLinearRegression(x, y);
    document.getElementById('interceptVal').innerText = intercept.toFixed(2);
    document.getElementById('slopeDisplay').innerText = slope.toFixed(3);
    document.getElementById('rsquaredVal').innerText = r2.toFixed(3);
    updateRegPlot(slope, intercept);
}

function updateRegPlot(fittedSlope, fittedIntercept) {
    if(regChart) regChart.destroy();
    let scatterPoints = regressionData.x.map((xi, idx) => ({x: xi, y: regressionData.y[idx]}));
    let lineX = [Math.min(...regressionData.x), Math.max(...regressionData.x)];
    let lineY = lineX.map(x => fittedIntercept + fittedSlope * x);
    regChart = new Chart(canvasReg, {
        type: 'scatter',
        data: { datasets: [
            { label: 'Observed Data', data: scatterPoints, backgroundColor: '#ef4444', borderColor: '#ef4444', pointRadius: 5, type: 'scatter' },
            { label: 'Regression Line', data: lineX.map((x,i) => ({x: x, y: lineY[i]})), type: 'line', borderColor: '#2563eb', borderWidth: 3, fill: false, pointRadius: 0 }
        ] },
        options: { responsive: true, maintainAspectRatio: true, scales: { x: { title: { display: true, text: 'Ad Spend (X)' } }, y: { title: { display: true, text: 'Sales (Y)' } } }, plugins: { tooltip: { callbacks: { label: (ctx) => `(${ctx.parsed.x.toFixed(2)}, ${ctx.parsed.y.toFixed(2)})` } } } }
    });
}

document.getElementById('slopeSlider').addEventListener('input', () => refreshRegression());
document.getElementById('noiseSlider').addEventListener('input', () => refreshRegression());
document.getElementById('refreshRegBtn').addEventListener('click', () => refreshRegression());

// initialise everything
function initAll() {
    updateHistogram();
    // initial regression
    let initSlope = 2.0, initNoise=1.5;
    let initGen = generateRegressionData(initSlope, initNoise, 45);
    regressionData = {x: initGen.x, y: initGen.y};
    let {slope, intercept, r2} = computeLinearRegression(regressionData.x, regressionData.y);
    document.getElementById('interceptVal').innerText = intercept.toFixed(2);
    document.getElementById('slopeDisplay').innerText = slope.toFixed(3);
    document.getElementById('rsquaredVal').innerText = r2.toFixed(3);
    document.getElementById('slopeSlider').value = 2.0;
    document.getElementById('noiseSlider').value = 1.5;
    document.getElementById('slopeVal').innerText = "2.0";
    document.getElementById('noiseVal').innerText = "1.5";
    updateRegPlot(slope, intercept);
}

initAll();
