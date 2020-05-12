import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../service/product.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product:Product;
  constructor(private productService:ProductService,
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