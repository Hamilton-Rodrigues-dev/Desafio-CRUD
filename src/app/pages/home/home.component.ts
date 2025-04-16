import { Component, inject, Input, EventEmitter } from '@angular/core';
import { Product, productMock } from 'src/app/domain/models/product';
import { HttpClient } from '@angular/common/http';
import { find, max, pipe } from 'rxjs';
import { FormGroup, NgForm } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
enum visaoHome {
  Lista,
  visualizacao,
  Edicao,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // @Input() productList!: Product[];

  // httpClient = inject(HttpClient);

  productList: Product[] = [];

  visaoEnum = visaoHome;
  visaoAtual = this.visaoEnum.Lista;

  productItem?: Product;

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.productList = this.service.getInfo();
    // this.httpClient.get<any>('/api/products').subscribe((products) => {
    //   this.productList = products;
    // });
  }

  obterProduct(id: number): Product | undefined {
    return this.productList.find((product) => product.id === id);
  }

  trocarparaList() {
    this.visaoAtual = this.visaoEnum.Lista;
  }

  trocarparaView(id: number) {
    this.productItem = this.obterProduct(id);
    this.visaoAtual = this.visaoEnum.visualizacao;
  }

  trocarparaEdit(id: number) {
    this.productItem = this.obterProduct(id);
    this.visaoAtual = this.visaoEnum.Edicao;
  }

  addNovoProduto() {
    this.productItem = { id: 0, nome: '', descricao: '', preco: 0 };
    this.visaoAtual = this.visaoEnum.Edicao;
  }

  updateInformacoes(product: Product) {
    if (product.id > 0) {
      const indiceProduct = this.productList.findIndex(
        (p) => p.id === product.id
      );
      this.productList[indiceProduct] = product;

      console.log('o que ta vindo no indice', indiceProduct);
      console.log('product', this.productList);
      alert('Produto salvo com sucesso !');
      this.trocarparaList();
    } else {
      const max = Math.max(...this.productList.map((p) => p.id));

      product.id = max + 1;

      console.log('o que o max ta retornando', max);

      console.log('product', this.productList);

      this.productList.push(product);

      this.service.setProducts(this.productList);

      alert('Produto novo cadastrado com sucesso !');
      this.trocarparaList();
    }

    //buscar os produto e editar lista de produto
    //Atualizar o item do produto para o produto novo
    //atualizar pelo index/id ou retornar uma nova lista com o objeto atualziado
    //validar o metodo
  }
}
