import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Sobre } from './page/sobre/sobre';
import { Servicos } from './page/servicos/servicos';
import { Contato } from './page/contato/contato';
import { NotFound } from './page/not-found/not-found';
import { Saude } from './page/saude/saude';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full',},
    { path: 'home', component: Home },
    { path: 'sobre', component: Sobre },
    { path: 'servicos', component: Servicos },
    { path: 'saude', component: Saude },
    { path: 'contato', component: Contato },
    { path: '**', component: NotFound },

];
