import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Product } from './product';
import { ProductsListComponent } from './products-list.component';
import { ProductRowComponent } from './product-row.component';
import { ProductPriceComponent } from './product-price.component';
import { ProductImageComponent } from './product-image.component';
import { ProductDepartmentComponent } from './product-department.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductRowComponent,
    ProductPriceComponent,
    ProductImageComponent,
    ProductDepartmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
