import { Component } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.html',
  styleUrl: './botao.scss',
})
export class Botao {  
  //exemplo de Property Binding
  estaDesabilitado: boolean = true;
  alternarEstado() {
    this.estaDesabilitado = !this.estaDesabilitado;
  }
}

