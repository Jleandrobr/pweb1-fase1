import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemSalaoComponent} from './salao/mantem-salao/mantem-salao.component';
import {ListagemSalaoComponent} from './salao/listagem-salao/listagem-salao.component';

const routes: Routes = [
  {
    path: 'cadastrosalao',
    component: MantemSalaoComponent
  },
  {
    path: 'editasalao/:id',
    component: MantemSalaoComponent
  },
  {
    path: 'listagemsaloes',
    component: ListagemSalaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
