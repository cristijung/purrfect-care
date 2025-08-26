import { Component } from '@angular/core';
import { Form } from '../../components/form/form';

@Component({
  selector: 'app-contato',
  imports: [Form],
  templateUrl: './contato.html',
  styleUrl: './contato.scss'
})
export class Contato {
  title = 'Entre em contato conosco';

}
