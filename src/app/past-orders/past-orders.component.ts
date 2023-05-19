import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent {
  customer: any;
  orders: any;

  ngOnInit() {
    this.customer = localStorage.getItem("user");
    this.customer = JSON.parse(this.customer);
    this.getOrders(this.customer.customerId);
  }

  constructor(private customerService: CustomerService) { }


  getOrders(customerId: any) {
    this.customerService.getOrders(customerId).subscribe((data: any) => {
      console.log(data);
      this.orders = data;
    })
  }

}
