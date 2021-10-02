import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DoacaoList } from 'src/app/models/DoacaoList';
import { DoacaoService } from 'src/app/services/doacao.service';

@Component({
  selector: 'app-doacao-read',
  templateUrl: './doacao-read.component.html',
  styleUrls: ['./doacao-read.component.css']
})
export class DoacaoReadComponent implements AfterViewInit {
  
  lista: DoacaoList[] = [];
  
  displayedColumns: string[] = ['id', 'publicacao','idItem', 'item', 'class', 'doador', 'cidade', 'bairro', 'action'];
  dataSource = new MatTableDataSource<DoacaoList>(this.lista);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    //this.findAll();
    this.findAllActives();
  }

  constructor(
    private router: Router,
    private service: DoacaoService
  ) {}

  donationCreate() {
    this.router.navigate(['doacoes/create'])
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      this.lista = resposta;
      this.dataSource = new MatTableDataSource<DoacaoList>(this.lista);
      this.dataSource.paginator = this.paginator;  
    });
  }

  findAllActives():void {
    this.service.findAll().subscribe(resposta => {
      this.lista = resposta;
      console.log(resposta);
      this.dataSource = new MatTableDataSource<DoacaoList>(this.lista);
      this.dataSource.paginator = this.paginator;  
    });
  }
}


