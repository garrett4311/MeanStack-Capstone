import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products:Array<Product>;

  constructor(public productService:ProductService, private globals:Globals) { }

  ngOnInit(): void {
    this.productService.getProductDetails().subscribe(data=>this.products=data);
  }

  addToCart(index): void {
    this.globals.shoppingCart.push(this.products[index]);
    this.globals.cartTotal += this.products[index].price;
    //console.log(this.products[index]);
    //console.log("added to cart");
  }
}
