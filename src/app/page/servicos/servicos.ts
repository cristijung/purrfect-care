import { Component } from '@angular/core';
import { Botao } from "../../components/botao/botao";
import { Contador } from "../../components/contador/contador";

@Component({
  selector: 'app-servicos',
  imports: [Botao, Contador],
  templateUrl: './servicos.html',
  styleUrl: './servicos.scss'
})
export class Servicos {
  title = 'Venha conhecer nosso Serviços!';
  count = 'Conheça nosso contador de gatos!';

}
