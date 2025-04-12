import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/domain/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() productList!: Product[];

  @Output() edit = new EventEmitter<void>();
  @Output() view = new EventEmitter<void>();
  
}
