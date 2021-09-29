import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../views/components/login/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.baseUrl + '/login';

  constructor(private http: HttpClient) { }

  autenticar(login: Login): Observable<any> {
    return this.http.post(this.apiUrl, login);
  }
}
