import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/domain/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  @Input() productItem?: Product;

  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

productForm = new FormGroup ({
  nome: new FormControl("",[Validators.required]),
  descricao: new FormControl("",[Validators.required]),
  preco: new FormControl(0,[Validators.required]),
})

ngOnInit(){
  this.updateForm()
  // this.productForm.get('nome')?.setValue(this.productItem?.nome || '')
  // this.productForm.get('descricao')?.setValue(this.productItem?.descricao || '')
  // this.productForm.get('preco')?.setValue(this.productItem?.preco || 0)
}


updateForm(){
  // this.productForm.patchValue({
  //   nome: this.productItem?.nome,
  //   descricao: this.productItem?.descricao,
  //   preco: this.productItem?.preco
  // });
  this.productForm.patchValue(this.productItem || {})
  // this.productForm.patchValue({
  //   ...this.productItem,
  // })
}

onSubmit() {
  console.warn(this.productForm.value);
}


}
