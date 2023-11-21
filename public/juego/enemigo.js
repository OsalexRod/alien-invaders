class Enemigo {
  constructor(posicionX, posicionY) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
    this.radio = 15;
    this.direccionX = 1;
  }
  
  mostrar(imagen) {
    push();
    fill(255, 0, 200);
    //circle(this.posicionX, this.posicionY, this.radio * 2);
    image(img, this.posicionX - this.radio, this.posicionY - this.radio, this.radio * 2, this.radio * 2);
    pop();
  }
  
  get getPosicionX () {
    return this.posicionX;
  }
  
  get getPosicionY () {
    return this.posicionY;
  }
  
  get getRadio () {
    return this.radio;
  }
  
  bajarPosicion () {
    this.direccionX *= -1;
    this.posicionY += this.radio;
  }
  
  mover() {
    this.posicionX += this.direccionX;
  }
}