import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../service/product.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
product:Product;

 Update(product: Product) {
  this.productService.updateProduct(product).subscribe(value =>{
       this.router.navigateByUrl('/manager')     
    });
  
  }
  constructor(
    private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
     
   this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.productService.getbyID(id).subscribe(data =>{
        this.product =data;
      });
    });
  }

}

