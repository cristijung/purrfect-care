import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.scss',
})
export class Contador {
  // exemplo de Event Binder

  public contador = 0;
  public incrementar() {
    this.contador++;
  }
}
