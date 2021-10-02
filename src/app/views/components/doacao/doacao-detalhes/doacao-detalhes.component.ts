import { ItemList } from './../../../../models/ItemList';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoacaoList } from 'src/app/models/DoacaoList';
import { UsuarioList } from 'src/app/models/UsuarioList';
import { DoacaoService } from 'src/app/services/doacao.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-doacao-detalhes',
  templateUrl: './doacao-detalhes.component.html',
  styleUrls: ['./doacao-detalhes.component.css']
})
export class DoacaoDetalhesComponent implements OnInit {

  id_doacao: string | null = '';

  user: UsuarioList = {
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    bairro: ''
  }

  itensDoacao: ItemList = {
    id: '',
    nome: '',
    descricao: '',
    classificacao: ''
  }

  doacao: DoacaoList = {
    id: '',
    dataCriacao: '',
    usuario: this.user,
    itens: [this.itensDoacao]
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: DoacaoService
  ) { }

  ngOnInit(): void {
    this.id_doacao = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_doacao).subscribe(resposta => {
      this.doacao = resposta;
      console.log(resposta);
    });
  }

  voltar() {
    this.router.navigate(['/doacoes']);
  }

}
