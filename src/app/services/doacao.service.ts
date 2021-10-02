import { DoacaoUsuario } from './../models/DoacaoUsuario';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Doacao } from '../models/Doacao';
import { Observable } from 'rxjs';
import { DoacaoList } from '../models/DoacaoList';
import { Donatario } from '../models/Donatario';

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

    findAll(): Observable<DoacaoList[]> {
      const url = this.baseUrl + '/doacao';
      return this.http.get<DoacaoList[]>(url);
    }

    findAllActives(): Observable<DoacaoList[]> {
      const url = this.baseUrl + '/doacao/active';
      return this.http.get<DoacaoList[]>(url);
    }

    findDoacoes(id: any): Observable<DoacaoList[]> {
      const url = this.baseUrl + '/doacao/donor/' + id;
      return this.http.get<DoacaoList[]>(url);
    }

    findById(id: any): Observable<DoacaoList> {
      const url = this.baseUrl + '/doacao/' + id;
      return this.http.get<DoacaoList>(url);
    }

    aceitarDoacao(id: any, donatario:any): Observable<Donatario> {
      const url = this.baseUrl + `/doacao/disable/${id}?donatario=${donatario}`;
      return this.http.put<Donatario>(url, donatario);
    }
    
    message(msg: String): void {
      this.snack.open(`${msg}`, 'OK', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 4000
      });
    }
}
