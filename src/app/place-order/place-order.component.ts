import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  cartProducts: any;
  customerId: any;
  paymentMode: any;
  totalBill: any;


  constructor(private cartService: CartService, private router:Router) { }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCart();
    this.customerId = localStorage.getItem("user");
    this.customerId = JSON.parse(this.customerId).customerId;
  }

  calculateTotal(): number {
    let total = 0;
    for (let p of this.cartProducts) {
      total += p.productPrice * p.productQuantity;
    }
    this.totalBill=total;
    return total;
  }

  placeOrder() {
    console.log(this.cartProducts);
    this.cartService.placeOrder(this.customerId,this.paymentMode,this.totalBill).subscribe(
      (result: any) => {
      console.log(result);
      }
    );
    Swal.fire('Successfull...', 'Order Place succesfully!', 'success')
    localStorage.removeItem("cart");
    this.router.navigateByUrl("/");
  }


}
