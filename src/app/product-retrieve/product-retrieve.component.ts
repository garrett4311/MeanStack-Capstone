import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-retrieve',
  templateUrl: './product-retrieve.component.html',
  styleUrls: ['./product-retrieve.component.css']
})
export class ProductRetrieveComponent implements OnInit {
  products:Array<Product>;
  constructor(public productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProductDetails().subscribe(data=>this.products=data);
  }

}
