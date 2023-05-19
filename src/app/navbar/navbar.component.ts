import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: any = false;
  isAdminLogin: any = false;
  isLogin1:any=false;
  isSignup:any;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.isLogin = localStorage.getItem("isLogin");
    this.isLogin = JSON.parse(this.isLogin);
    this.isAdminLogin = localStorage.getItem("isAdminLogin");
    this.isAdminLogin = JSON.parse(this.isAdminLogin);
  }

  logout() {
    console.log(1);
    if (this.isAdminLogin == true) {
      console.log(2);
      localStorage.removeItem("admin");
      localStorage.removeItem("isAdminLogin");
      
    }
    else {
      console.log(3);
      localStorage.removeItem("user");
      localStorage.removeItem("isLogin");
      
    }
    this.router.navigateByUrl("login");



  }


}
