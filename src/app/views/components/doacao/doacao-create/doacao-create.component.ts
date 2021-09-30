import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-doacao-create',
  templateUrl: './doacao-create.component.html',
  styleUrls: ['./doacao-create.component.css']
})
export class DoacaoCreateComponent implements OnInit {

  autenticado: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.usuarioAutenticado();
  }
  
  usuarioAutenticado(): boolean {
    if (this.authService.isAuthenticated()) {
      return this.autenticado = true;
    }
    return this.autenticado = false;
  }
 

}
