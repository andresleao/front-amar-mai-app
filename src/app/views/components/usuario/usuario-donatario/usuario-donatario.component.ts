import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioDto } from 'src/app/models/usuarioDto';
import { UsuarioList } from 'src/app/models/UsuarioList';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-donatario',
  templateUrl: './usuario-donatario.component.html',
  styleUrls: ['./usuario-donatario.component.css']
})
export class UsuarioDonatarioComponent implements OnInit {

  id_donatario: string | null = '';

  usuario: UsuarioDto = {
  nome: '',
  sobrenome: '',
  email: '',
  cidade: '',
  bairro: '',
  telefone: '',
  }


  constructor( 
    private route: ActivatedRoute,
    private service: UsuarioService,
    private router: Router
  ) 
  {}

  voltar() {
    this.router.navigate(['/usuario/doacoes']);
  }

  ngOnInit(): void {
    this.id_donatario = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById() {
   this.service.findById(this.id_donatario).subscribe(resposta => {
    this.usuario = resposta;
   });
  }

}
