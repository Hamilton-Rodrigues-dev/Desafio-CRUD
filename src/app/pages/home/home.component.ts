import { Component, inject, Input, EventEmitter } from '@angular/core';
import { Product, productMock } from 'src/app/domain/models/product';
import { HttpClient } from '@angular/common/http'
import { find, pipe } from 'rxjs';
enum visaoHome {
  Lista,
  visualizacao,
  Edicao,
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // @Input() productList!: Product[];

  // httpClient = inject(HttpClient);
  productList: Product[] = productMock;

  visaoEnum = visaoHome
  visaoAtual = this.visaoEnum.Lista

  productItem?: Product;




  ngOnInit(){
    // this.httpClient.get<any>('/api/products').subscribe((products) => {
    //   this.productList = products;
    // });

  }

 obterIdProduct(id:number){
  this.productItem = this.productList.find(product => product.id === id)
}



  trocarparaList(){
    this.visaoAtual = this.visaoEnum.Lista
  }

  trocarparaView(id:number){
    this.obterIdProduct(id)
    this.visaoAtual = this.visaoEnum.visualizacao
  }

  trocarparaEdit(id:number){
    this.obterIdProduct(id)
    this.visaoAtual = this.visaoEnum.Edicao
  }

  addNovoProduto(){
    this.visaoAtual = this.visaoEnum.Edicao
  }



  updateInformacoes(){

  }


}
