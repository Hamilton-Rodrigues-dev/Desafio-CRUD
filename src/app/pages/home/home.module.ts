import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, ProductViewComponent, ProductListComponent,ProductEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports:[HomeComponent, ProductViewComponent, ProductListComponent, ProductEditComponent]
})
export class HomeModule { }
