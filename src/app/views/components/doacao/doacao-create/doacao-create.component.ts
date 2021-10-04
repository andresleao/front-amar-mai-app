import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doacao } from 'src/app/models/Doacao';
import { DoacaoUsuario } from 'src/app/models/DoacaoUsuario';
import { Item } from 'src/app/models/Item';
import { AuthService } from 'src/app/services/auth.service';
import { DoacaoService } from 'src/app/services/doacao.service';

@Component({
  selector: 'app-doacao-create',
  templateUrl: './doacao-create.component.html',
  styleUrls: ['./doacao-create.component.css']
})
export class DoacaoCreateComponent implements OnInit {

  usuario: DoacaoUsuario = {
    id: ''
  }

  item: Item = {
    nome: '',
    descricao: '',
    classificacao: 0,
    foto: null
  }

  itens: Item[] = [
    this.item
  ];

  doacao: Doacao = {
    usuario: this.usuario,
    itens: this.itens
  }
  
  constructor(
    private service: DoacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuario.id = localStorage.getItem('id');
  }

  nome = new FormControl('', [Validators.minLength(3)]);
  descricao = new FormControl('', [Validators.minLength(5)]);

  create(): void {
    this.service.create(this.doacao).subscribe((response) => {
      this.router.navigate(['doacoes']);
      this.service.message("Doação criada com sucesso!");
    });
  }
 
  voltar() {
    this.router.navigate(['doacoes']);
  }

  errorValidName() {
    if (this.nome.invalid) {
      return 'O nome deve ter entre 3 a 100 caracteres!';
    }
    return false;
  }

  errorValidDescricao() {
    if (this.descricao.invalid) {
      return 'A descrição deve ter entre 5 a 200 caracteres!';
    }
    return false;
  }
  
 

}
