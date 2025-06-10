let truckX = 0;

function setup() {

  createCanvas(600, 400);

}

function draw() {

  background(220);

  // Campo e cidade

  drawField(0, 0, width / 2, height);

  drawCity(width / 2, 0, width / 2, height);

  // Caminho

  fill(150);

  rect(0, 300, width, 50);

  // Caminhão

  drawTruck(truckX, 280);

  truckX += 1.5;

  if (truckX > width) {

    truckX = -80;

  }

}

function drawField(x, y, w, h) {

  fill(34, 139, 34);

  rect(x, y + h / 2, w, h / 2);

}

function drawCity(x, y, w, h) {

  fill(169, 169, 169);

  rect(x, y + h / 2, w, h / 2);

  fill(100);

  rect(x + 20, y + 150, 40, 150);

  rect(x + 70, y + 120, 50, 180);

}

function drawTruck(x, y) {

  fill(255, 0, 0);

  rect(x, y, 60, 30);

  fill(0);

  ellipse(x + 10, y + 30, 20);

  ellipse(x + 50, y + 30, 20);

}