import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private adminService: AdminService
  ) 
  {

  }

  categories: any;
  category1: any;
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.adminService.getProductCategories().subscribe((data: any) => {
      console.log(data);
      this.category1 = data;
      console.log(this.category1);
    });
  }
  product={}
  productName!: string;
  productDescription!: string;
  productPrice!: string;
  productImg!: File;
  productQuantity!: string;
  productCategoryId!: number;
  selectedFiles: File[] = [];
  imageUrl:any;
  onFileSelected(event: any) {

    this.selectedFiles = event.target.files;
    const formData = new FormData();

    for (const file of this.selectedFiles) {
      formData.append('files', file, file.name);
    }

    this.adminService.uploadImg(formData).subscribe((data: any) => {
      console.log(data);
      this.imageUrl = data.image_url;
    })
  }
  onImageChange(event: any) {
    console.log(event.target.files[0]);
    this.productImg = event.target.files[0];
  }

  onSubmit(formData: any) {
    formData.productCategoryId = parseInt(formData.productCategoryId);
    
        formData.productImg = this.imageUrl;
    this.adminService.addProduct(formData).subscribe((data: any) => {
      console.log(formData);
      console.log(data);
    });
    alert('Product added successfully');
    this.router.navigate(['/']);
  }
}
