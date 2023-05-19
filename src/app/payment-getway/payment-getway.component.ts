import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payment-getway',
  templateUrl: './payment-getway.component.html',
  styleUrls: ['./payment-getway.component.css'],
})
export class PaymentGetwayComponent {
  paymentHandler: any = null;
  @Input() totalAmount: any;
  @Input() customerId: any;

  ngOnInit() {
    this.invokeStripe();
  }

  constructor(private cartService: CartService, private router: Router) {}

  placeOrder() {
    this.cartService
      .placeOrder(this.customerId, 'Online Payment', this.totalAmount)
      .subscribe((data: any) => {
        console.log(data);
      });
    localStorage.removeItem('cart');
    this.router.navigateByUrl('/');
    Swal.fire('Successfull...', 'Order Place succesfully!', 'success');
  }

  makePayment() {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Mn3fZSE1t2gdFb2tBVRPavR59vIiASJdmPUiUOR88V3pGLXydFmGmI2wOGmul8D65uAP5jyGGrRu6NOTCgCvrf300yS2QOV4Y',

      locale: 'auto',
      token: (stripeToken: any) => {
        console.log(stripeToken.card);
        
        this.placeOrder();
      }, 
    });

    paymentHandler.open({
      name: 'E-Nursery',
      description: 'E-commerce site',
      amount: this.totalAmount * 100,
      currency: 'INR',
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      window.document.body.appendChild(script);
    }
  }
}
