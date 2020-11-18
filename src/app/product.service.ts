import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from "./model.product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient:HttpClient) { }

  getProductDetails():Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:5000/api/products/productsFromDb");
  }

  deleteProduct(id):Observable<any>{
    return this.httpClient.delete("http://localhost:5000/api/products/deleteProductById/"+id);
  }

  addProduct(productRef):Observable<any>{
    return this.httpClient.post("http://localhost:5000/api/products/addNewProduct", productRef);
  }

  updateProduct(productRef):Observable<any>{
    return this.httpClient.put("http://localhost:5000/api/products/updateProduct", productRef);
  }

}
