let nave;
let enemigos = [];
let balas = [];
let imagenEnemigo;
let imagenNave;

function preload() {
  imagenEnemigo = loadImage('./imagenes/enemigo.svg');
  imagenNave = loadImage('./imagenes/nave.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  nave = new Nave(imagenNave);
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 5; i++) {
      enemigos.push(new Enemigo(imagenEnemigo, i * 50 + 60, j * 50 + 60)); 
    }
  }
}

function draw() {
  background(51);
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
    enemigos[i].mostrar();
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
    let nuevaBala = new Bala(nave.getposicionX, nave.getPosicionY - nave.getRadio);
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