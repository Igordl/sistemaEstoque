import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  categoria: string;
  categorias: ['Celular', 'Eletrodoméstico', 'Tv', 'Videogame'];
  itemPorCategoria = [
    {nomeCategoria: 'Celular', nomeItem: '', valorItem: '', qntEstoque: '', imagemItem: ''},
    {nomeCategoria: 'Eletrodoméstico', nomeItem: '', valorItem: '', qntEstoque: '', imagemItem: ''},
    {nomeCategoria: 'Tv', nomeItem: '', valorItem: '', qntEstoque: '', imagemItem: ''},
    {nomeCategoria: 'Videogame', nomeItem: '', valorItem: '', qntEstoque: '', imagemItem: ''}
  ];

  itensEstoque = [ {nomeCategoria: 'Celular', nomeItem: 'svsv', valorItem: 'dvsv', qntEstoque: '22', imagemItem: ''},
  {nomeCategoria: 'Eletrodoméstico', nomeItem: 'sdv', valorItem: '', qntEstoque: '43', imagemItem: ''},
  {nomeCategoria: 'Tv', nomeItem: 'uniunui', valorItem: 'av', qntEstoque: '11', imagemItem: ''},
  {nomeCategoria: 'Videogame', nomeItem: 'asv', valorItem: '', qntEstoque: '78', imagemItem: ''}];


  constructor() {
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

  ngOnInit() {
    this.categoria = 'Tudo';
  }


  trocaCategoria(categoriaItem: string){
    this.categoria = categoriaItem;
    console.log(this.categoria);
  }

  addItem(nomeCategoriaN: string, nomeItemN: string, valorItemN: string,
          qntEstoqueN: string, imagemItemN: string) {
            this.itensEstoque.push({nomeCategoria: nomeCategoriaN,
            nomeItem: nomeItemN,
            valorItem: valorItemN,
            qntEstoque: qntEstoqueN,
            imagemItem: imagemItemN});
  }


}
