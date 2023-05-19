import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get("/admin/products");
  }

  getProductById(id: any) {
    return this.httpClient.get(`/customer/single-products/${id}`);
  }

  filterProduct(categoryId: any) {
    return this.httpClient.get(`customer/products/${categoryId}`);
  }

  searchProducts(name: any) {
    console.log(name)
    return this.httpClient.get(`customer/product/${name}`);
  }
}
