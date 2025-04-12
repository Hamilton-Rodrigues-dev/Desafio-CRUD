import { Component, inject, Input, EventEmitter } from '@angular/core';
import { Product, productMock } from 'src/app/domain/models/product';
import { HttpClient } from '@angular/common/http'
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

  ngOnInit(){
    // this.httpClient.get<any>('/api/products').subscribe((products) => {
    //   this.productList = products;
    // });

  }

  trocarparaList(){
    this.visaoAtual = this.visaoEnum.Lista
  }

  trocarparaView(){
    this.visaoAtual = this.visaoEnum.visualizacao
  }

  trocarparaEdit(){
    this.visaoAtual = this.visaoEnum.Edicao
  }





}
