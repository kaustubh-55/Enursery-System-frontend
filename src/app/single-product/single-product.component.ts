import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
  id: any;
  product: any;

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService, private cartService: CartService) {

  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    this.getProductById(this.id);
    console.log(this.id);
  }


  getProductById(id: any) {
    this.productService.getProductById(id).subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
    });
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}
