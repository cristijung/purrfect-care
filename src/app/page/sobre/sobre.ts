import { Component } from '@angular/core';
import { User } from '../../models/user.interface';
import { UserList } from '../../components/user-list/user-list';

@Component({
  selector: 'app-sobre',
  imports: [UserList],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss'
})
export class Sobre {
  title = 'Conheça sobre nossa clínica e equipe de médicos veterinários'

  // dados q serão passados p o componente filho
  usersData: User[] = [
    { id: 1, name: 'Dra. Ana Banana', email: 'ana@email.com' },
    { id: 2, name: 'Dra. Bia Souza', email: 'bia@email.com' },
    { id: 3, name: 'Dr. José Silva', email: 'jose@email.com' },
    { id: 4, name: 'Dra. Anaí Banana', email: 'anai@email.com' }
  ];

  onUserDeleted(userId: number) {
    console.log(`Evento reebido do filjo: deletar user pelo ID ${userId}`);
    // filtrar o array p remover o user com o ID recebido
    this.usersData = this.usersData.filter(user => user.id !== userId);
  }

}
