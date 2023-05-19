import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent {

  orders: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.adminService.getOrders().subscribe((data: any) => {
      console.log(data)
      this.orders = data;
    });
  }

}


