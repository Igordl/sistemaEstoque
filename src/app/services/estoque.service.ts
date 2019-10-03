import { LoginComponent } from './../login/login.component';
import { NAJA_API } from './najaapi.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from './login.service';


@Injectable()
export class EstoqueService {
  loginComponent: LoginComponent;

  constructor(private http: HttpClient) {  }
  private HEADERS = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  });

  getEstoque(): Observable<any>{
    return this.http.get(`${NAJA_API}/products/`,  {headers: this.HEADERS});
  }

  criaItem(name: string, price: number, quantity: number, category: string, image: string) {
    return this.http.post(`${NAJA_API}/products/`, {name, price, quantity, category, image});
  }

  deleteItem(id: number) {
    return this.http.post(`${NAJA_API}/products/`, id);
  }

  updateItem(id:number, quantity: number){
    return this.http.post(`${NAJA_API}/products/`, {name, quantity});
  }


}
