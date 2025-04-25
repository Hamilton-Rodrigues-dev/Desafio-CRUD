import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductEditComponent } from './pages/home/product-edit/product-edit.component';
import { ProductViewComponent } from './pages/home/product-view/product-view.component';

const routes: Routes = [
  {
    path: '' , component: HomeComponent
  },
  {
    path: 'edit', component:ProductEditComponent
  },
  {
    path: 'view', component:ProductViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
