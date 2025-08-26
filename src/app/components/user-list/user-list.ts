import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  //ex de Two-way DB usando decorators @Input e @Output
  title = 'Usuários Cadastrados';

  //@Input: recebe a lista de users do componente pai
  @Input() users: User[] = [];

  //@Output: emite um evento qdo um user é deletado
  //<number> indica q o evento vai emitir o 'id' do user
  @Output() userDeleted = new EventEmitter<number>();

  deletedUser(userId: number) {
    this.userDeleted.emit(userId);
  }
}
