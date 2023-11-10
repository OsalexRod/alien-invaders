class Bala {
  constructor(posicionX, posicionY) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
    this.radio = 8;
    this.balaFuncional = true;
  }
  
  mostrar() {
    push();
    noStroke();
    fill(150, 0, 255);
    ellipse(this.posicionX, this.posicionY, this.radio * 2, this.radio * 2);
    pop();
  }
  
  mover () {
    this.posicionY = this.posicionY - 1
  }
  
  get getPosicionY() {
    return this.posicionY;
  }
  
  get getBalaFuncional() {
    return this.balaFuncional;
  }
  
  golpea (objetivo) {
    let distancia = dist(this.posicionX, this.posicionY, objetivo.getPosicionX, objetivo.getPosicionY);
    return distancia < this.radio + objetivo.getRadio;
  }
  
  balaNoFuncional () {
    this.balaFuncional = false;
  }
}