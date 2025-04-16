import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/domain/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent {
  @Input() productItem?: Product;

  @Output() save = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  productForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    nome: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    preco: new FormControl(0, [Validators.required]),
  });

  constructor() {}
  ngOnInit() {
    this.updateForm();

    ///Forma de inicializar os valores nos INPUTS diretamente
    // this.productForm.get('nome')?.setValue(this.productItem?.nome || '')
    // this.productForm.get('descricao')?.setValue(this.productItem?.descricao || '')
    // this.productForm.get('preco')?.setValue(this.productItem?.preco || 0)
  }

  updateForm() {
    this.productForm.patchValue(this.productItem || {});

    ////FORMAS DIFERENTES DE INICIAR OS VALORES NOS INPUTS

    // this.productForm.patchValue({
    //   nome: this.productItem?.nome,
    //   descricao: this.productItem?.descricao,
    //   preco: this.productItem?.preco
    // });
    // this.productForm.patchValue({
    //   ...this.productItem,
    // })
  }

  onSubmit() {
    console.log(this.productForm.value);
    if (this.productForm.valid) {
    }
    this.save.emit(this.productForm.value as Product);
  }
}
