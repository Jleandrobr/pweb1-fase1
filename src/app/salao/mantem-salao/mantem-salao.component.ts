import { Component } from '@angular/core';
import {Salao} from '../../shared/modelo/salao';
import {SALOES} from '../../shared/modelo/SALOES';
import {ActivatedRoute, Router} from '@angular/router';
import {SalaoService} from '../../shared/services/salao.service';

@Component({
  selector: 'app-mantem-jogador',
  templateUrl: './mantem-salao.component.html',
  styleUrls: ['./mantem-salao.component.css']
})
export class MantemSalaoComponent {

  salaoDeManutencao: Salao;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  
  saloes: Array<Salao> = SALOES;


  constructor(private rotaAtual: ActivatedRoute, private roteador: Router
    , private salaoService: SalaoService) {
    this.salaoDeManutencao = new Salao('', '', '');
    this.salaoService.listar().subscribe(saloes => this.saloes = saloes);
    
    
  }

  ngOnInit():void{

  }

  manter(): void {
    if (this.estahCadastrando && this.salaoDeManutencao) {
      this.salaoService.inserir(this.salaoDeManutencao);
    }
    this.salaoDeManutencao = new Salao();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemsaloes']);//
  }

}
