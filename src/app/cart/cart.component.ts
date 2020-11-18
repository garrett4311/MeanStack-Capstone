import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  globals: Globals;
  products: Product[] = [];
  cartTotal: number = 0;
	constructor(private productService: ProductService, globals: Globals) {
    this.globals = globals;
    this.cartTotal = this.globals.cartTotal;
    for(var i=0;i<globals.shoppingCart.length;i++) {
      this.products[i] = globals.shoppingCart[i];
    }
   }

	ngOnInit() {
  }

  removeFromCart(index): void {
    this.cartTotal -= this.products[index].price;
    this.globals.cartTotal -= this.products[index].price;
    this.globals.shoppingCart.splice(index, 1);
    this.products.splice(index, 1);
  }

  purchaseCart():void {
    this.products = [];
    this.cartTotal = 0;
    this.globals.shoppingCart = [];
    this.globals.cartTotal = 0;
    alert("Thank you for shopping at 100thieves!")
  }

}
