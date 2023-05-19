import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent {
  customers: any;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.adminService.getCustomers().subscribe((data: any) => {
      console.log(data)
      this.customers = data;
    });
  }

}
