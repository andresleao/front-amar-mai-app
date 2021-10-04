import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioDto } from 'src/app/models/usuarioDto';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  id_user: string | null = '';
  email_user: string | null = '';
  isBlocked: boolean = true;

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
  telefone = new FormControl('', [Validators.minLength(11)]);
  senha = new FormControl('', [Validators.minLength(5)]);

  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit(): void {
    this.id_user = localStorage.getItem('id');
    this.email_user = localStorage.getItem('login');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_user).subscribe(resposta => {
      this.usuario = resposta;
    });
  }

  update(): void {
    this.service.update(this.usuario).subscribe((resposta) => {
      this.router.navigate(['doacoes']);
      this.service.message('Atualização realizada com sucesso!');
    }, err => {
      console.log(err);
      if (err.error.error.match('CPF já cadastrado!')) {
         this.service.message(err.error.error);
       }
       if (err.error.error.match('Erro na validação dos campos!')) {
        this.service.message(err.error.error);
      }
        if ((err.error.errors[0].message === 'número do registro de contribuinte individual brasileiro (CPF) inválido')) {
        this.service.message("CPF inválido!");
       }
    });
  }

  voltar() {
    this.router.navigate(['doacoes']);
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
