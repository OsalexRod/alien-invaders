let nave;
let enemigos = [];
let balas = [];
//let img;

//function preload() {
//  img = loadImage('imagenes/enemigo-copia.svg');
//}

function setup() {
  createCanvas(400, 400);
  print("atualizacion 1");
  nave = new Nave();
  for (let i = 0; i < 5; i++) {
    enemigos[i] = new Enemigo(i * 40 + 40 , 60); 
  }
}

function dibujarBicho() {
  push();
  
  //image(img, 100, 100, 50, 50, 0, 0, img.width, img.height, COVER, CENTER , CENTER);
  point(100,100)
  pop();
}

function draw() {
  background(51);
  //dibujarBicho();
  for (let i = 0; i < balas.length; i++) {
    balas[i].mostrar();
    balas[i].mover();
    let indiceEnemigoGolpeado;
    for (let j = 0; j < enemigos.length; j++) {
      if (balas[i].golpea(enemigos[j])) {
        print("bala golpeo a enemigo");
        indiceEnemigoGolpeado = j;
      }
    }
    if (indiceEnemigoGolpeado) {
      enemigos.splice(indiceEnemigoGolpeado, 1);
      balas[i].balaNoFuncional();
    } else if (balas[i].getPosicionY < 0) {
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