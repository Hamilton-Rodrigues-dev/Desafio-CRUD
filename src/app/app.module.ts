import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { ProductViewComponent } from './pages/home/product-view/product-view.component';
import { ProductListComponent } from './pages/home/product-list/product-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductEditComponent } from './pages/home/product-edit/product-edit.component';
import { provideNgxMask, NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';



@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    NgxMaskDirective,
     NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
