import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { ProductaddComponent } from './admin/productadd/productadd.component';
import { ManagerProductComponent } from './admin/manager-product/manager-product.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'prolist',component:ProductListComponent},
  {path:'Detail/:id',component:ProductDetailsComponent},
  {path:'',component:AdminComponent,
     children:[
      {path:'admin',component:ManagerProductComponent},
      {path:'manager',component:ManagerProductComponent},
      {path:'edit/:id',component:ProductEditComponent},
      {path:'detail/:id',component:ProductDetailComponent},
      {path:'add',component:ProductaddComponent},
     ]
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }