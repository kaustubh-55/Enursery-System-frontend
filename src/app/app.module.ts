import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProductCategoryComponent } from './admin-product-category/admin-product-category.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { PaymentGetwayComponent } from './payment-getway/payment-getway.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    SingleProductComponent,
    CartComponent,
    PlaceOrderComponent,
    CustomerUpdateComponent,
    SearchProductComponent,
    AddProductComponent,
    AdminDashboardComponent,
    AdminProductCategoryComponent,
    AdminCustomerComponent,
    AdminOrderComponent,
    PaymentGetwayComponent,
    UpdateProductComponent,
    PastOrdersComponent,
    AdminNavbarComponent,
    AdminHomepageComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    GooglePayButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
