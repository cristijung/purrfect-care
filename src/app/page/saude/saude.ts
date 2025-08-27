import { Component, signal } from '@angular/core';
import { AtendimentoVet } from '../../components/atendimento-vet/atendimento-vet';
import { Consulta } from '../../models/types';

@Component({
  selector: 'app-saude',
  standalone: true,
  imports: [AtendimentoVet],
  templateUrl: './saude.html',
  styleUrl: './saude.scss',
})
export class Saude {
  // o signal armazena o estado atual do agendamento
  // ele é a FONTE DA VERDADE q será sincronizada com o componente filho
  consultaAtual = signal<Consulta>({
    especialidadeId: null,
    medicoId: null,
    exameId: null,
  });
}
