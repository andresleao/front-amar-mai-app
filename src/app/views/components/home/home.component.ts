import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  autenticado: boolean = false;
  
  constructor(
    private router: Router,
    //private authService: AuthService
  ) { }

  ngOnInit(): void {
    //this.usuarioAutenticado()
   // this.authService.isAuthenticated();
  }

  // usuarioAutenticado(): boolean {
  //   if (this.authService.isAuthenticated()) {
  //     return this.autenticado = true;
  //   }
  //   return this.autenticado = false;
  // }
  

  logar(): void {
    this.router.navigate(['/login']);
  }

  registrar(): void {
    this.router.navigate(['/usuario/create']);
  }

}
