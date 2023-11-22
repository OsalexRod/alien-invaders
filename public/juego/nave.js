class Nave {
  constructor(imagen) {
    this.imagen = imagen;
    this.posicionX = width / 2;
    this.direccionX = 0;
    this.posicionY = height - 40;
    this.radio = 25;
    this.limitePantalla = 30
  }
  
  mostrar() {
    push();
    //fill(255);
    //rectMode(CENTER);
    //rect(this.posicionX, height - 20, 20, 20);
    image(this.imagen, this.posicionX - this.radio, this.posicionY - this.radio, this.radio * 2, this.radio * 2);
    pop();
  }
  
  set setDireccionX (nuevaDireccionX) {
    this.direccionX = nuevaDireccionX;
  }

  get getposicionX () {
    return this.posicionX;
  }

  get getPosicionY () {
    return this.posicionY;
  }

  get getRadio() {
    return this.radio;
  }

  mover () {
    if (this.direccionX < 0) {
      if (this.posicionX > this.limitePantalla) {
        this.posicionX += this.direccionX * 3;
      }
    } else {
      if (this.posicionX < width - this.limitePantalla) {
        this.posicionX += this.direccionX * 3;
      }
    }
  }
}