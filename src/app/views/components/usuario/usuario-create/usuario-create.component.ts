import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioDto } from 'src/app/models/usuarioDto';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  showSuccesMessage: boolean = true;

  usuario: UsuarioDto = {
    id: '',
    nome: '',
    sobrenome: '',
    cpf: '',
    email: '',
    cidade: '',
    bairro: '',
    telefone: '',
    senha: ''
  }
  
  nome = new FormControl('', [Validators.minLength(3)]);
  sobrenome = new FormControl('', [Validators.minLength(2)]);
  cpf = new FormControl('', [Validators.minLength(11)]);
  email = new FormControl('', [Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]);
  cidade = new FormControl('', [Validators.minLength(2)]);
  bairro = new FormControl('', [Validators.minLength(2)]);
  telefone = new FormControl('', [Validators.pattern('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$')]);
  senha = new FormControl('', [Validators.minLength(5)]);

  constructor (
    private router : Router,
    private service: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.usuario).subscribe((resposta) => {
      this.router.navigate(['login']);
      this.service.message("Usuário criado com sucesso!");
    },  err => {
      if (err.error.error.match('CPF e Email já cadastrados!')) {
        this.service.message(err.error.error);
      } else if (err.error.error.match('CPF já cadastrado!')) {
        this.service.message(err.error.error);
      } else if (err.error.error.match('Email já cadastrado!')) {
        this.service.message(err.error.error);
      } else if ((err.error.errors[0].message === 'número do registro de contribuinte individual brasileiro (CPF) inválido')) {
        this.service.message("CPF inválido!");
      }
    });
  }

  voltar() {
    this.router.navigate(['']);
  }
  
  errorValidName() {
    if (this.nome.invalid) {
      return 'O nome deve ter entre 3  a 100 caracteres!';
    }
    return false;
  }

  errorValidSobrenome() {
    if (this.nome.invalid) {
      return 'O sobrenome deve ter entre 2  a 100 caracteres!';
    }
    return false;
  }

  errorValidCpf() {
    if (this.cpf.invalid) {
      return 'O CPF deve ter 11 ou 14 caracteres!';
    }
    return false;
  }

  errorValidTelefone() {
    if (this.telefone.invalid) {
      return 'O telefone deve ter entre 11  a 18 caracteres!';
    }
    return false;
  }

  errorValidEmail() {
    if (this.email.invalid) {
      return 'O email precisa ser válido!';
    }
    return false;
  }

  errorValidCidade() {
    if (this.cidade.invalid) {
      return 'A cidade precisa ser válida!';
    }
    return false;
  }

  errorValidBairro() {
    if (this.bairro.invalid) {
      return 'O bairro precisa ser válida!';
    }
    return false;
  }

  errorValidSenha() {
    if (this.senha.invalid) {
      return 'A senha precisa ter pelo menos 5 dígitos!';
    }
    return false;
  }
}
