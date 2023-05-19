import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  getProductCategories() {
    return this.httpClient.get('/admin/categories');
  }

  deleteProduct(productId: any) {
    return this.httpClient.delete(`/admin/delete-product/${productId}`);
  }
  updateCategory(category: any) {
    return this.httpClient.put('/admin/update-category', category);
  }

  addProductCategory(category: any) {
    return this.httpClient.post('/admin/add-category', category);
  }

  deleteProductCategory(categoryId: any) {
    return this.httpClient.delete(`admin/delete-category/${categoryId}`);
  }

  getCustomers() {
    return this.httpClient.get('/admin/customers');
  }

  getOrders() {
    return this.httpClient.get('/admin/orders');
  }

  addProduct(product: any) {
    return this.httpClient.post('/admin/add-product', product);
    console.log(product);
  }

  updateProduct(product: any) {
    return this.httpClient.put('/admin/update-product', product);
  }

  uploadImg(data:any){
    return this.httpClient.post('/admin/upload',data);
  }
}
