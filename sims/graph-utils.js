export function drawAxes(ctx, W, H) {

  // Background grid
  ctx.strokeStyle = "#1f2937";
  ctx.lineWidth = 1;

  for(let x=0;x<=W;x+=50){
    ctx.beginPath();
    ctx.moveTo(x,0);
    ctx.lineTo(x,H);
    ctx.stroke();
  }

  for(let y=0;y<=H;y+=50){
    ctx.beginPath();
    ctx.moveTo(0,y);
    ctx.lineTo(W,y);
    ctx.stroke();
  }

  // X-axis
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(0,H/2);
  ctx.lineTo(W,H/2);
  ctx.stroke();

  // Y-axis
  ctx.beginPath();
  ctx.moveTo(W/2,0);
  ctx.lineTo(W/2,H);
  ctx.stroke();

  // Labels
  ctx.fillStyle = "#ffffff";
  ctx.font = "16px Arial";

  ctx.fillText("x-axis", W-70, H/2-10);
  ctx.fillText("y-axis", W/2+10, 20);
}

export function drawLegend(ctx, items) {

  let y = 25;

  items.forEach(item => {

    ctx.fillStyle = item.color;

    ctx.fillRect(520,y-12,18,18);

    ctx.fillStyle = "white";

    ctx.fillText(
      item.label,
      550,
      y+2
    );

    y += 25;
  });
}
