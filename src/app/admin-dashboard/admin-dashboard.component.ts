import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  products: any;

  constructor(private productService: ProductService, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  deleteProduct(productId: any) {
    this.adminService.deleteProduct(productId).subscribe((data: any) => {
    });
    this.ngOnInit();
  }
  updateProduct(product: any) {
    this.router.navigateByUrl(`admin-update-product/${product.productId}`);
  }
}
