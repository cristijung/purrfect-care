import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
  // exemplo de two-way data binding
  public name: string = '';
  public email: string = '';

}
