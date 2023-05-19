import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: any;
  cart: any;
  existingItem: any;
  searchTerm: any = '';

  selectedFilterValue: any;
  category1: any;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private customerService: CustomerService,
    private adminService: AdminService
  ) {
    
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
   
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.productService
      .searchProducts(searchTerm)
      .subscribe((products: any) => {
        this.products = products;
      });
  }

  filterProduct() {
    this.productService.filterProduct(this.selectedFilterValue).subscribe((products: any) => {
        this.products = products;
      });
  }

  getCategories() {
    this.customerService.getcategories().subscribe((data: any) => {
      console.log(data);
      this.category1 = data;
      console.log(this.category1);
    });
  }
 
}
