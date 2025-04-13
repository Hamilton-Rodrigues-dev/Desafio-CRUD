import { Product, productMock } from '../../../domain/models/product';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  @Input() productItem?: Product;

@Output() edit = new EventEmitter<number>();
@Output() list = new EventEmitter<void>();
ngOnInit(){

}
}
