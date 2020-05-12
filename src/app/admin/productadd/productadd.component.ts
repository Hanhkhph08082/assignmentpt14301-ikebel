import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../service/product.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
product: Product = new Product();

  constructor(private productService: ProductService,
  private route:Router) { }

  ngOnInit() {

  }
  Insert(){
 this. productService.insertProduct(this.product) .subscribe(data =>
    this.route.navigateByUrl('/manager')
       )
  }

  
}