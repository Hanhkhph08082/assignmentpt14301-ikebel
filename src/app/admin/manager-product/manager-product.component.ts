import { Component, OnInit} from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../service/product.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.css']
})

export class ManagerProductComponent implements OnInit {


page=1;
pageSize=6;
 
products: Product[];

  constructor(
    private productService: ProductService,
    private router: Router,
    ) {    }

  ngOnInit() {
    this.getproduct();
  }
 getproduct(){
    this.productService.getListProduct().subscribe(data => {     
      this.products = data;     
    });
  }
  deleteproduct(id){
  this.productService.deleteProduct(id).subscribe(response =>{
  this.getproduct();
  })
}
  getid(id): void {
    this.router.navigate(['/edit', id]);
  }
  detail(id): void {
    this.router.navigate(['/detail', id]);
  }
  
}