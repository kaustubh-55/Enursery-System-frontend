import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminProductCategoryComponent } from './admin-product-category/admin-product-category.component';
import { CartComponent } from './cart/cart.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ProductsComponent } from './products/products.component';

import { SignupComponent } from './signup/signup.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: SingleProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'place-order', component: PlaceOrderComponent },
  { path: 'update-customer', component: CustomerUpdateComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-product-category', component: AdminProductCategoryComponent },
  { path: 'admin-show-customers', component: AdminCustomerComponent },
  { path: 'admin-show-orders', component: AdminOrderComponent },
  { path: 'admin-update-product/:id', component: UpdateProductComponent },
  { path: 'orders', component: PastOrdersComponent },
  { path: 'admin-navbar', component: AdminNavbarComponent },
  { path: 'admin-homepage', component: AdminHomepageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
