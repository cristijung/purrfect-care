
export interface Consulta {
  especialidadeId: string | null;
  medicoId: string | null;
  exameId: string | null;
}

export interface Especialidade {
  id: string;
  nome: string;
}

export interface Medico {
  id: string;
  nome: string;
}

export interface Exame {
  id: string;
  nome: string;
  especialidadeId: string;
}