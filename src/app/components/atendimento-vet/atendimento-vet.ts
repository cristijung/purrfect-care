import { Component, input, output, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Consulta, Especialidade, Medico, Exame } from '../../models/types';

@Component({
  selector: 'app-atendimento-vet',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './atendimento-vet.html',
  styleUrl: './atendimento-vet.scss',
})
export class AtendimentoVet {
  // dados simples
  especialidades: Especialidade[] = [
    { id: '1', nome: 'Cardiologia' },
    { id: '2', nome: 'Oftalmologia' },
    { id: '3', nome: 'Dermatologia' },
    { id: '4', nome: 'Oncologia' },
  ];

  medicos: Medico[] = [
    { id: 'med1', nome: 'Dra Ana Banana' },
    { id: 'med2', nome: 'Dra Bia Sarmento' },
    { id: 'med3', nome: 'Dr Pafúncio Gonçalves' },
    { id: 'med4', nome: 'Dra Melissa Silveira' },
  ];

  exames: Exame[] = [
    { id: 'ex1', nome: 'Ecocardiograma', especialidadeId: '1' },
    { id: 'ex2', nome: 'Eletroardiograma', especialidadeId: '1' },
    { id: 'ex3', nome: 'Mapeamento de Retina', especialidadeId: '2' },
    { id: 'ex4', nome: 'Biópsia', especialidadeId: '4' },
    { id: 'ex5', nome: 'Exame de fungo', especialidadeId: '3' },
  ];

  consulta = input.required<Consulta>();
  consultaChange = output<Consulta>();

  selectedEspecialidade = computed(() => this.consulta().especialidadeId);

  examesFiltrados = computed(() => {
    const especialidadeId = this.selectedEspecialidade();
    if (especialidadeId) {
      return this.exames.filter((exame) => exame.especialidadeId === especialidadeId);
    }
    return [];
  });

  onEspecialidadeChange(id: string) {
    this.consultaChange.emit({
      especialidadeId: id,
      medicoId: null,
      exameId: null,
    });
  }

  onMedicoChange(id: string) {
    this.consultaChange.emit({ ...this.consulta(), medicoId: id });
  }

  onExameChange(id: string) {
    this.consultaChange.emit({ ...this.consulta(), exameId: id });
  }
}
