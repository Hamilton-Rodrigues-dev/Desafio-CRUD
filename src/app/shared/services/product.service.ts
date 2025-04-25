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

  deleteProduct(id: number): void {
    const currentProducts = sessionStorage.getItem('products');
    if (currentProducts) {
      const products: Product[] = JSON.parse(currentProducts);

      const updatedProducts = products.filter((p) => p.id !== id);

      sessionStorage.removeItem('products');

      if (updatedProducts.length > 0) {
        sessionStorage.setItem('products', JSON.stringify(updatedProducts));
      }
    }
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
