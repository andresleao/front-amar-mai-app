import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterContentChecked {
  
  usuarioLogado: string  = '';
  isAuntenticated: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
   
  }

  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('id');
    localStorage.removeItem('access_token');
    this.router.navigate(['']);
  }

  ngAfterContentChecked() {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.isAuntenticated = this.authService.isAuthenticated();
  }

  usuarioAutenticado(): boolean {
    return this.authService.isAuthenticated();
  }
}
 

