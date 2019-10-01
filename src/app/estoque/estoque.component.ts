import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { getMatAutocompleteMissingPanelError } from '@angular/material/autocomplete';
import { LoginComponent } from '../login/login.component';
import { AuthService } from 'angularx-social-login';
import { HttpClient } from 'selenium-webdriver/http';


@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  categoria: string;

  item: {nomeCategoria: string, nomeItem: string, valorItem: string,
    qntEstoque: string, imagemItem: string};

  itemAtual = {
    nomeCategoria: '',
    nomeItem: '',
    valorItem: '',
    qntItem: '',
    imagemItem: '',
    click: false
  };

  categorias: ['Celular', 'Eletrodoméstico', 'Tv', 'Videogame'];

  itensEstoque = [
    {nomeCategoria: 'Celular', nomeItem: 'mi a1', valorItem: '200', qntEstoque: '137', imagemItem: '', click: false},
    {nomeCategoria: 'Eletrodoméstico', nomeItem: 'v3n4i3', valorItem: '34g34g', qntEstoque: '456', imagemItem: '', click: false},
    {nomeCategoria: 'Tv', nomeItem: 'r34r', valorItem: '4g34g', qntEstoque: '346', imagemItem: '', click: false},
    {nomeCategoria: 'Videogame', nomeItem: '4g3g', valorItem: '34g34g', qntEstoque: '36', imagemItem: '', click: false}
  ];

  router: Router;

  constructor(private authService: AuthService, rota: Router) {
    this.router = rota;
    this.ngOnInit;


    

   }


  ngOnInit() {
    this.categoria = 'Tudo';
    this.sortEstoque();
  }


  trocaCategoria(categoriaItem: string) {
    this.categoria = categoriaItem;
    console.log(this.categoria);

  }

  addItem(item) {
    var categoriaSelecionada = (<HTMLInputElement>document.getElementById("categoriaItem")).value;
    this.itemAtual.nomeCategoria = categoriaSelecionada;
    console.log(item);
    this.itensEstoque.push(item);
    this.sortEstoque();
  }

  removeItem(item) {
    for (let i = 0; i < this.itensEstoque.length; i++) {
      if (item === this.itensEstoque[i]) {
        this.itensEstoque[i] = this.itensEstoque[this.itensEstoque.length -1];
        break;
      }
    }
    this.itensEstoque.pop();
    this.sortEstoque();
  }

  sortEstoque() {
    this.itensEstoque.sort((a, b) => {
      if (a.qntEstoque > b.qntEstoque) {
        return -1;
      }
      if (a.qntEstoque < b.qntEstoque) {
        return 1;
      }
      return 0;
    });

  }

  setItemAtual(item) {
    this.itemAtual = item;
    if (this.itemAtual.click) {
      this.itemAtual.click = false;
    } else {
      this.itemAtual.click = true;
    }
    console.log(this.itemAtual);

  }

  blankItem() {
    this.itemAtual = {
      nomeCategoria: '',
      nomeItem: '',
      valorItem: '',
      qntItem: '',
      imagemItem: '',
      click: false
    };

  }

  signOut(){
      this.authService.signOut();
      this.router.navigate(['']);
  }


}
