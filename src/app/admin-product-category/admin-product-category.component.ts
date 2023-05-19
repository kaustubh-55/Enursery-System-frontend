import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-product-category',
  templateUrl: './admin-product-category.component.html',
  styleUrls: ['./admin-product-category.component.css']
})
export class AdminProductCategoryComponent {

  productCategories: any;
  productCategoryName: any
  productCategoryId: any;

  isAddMode = true;

  toggleMode() {
    this.isAddMode = !this.isAddMode;
    this.productCategoryId = null;
    this.productCategoryName = '';
  }

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.adminService.getProductCategories().subscribe((data: any) => {
      console.log(data)
      this.productCategories = data;
    });
  }

  addCategory() {
    this.adminService.addProductCategory(this.productCategoryName).subscribe((data: any) => {
      this.ngOnInit();
    })
  }

  updateProductCategory(category: any) {
    this.productCategoryId = category.productCategoryId;
    this.productCategoryName = category.productCategoryName;
    this.isAddMode = false;
  }

  updateCategory() {
    const c = {
      productCategoryId: this.productCategoryId,
      productCategoryName: this.productCategoryName
    }

    this.adminService.updateCategory(c).subscribe((data: any) => {
      this.ngOnInit();
      this.isAddMode = true;
    });
  }

  deleteProductCategory(categoryId: any) {
    this.adminService.deleteProductCategory(categoryId).subscribe((data: any) => {
      this.ngOnInit();
    });
  }
}
