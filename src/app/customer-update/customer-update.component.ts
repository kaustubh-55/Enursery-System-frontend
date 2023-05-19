import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css'],
})
export class CustomerUpdateComponent implements OnInit {
  customer: any;
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.customer = localStorage.getItem('user');
    this.customer = JSON.parse(this.customer);

    console.log(this.customer);
  }

  onSignup(signupForm: any) {
    this.customer.customerId = signupForm.value.customerId;
    this.customer.customerName = signupForm.value.customerName;
    this.customer.customerEmail = signupForm.value.customerEmail;
    this.customer.customerPhone = signupForm.value.customerPhone;
    this.customer.customerAddress = signupForm.value.customerAddress;

    console.log(signupForm.value);
    this.customerService.update(signupForm.value).subscribe((data: any) => {
      Swal.fire(
        'Successfull...',
        'User details update succesfully!',
        'success'
      );
      this.customerService.logout();
      this.router.navigateByUrl('login');
      console.log(data);
    });
  }
}
