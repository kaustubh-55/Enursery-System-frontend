import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any;
  existingItem: any
  constructor(private httpClient: HttpClient, private toasterService: ToastrService) { }

  addToCart(product: any) {
    this.cart = localStorage.getItem('cart');
    this.cart = JSON.parse(this.cart) || [];
    this.existingItem = this.cart.find((item: any) => {
      return item.productId == product.productId
    });

    if (this.existingItem) {
      this.existingItem.productQuantity++;
    } else {
      this.cart.push({
        productId: product.productId,
        productName: product.productName,
        productPrice: product.productPrice,
        productImg: product.productImg,
        productQuantity: 1,
        productCategoryId: product.productCategoryId,
        productDescription: product.productDescription
      });
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.toasterService.success('Product added to cart!');
  }

  getCart() {
    this.cart = localStorage.getItem('cart');
    console.log(JSON.parse(this.cart))
    return this.cart = JSON.parse(this.cart);

  }

  placeOrder(customerId: any, paymentMode: any, totalBill:any) {
    console.log(customerId, paymentMode);
    return this.httpClient.get(`/customer/place-order/${customerId}/${paymentMode}/${totalBill}`);
  }

}
