import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioDto } from '../models/usuarioDto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: String = environment.baseUrl;
  //login: string | null = localStorage.getItem('login');

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar
  ) { }

  findById(id: any): Observable<UsuarioDto> {
    const url = this.baseUrl + '/usuario/' + id;
    return this.http.get<UsuarioDto>(url);
  }

  create(usuario: UsuarioDto): Observable<UsuarioDto> {
    const url = this.baseUrl + '/usuario';
    return this.http.post<UsuarioDto>(url, usuario);
  }

  update(usuario: UsuarioDto): Observable<UsuarioDto> {
    const url = this.baseUrl + '/usuario/' + usuario.email;
    return this.http.put<UsuarioDto>(url, usuario);
  }

  // update(usuario: UsuarioDto): Observable<UsuarioDto> {
  //   const url = `${this.baseUrl}/usuario/${this.login}`;
  //   return this.http.put<UsuarioDto>(url, usuario);
  // }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 4000
    });
  }
}
