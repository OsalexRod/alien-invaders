class Enemigo {
  constructor(imagen, posicionX, posicionY) {
    this.imagen = imagen;
    this.posicionX = posicionX;
    this.posicionY = posicionY;
    this.radio = 15;
    this.direccionX = 1;
  }
  
  mostrar () {
    push();
    //fill(255, 0, 200);
    //circle(this.posicionX, this.posicionY, this.radio * 2);
    image(this.imagen, this.posicionX - this.radio, this.posicionY - this.radio, this.radio * 2, this.radio * 2);
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
  
  mover () {
    this.posicionX += this.direccionX;
  }
}