import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { ProductViewComponent } from './pages/home/product-view/product-view.component';
import { ProductListComponent } from './pages/home/product-list/product-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductEditComponent } from './pages/home/product-edit/product-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
