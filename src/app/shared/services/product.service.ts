import { Injectable } from '@angular/core';
import { Product, productMock } from 'src/app/domain/models/product';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API = 'api/product';

  constructor(private httpClient: HttpClient) {
    if (!this.getInfo()) {
      this.setProducts(productMock);
    }
  }

  setProducts(products: Product[]): void {
    sessionStorage.setItem('products', JSON.stringify(products));
  }

  getInfo(): Product[] {
    let dados = sessionStorage.getItem('products') || '';
    let dadosObject = dados ? JSON.parse(dados) : undefined;
    console.log('o que vem do get data', dadosObject);
    return dadosObject;
  }

  salvarProduct(product: Product): void {
    const alteracao = sessionStorage.setItem(
      'products',
      JSON.stringify(product)
    );
    console.log('alteracao', alteracao);
    // return this.httpClient.put('products', JSON.stringify(product));
  }
}
