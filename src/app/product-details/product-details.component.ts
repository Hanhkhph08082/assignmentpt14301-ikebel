import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import{ActivatedRoute, Router} from '@angular/router';
import { Product } from '../Product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product:Product;
  constructor(
     private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
      this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getbyID(id).subscribe(data => {
        this.product = data;
      });
    });
  }

}