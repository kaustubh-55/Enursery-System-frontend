import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any = [];
  isLogin: any = false;
  constructor(private cartService: CartService) { }



  ngOnInit() {
    this.isLogin = localStorage.getItem("isLogin");
    this.isLogin = JSON.parse(this.isLogin);
    this.loadCart();
  }

  loadCart() {
    this.cart = localStorage.getItem('cart');
    this.cart = JSON.parse(this.cart) || [];
    console.log(this.cart);
  }

  removeFromCart(item: any) {
    const index = this.cart.findIndex((cartItem: any) => cartItem.productId === item.productId);
    if (index !== -1) {
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
  }

  increment(item: any) {
    item.productQuantity++;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    console.log("sub")
  }

  decrement(item: any) {
    if (item.productQuantity > 1) {
      item.productQuantity--;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}