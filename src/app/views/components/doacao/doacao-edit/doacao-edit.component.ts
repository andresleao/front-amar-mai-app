import { AfterContentChecked, AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { DoacaoUsuario } from 'src/app/models/DoacaoUsuario';
import { Item } from 'src/app/models/Item';
import { DoacaoService } from 'src/app/services/doacao.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-doacao-edit',
  templateUrl: './doacao-edit.component.html',
  styleUrls: ['./doacao-edit.component.css']
})
export class DoacaoEditComponent implements OnInit, AfterContentChecked {

  id_item: string | null = '';
  selected: string = '';
  
  item: Item = {
    id: '',
    nome: '',
    descricao: '',
    classificacao: 0,
    foto: null
  }

  classificacao = new FormControl([null, Validators.required]);
  nome = new FormControl('', [Validators.minLength(3)]);
  descricao = new FormControl('', [Validators.minLength(5)]);

  constructor(
    private route: ActivatedRoute,
    private service: ItemService,
    private router: Router
  ) { }

  ngAfterContentChecked() {
    this.selected = this.item.classificacao.toString();
  }

  ngOnInit(): void {
    this.id_item = this.route.snapshot.paramMap.get('id')!;
    this.findById(); 
  }

  findById() {
    this.service.findById(this.id_item).subscribe(resposta => {
      this.item = resposta;
      console.log(this.item);
    });
  }

  update() {
    this.service.update(this.item).subscribe(resposta => {
      this.router.navigate(['/usuario/doacoes']);
      this.service.message("Doação atualizada como sucesso!");
    })
  }

  voltar() {
    this.router.navigate(['/usuario/doacoes'])
  }

  errorValidName() {
    if (this.nome.invalid) {
      return 'O nome deve ter entre 3 a 100 caracteres!';
    }
    return false;
  }

  errorValidDescricao() {
    if (this.descricao.invalid) {
      return 'A descrição deve ter entre 5 a 200 caracteres!';
    }
    return false;
  }

  errorValidClassificacao() {
    if (this.descricao.invalid) {
      return 'A classificacao é requerida!';
    }
    return false;
  }
}
