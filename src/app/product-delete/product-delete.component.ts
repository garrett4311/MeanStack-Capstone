import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(public productService:ProductService) { }
  result:string;
  ngOnInit(): void {
  }

  deleteProductById(id) {
    this.productService.deleteProduct(id).
    subscribe(data=>this.result=data.msg);
  }
}
