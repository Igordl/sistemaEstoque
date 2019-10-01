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
  private user: SocialUser;
  loggedIn: boolean;
  categoria: string;

  item: {nomeCategoria: string, nomeItem: string, valorItem: string,
    qntItem: number, imagemItem: string, click: boolean};

    itemAtual = {nomeCategoria: '', nomeItem: '', valorItem: '',
    qntItem: 0, imagemItem: '', click: false};

  categorias: ['Celular', 'Eletrodoméstico', 'Tv', 'Videogame'];

  itensEstoque = [
    {nomeCategoria: 'Celular', nomeItem: 'iPhone 6', valorItem: '1000', qntItem: 137, imagemItem: '', click: false},
    {nomeCategoria: 'Eletrodoméstico', nomeItem: 'v3n4i3', valorItem: '34g34g', qntItem: 456, imagemItem: '', click: false},
    {nomeCategoria: 'Tv', nomeItem: 'r34r', valorItem: '4g34g', qntItem: 36, imagemItem: '', click: false},
    {nomeCategoria: 'Videogame', nomeItem: '4g3g', valorItem: '34g34g', qntItem: 34, imagemItem: '', click: false}
  ];

  router: Router;

  constructor(private authService: AuthService, rota: Router) {
    this.router = rota;
    this.ngOnInit;
    this.authService.authState.subscribe((user) => {

      this.user = user;

      this.loggedIn = (user != null);

    });
   }


  ngOnInit() {
    this.categoria = 'Tudo';
    this.sortEstoque();
  }


  trocaCategoria(categoriaItem: string) {
    this.categoria = categoriaItem;
    console.log(this.categoria);
    for (let i = 0; i < this.itensEstoque.length; i++) {
      this.itensEstoque[i].click = false;

    }
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
      if (a.qntItem > b.qntItem) {
        return -1;
      }
      if (a.qntItem < b.qntItem) {
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
      qntItem: 0,
      imagemItem: '',
      click: false
    };

  }

  signOut(){
      this.authService.signOut();
      this.router.navigate(['']);
  }

  getColor(qntItem){
    if ( qntItem > 10) {
      return 'rgba(154, 255, 145, 0.350)';
      console.log(qntItem + " verde");
    }
    if ( qntItem == 0) {
      return 'rgba(255, 145, 145, 0.350)';
      console.log(qntItem + " vermelho");
    }
    if( qntItem > 0 && qntItem <= 10){
      return 'rgba(250, 235, 99, 0.350)';
      console.log(qntItem + " amarelo");
    }

  }


}
