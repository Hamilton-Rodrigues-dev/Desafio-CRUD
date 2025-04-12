import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/domain/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  @Input() productList!: Product[];

  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

}
