import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent {
  category1: any;
  productId!:any;
  productName!: string;
  productDescription!: string;
  productPrice!: string;
  productImg!: File;
  productQuantity!: any;
  productCategoryId!: number;

  id: any;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private productService: ProductService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id).subscribe((data: any) => {
    
      this.productId = data.productId;
      
      this.productName = data.productName;

      this.productDescription = data.productDescription;

      this.productPrice = data.productPrice;

      this.productImg = data.productImg;

      this.productQuantity = data.productQuantity;

      this.productCategoryId = data.productCategoryId;
      this.getCategories();
    });
  }

  getCategories() {
    this.adminService.getProductCategories().subscribe((data: any) => {
      this.category1 = data;
      console.log(this.category1);
    });
  }

  onImageChange(event: any) {
    console.log(event.target.files[0]);
    this.productImg = event.target.files[0];
  }

  onSubmit(formData: any) {
    formData.productCategoryId = parseInt(formData.productCategoryId);
    this.adminService.updateProduct(formData).subscribe((data: any) => {});
    alert('Product Updated successfully');
    console.log(formData);
    this.router.navigate(['/']);
  }
}
