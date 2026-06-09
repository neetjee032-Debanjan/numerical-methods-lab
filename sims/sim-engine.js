export function createChart(container, label) {
  const canvas = document.createElement("canvas");
  container.innerHTML = "";
  container.appendChild(canvas);

  return {
    canvas,
    ctx: canvas.getContext("2d"),
    label
  };
}

export function renderLineChart(canvas, labels, data, label) {
  new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label,
        data,
        borderColor: "#3b82f6",
        tension: 0.3
      }]
    }
  });
}
