import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productRef = new FormGroup ({
    _id: new FormControl(),
    name: new FormControl(),
    image: new FormControl(),
    type: new FormControl(),
    price: new FormControl()
  })

  constructor(public productService:ProductService) { }
  result:string;
  ngOnInit(): void {
  }

  addProduct(): void {
    this.productService.addProduct(this.productRef.value).
    subscribe(data=>this.result=data.msg);
  }
}
