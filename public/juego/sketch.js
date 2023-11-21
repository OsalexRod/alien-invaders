let nave;
let enemigos = [];
let balas = [];
let img;

function preload() {
  img = loadImage('./public/imagenes/enemigo.svg');
}

function setup() {
  createCanvas(500, 500);
  print("atualizacion 3");
  nave = new Nave();
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 5; i++) {
      enemigos.push(new Enemigo(i * 50 + 60, j * 50 + 60)); 
    }
  }
}

function dibujarBicho() {
  push();
  image(img, 75, 75, 50, 50);
  stroke('purple');
  strokeWeight(10);
  point(100,100)
  pop();
}

function draw() {
  background(51);
  //dibujarBicho();
  for (let i = 0; i < balas.length; i++) {
    balas[i].mostrar();
    balas[i].mover();

    for (let j = 0; j < enemigos.length; j++) {
      if (balas[i].golpea(enemigos[j])) {
        print("bala golpeo a enemigo : ", j);
        print("quitar enemigo");
        enemigos.splice(j, 1);
        balas[i].balaNoFuncional();
      }
    }
    if (balas[i].getPosicionY < 0) {
      balas[i].balaNoFuncional();
      print("bala salio de area");
    }
  }
  nave.mostrar();
  nave.mover();
  
  
  let enemigoTocoEsquina = false;
  for (let i = 0; i < enemigos.length; i++) {
    enemigos[i].mostrar(img);
    enemigos[i].mover();
    if (enemigos[i].getPosicionX + enemigos[i].getRadio > width || enemigos[i].getPosicionX - enemigos[i].getRadio < 0) {
      enemigoTocoEsquina = true;
    }
  }
  if (enemigoTocoEsquina) {
    for (let i = 0; i < enemigos.length; i++) {
      enemigos[i].bajarPosicion();
    }
  }
  
  
  
  for (let i = 0; i < balas.length; i++) {
    if (!balas[i].getBalaFuncional) {
      balas.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    let nuevaBala = new Bala(nave.getposicionX, height - 20);
    balas.push(nuevaBala);
  }
  
  if (keyCode === RIGHT_ARROW) {
    nave.setDireccionX = 1;
  } else if (keyCode === LEFT_ARROW) {
    nave.setDireccionX = -1;
  }
}

function keyReleased() {
  if (key != ' ') {
    nave.setDireccionX = 0; 
  }
}