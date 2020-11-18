import { Injectable } from '@angular/core';
import { Product } from "./model.product";

@Injectable()
export class Globals {
  currentUser: string = '';
  shoppingCart: Product[] = [];
  cartTotal: number = 0;
  
}