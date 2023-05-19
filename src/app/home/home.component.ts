import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLogin: any;
  isAdminLogin: any;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.isLogin = localStorage.getItem("isLogin");
    this.isLogin = JSON.parse(this.isLogin);
    this.isAdminLogin = localStorage.getItem("isAdminLogin");
    this.isAdminLogin = JSON.parse(this.isAdminLogin);

    if (this.isAdminLogin == true) {
      this.router.navigateByUrl("/admin-homepage");
    }
  }
}
