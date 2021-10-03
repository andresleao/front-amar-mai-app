import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar
  ) { }


  findById(id: any): Observable<Item> {
    const url = this.baseUrl + '/item/' + id;
    return this.http.get<Item>(url);
  }

  update(item: Item): Observable<Item> {
    const url = this.baseUrl + '/item' ;
    return this.http.put<Item>(url, item);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 4000
    });
  }

}
