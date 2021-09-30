import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../views/components/login/login';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.baseUrl + '/login';
  jwtHelper: JwtHelperService = new JwtHelperService();
 
  constructor(private http: HttpClient) { }

  obterToken() {
    const tokenString = localStorage.getItem('access_token');
    if (tokenString) {
      const token = JSON.parse(tokenString).access_token;
      return token;
    } 
    return null;
  }

  isAuthenticated(): boolean {
    const token = this.obterToken();
    if (token !== null) {
      const expired = this.jwtHelper.isTokenExpired(token);
      // retorna o token se não estiver expirado
      return true;
    }
    return false;
  }

  autenticar(login: Login): Observable<any> {
    return this.http.post(this.apiUrl, login);
  }
}
