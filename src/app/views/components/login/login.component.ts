import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  apiUrl: string = environment.baseUrl + '/login';
  
  login: Login = {
    id: '',
    email: '',
    senha: ''
  }

  loginInvalido: string = '';
  setLoginMessage: boolean = false;
  senhaInvalida: string = '';
  setSenhaMessage: boolean = false;

  messageReset() {
    this.loginInvalido = '';
    this.setLoginMessage = false;
    this.senhaInvalida = '';
    this.setSenhaMessage = false;
  }

  logar() {
    this.authService
      .autenticar(this.login)
      .subscribe(resposta => {
        const id = JSON.stringify(resposta.id);
        const login = JSON.stringify(resposta.login);
        const access_token = JSON.stringify(resposta.token);
        localStorage.setItem('id', id);
        localStorage.setItem('login', login);
        localStorage.setItem('access_token', access_token);
        this.router.navigate(['doacoes']);
      }, err => {
        if (err.error.error.match("Usuário não encontrado!")) {
          this.setLoginMessage = true;
          this.loginInvalido = err.error.error;
         }
         if (err.error.error.match("Login inválido!")) {
          this.setLoginMessage = true;
          this.loginInvalido = err.error.error;
         }
         if (err.error.error.match("Senha inválida!")) {
          this.senhaInvalida = err.error.error;
          this.setSenhaMessage = true;
        }
      });
  }

  voltar() {
    this.router.navigate(['']);
  }

  email = new FormControl('', [Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]);
  senha = new FormControl('', [Validators.minLength(5)]);

  ngOnInit(): void {
  }

  errorValidEmail() {
    if (this.email.invalid) {
      return 'O email precisa ser válido!';
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
