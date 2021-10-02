import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DoacaoList } from 'src/app/models/DoacaoList';
import { DoacaoService } from 'src/app/services/doacao.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-doacoes',
  templateUrl: './usuario-doacoes.component.html',
  styleUrls: ['./usuario-doacoes.component.css']
})
export class UsuarioDoacoesComponent implements AfterViewInit {
  
  id_usuario: string | null = '';
  lista: DoacaoList[] = [];
  
  displayedColumns: string[] = ['id', 'publicacao','idItem', 'item', 'class', 'idDonatario', 'action'];
  dataSource = new MatTableDataSource<DoacaoList>(this.lista);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
   this.id_usuario = localStorage.getItem('id');
   this.findDoacoes();
  }

  constructor(
    private router: Router,
    private service: DoacaoService
  ) {}

  findDoacoes() {
    this.service.findDoacoes(this.id_usuario).subscribe(resposta => {
      this.lista = resposta;
      this.dataSource = new MatTableDataSource<DoacaoList>(this.lista);
      this.dataSource.paginator = this.paginator;
    
    });
  }

  donationCreate() {
    this.router.navigate(['doacoes/create'])
  }

 
}
