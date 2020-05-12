import { Component, OnInit } from '@angular/core';

import { Product } from '../Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


page=1;
  pageSize=6;
products:Product[];

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit() {
    // this.products=this.productService.getProducts();
    this.getProducts();
  }
// showDetail(product){
//   this.selected=product;
//   console.log(product);
// }
// removeItems(id){
//   // this.products=this.products.filter(product =>product.id !=id);
//   // console.log(id)
//   this.products= this.productService.removeProduct(id);
 
// }
getProducts(){
  this.productService.getListProduct().subscribe(data =>{
    // console.log(data)
    this.products=data;
  })
}
}