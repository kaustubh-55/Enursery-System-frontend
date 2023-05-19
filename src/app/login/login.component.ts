import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: any;
  password: any;
  customer: any;
  user: any;
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  onSubmit(loginDetails: any) {
    this.customer = {
      customerEmail: loginDetails.email.trim(),
      customerPassword: loginDetails.password.trim(),
    };

    if (
      this.customer.customerEmail === 'admin@enursery.com' &&
      this.customer.customerPassword === 'Admin@1234'
    ) {
      localStorage.setItem('admin', JSON.stringify(this.customer));
      localStorage.setItem('isAdminLogin', JSON.stringify(true));
      Swal.fire('Successfull...', 'Admin Login succesfully!', 'success');
      this.router.navigateByUrl('/admin-homepage');
    } 
     else {
      this.customerService.login(this.customer).subscribe((data: any) => {
        if (data !== null) {
          Swal.fire('Successfull...', 'User Login succesfully!', 'success');
          localStorage.setItem('user', JSON.stringify(data));
          localStorage.setItem('isLogin', JSON.stringify(true));
          this.router.navigateByUrl('products');
        } else {
          Swal.fire(
            'Login Failed...',
            'Seems like you are not valid user please Signup first',
            'error'
          );
          this.router.navigateByUrl('signup');
        }
      });
    }
  }
}
