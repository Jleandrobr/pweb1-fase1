import { Component } from '@angular/core';
import {Salao} from '../../shared/modelo/salao';

import { SalaoService } from 'src/app/shared/services/salao.service';
import { SALOES } from 'src/app/shared/modelo/SALOES';

@Component({
  selector: 'app-listagem-salao',
  templateUrl: './listagem-salao.component.html',
  styleUrls: ['./listagem-salao.component.css']
})
export class ListagemSalaoComponent {

  saloes: Salao[] = SALOES;

  constructor(private salaoService: SalaoService) {

  }

  ngOnInit(){
    this.salaoService.listar().subscribe(saloes => this.saloes = saloes);
  }
  excluir(salaoARemover: Salao): void {
    const indx = this.saloes.findIndex(salao =>
      salao.nome === salaoARemover.nome);
    this.saloes.splice(indx, 1);
  }

  editar(salao : Salao): void{
    salao.nome += "Alteração Concluida";
  }

}
