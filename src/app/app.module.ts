import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';

import { ProductService } from './service/product.service';


import { HomeComponent } from './home/home.component';

import { ProductDetailsComponent } from './product-details/product-details.component';

import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { ProductaddComponent } from './admin/productadd/productadd.component';
import { ManagerProductComponent } from './admin/manager-product/manager-product.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,HttpClientModule , NgbModule],
  declarations: [ AppComponent, HelloComponent, ProductListComponent,   AboutComponent, HomeComponent, ProductDetailsComponent,  ContactComponent, AdminComponent, ProductaddComponent, ManagerProductComponent, ProductEditComponent, ProductDetailComponent],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
