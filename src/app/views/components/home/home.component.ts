import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentChecked {

  isUsuarioLogado: boolean  = false;
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngAfterContentChecked() {
    this.isUsuarioLogado = this.authService.isAuthenticated();
  }


  ngOnInit(): void {
  
  }

  logar(): void {
    this.router.navigate(['/login']);
  }

  registrar(): void {
    this.router.navigate(['/usuario/create']);
  }

}
