import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomerService } from "../services/customer.service";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private customerService: CustomerService, private router: Router) {

  }
  ngOnInit(): void {

  }

  name: any;
  email: any;
  phoneNumber: any;
  address: any;
  password: any;
  confirmPassword: any;

  onSignup(signupForm: any) {
    this.customerService.signup(signupForm).subscribe((response) => {
      if (signupForm != null) {
        Swal.fire('Successfull...', 'User Signup succesfully!', 'success')
        this.router.navigateByUrl("login");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops... SignUp failed',
          text: 'Something went wrong!'
        });
      }
    },
    (error: HttpErrorResponse) => {
            if (error.status === 500) {
              Swal.fire({
                icon: 'error',
                title: 'Oops... SignUp failed',
                text: 'Account already existed!!!'
              });
              this.router.navigateByUrl("login");
            }
          });
  }
}