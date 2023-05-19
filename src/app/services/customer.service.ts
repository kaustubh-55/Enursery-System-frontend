import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  params: any;
  constructor(private http: HttpClient) {}
  login(customer: any) {
    return this.http.post('/customer/login', customer);
  }
  signup(customer: any) {
    return this.http.post('/customer/sign-up', customer);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('isLogin');
  }

  update(customer: any) {
    return this.http.put('/customer/update-customer', customer);
  }

  getOrders(customerId: any) {
    console.log(customerId);
    return this.http.get(`/customer/orders/${customerId}`);
  }

  getcategories()
  {
    return this.http.get("/customer/categories");
  }
}
