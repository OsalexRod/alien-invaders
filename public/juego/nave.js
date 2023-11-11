class Nave {
  constructor() {
    this.posicionX = width/2;
    this.direccionX = 0;
  }
  
  mostrar() {
    push();
    fill(255);
    rectMode(CENTER);
    rect(this.posicionX, height - 20, 20, 20);
    pop();
  }
  
  set setDireccionX(nuevaDireccionX) {
    this.direccionX = nuevaDireccionX;
  }
  
  mover () {
    this.posicionX += this.direccionX * 3;
  }
  
  get getposicionX() {
    return this.posicionX;
  }
}