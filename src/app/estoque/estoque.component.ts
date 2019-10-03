import { EstoqueService } from './../services/estoque.service';
import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { getMatAutocompleteMissingPanelError } from '@angular/material/autocomplete';
import { LoginComponent } from '../login/login.component';
import { AuthService, SocialUser } from 'angularx-social-login';
import { HttpClient } from 'selenium-webdriver/http';
import { NgStyle } from '@angular/common';
import { isNumber } from 'util';



@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  categoria: string;
  categoriaItem: string;
  estoqueService: EstoqueService;


  item: {id: string, category: string, name: string, price: string,
    quantity: number, image: string, click: boolean};

  itemAtual = {id: '', category: '', name: '', price: '',
    quantity: 0, image: '', click: false};

  categorias: ['celular', 'eletrodomestico', 'tv', 'videogame'];

  itensEstoque = [
    {id: '', category: 'celular', name: 'Exemplo 1', price: 1000, quantity: 30, image: 'https://2.bp.blogspot.com/-ipuBRMxGouw/USIoLfCZ-rI/AAAAAAAAA6g/RJAgzyQ1dD4/s256/1361208855_Install1.png', click: false},
    {id: '', category: 'eletrodomestico', name: 'Exemplo 2', price: 580, quantity: 0, image: 'http://www.kaphprofessional.com.br/images/6.png?crc=4150310860', click: false},
    {id: '', category: 'tv', name: 'Exemplo 3', price: 89, quantity: 36, image: 'http://www.piscinariasumare.com.br/images/s1.png', click: false},
    {id: '', category: 'videogame', name: 'Exemplo 4', price: 500, quantity: 5, image: 'https://loja.felps.com.br/media/catalog/product/cache/1/thumbnail/256x256/9df78eab33525d08d6e5fb8d27136e95/e/x/extrato_de_bamboo_kit_trio_250ml.png', click: false}
  ];

  router: Router;

  constructor(private authService: AuthService, rota: Router, estoqueService: EstoqueService) {
    this.router = rota;
    // tslint:disable-next-line: no-unused-expression
    this.ngOnInit;
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

    });
    this.estoqueService = estoqueService;
   }


  ngOnInit() {
    // console.log('estoque: ' + this.estoqueService.getEstoque());
    this.categoria = 'Tudo';
    this.categoriaItem = 'tudo';
    this.atualizaEstoque();
    this.sortEstoque();

  }


  trocaCategoria(novaCategoria: string) {

    this.categoria = novaCategoria;
    if( novaCategoria === "Celular"){
      this.categoriaItem = 'celular';
    }
    if( novaCategoria === "Eletrodoméstico"){
      this.categoriaItem = 'eletrodomestico';
    }
    if( novaCategoria === "Tv"){
      this.categoriaItem = 'tv';
    }
    if( novaCategoria === "Videogame"){
      this.categoriaItem = 'videogame';
    }
    if( novaCategoria === "Tudo"){
      this.categoriaItem = 'tudo';
    }
  //  console.log(this.categoria);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.itensEstoque.length; i++) {
      this.itensEstoque[i].click = false;

    }
  }

  addItem(item) {
    const categoriaSelecionada = (document.getElementById('categoriaItem') as HTMLInputElement).value;
    this.itemAtual.category = categoriaSelecionada;
    this.itensEstoque.push(item);
    this.sortEstoque();
    this.estoqueService.criaItem(item.name, item.price, item.quantity, item.category, item.image);

  }

  removeItem(item) {
    this.estoqueService.deleteItem(item.id);
    for (let i = 0; i < this.itensEstoque.length; i++) {
      if (item === this.itensEstoque[i]) {
        this.itensEstoque[i] = this.itensEstoque[this.itensEstoque.length - 1];
        break;
      }
    }
    this.itensEstoque.pop();
    this.sortEstoque();

  }

  sortEstoque() {
    this.atualizaEstoque();
    this.itensEstoque.sort((a, b) => {
      if (a.quantity > b.quantity) {
        return -1;
      }
      if (a.quantity < b.quantity) {
        return 1;
      }
      return 0;
    });

  }

  updateItem(id: number, quantity: number){
    this.estoqueService.updateItem(id,quantity);
  }

  setItemAtual(item) {
    this.itemAtual = item;
    if (this.itemAtual.click) {
      this.itemAtual.click = false;
    } else {
      this.itemAtual.click = true;
    }
  //  console.log(this.itemAtual);

  }

  blankItem() {
    this.itemAtual = {
      id: '',
      name: '',
      category: '',
      price: '',
      quantity: 0,
      image: '',
      click: false
    };

  }

  signOut() {
      this.authService.signOut();
      this.router.navigate(['']);
  }

  getColor(qntItem) {
    if ( qntItem > 10) {
      return 'rgba(236, 236, 236, 0.425)';
    }
    if ( qntItem === 0) {
      return 'rgba(255, 145, 145, 0.350)';
    //  console.log(qntItem + ' vermelho');
    }
    if ( qntItem > 0 && qntItem <= 10) {
      return 'rgba(250, 235, 99, 0.350)';
    //  console.log(qntItem + ' amarelo');
    }
  }

  atualizaEstoque(){
    this.estoqueService.getEstoque().subscribe((items: any) => {
      this.itensEstoque = items; });

  }


}
