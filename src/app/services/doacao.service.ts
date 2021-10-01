import { DoacaoUsuario } from './../models/DoacaoUsuario';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Doacao } from '../models/Doacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar) { }

    create(doacao: Doacao): Observable<Doacao> {
      const url = this.baseUrl + '/doacao';
      return this.http.post<Doacao>(url, doacao);
    }

    message(msg: String): void {
      this.snack.open(`${msg}`, 'OK', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 4000
      });
    }
}
