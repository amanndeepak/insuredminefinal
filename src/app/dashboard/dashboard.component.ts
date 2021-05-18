import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userLogged: string;
 customerFromUser;
 ImageFromUser;
 Image2FromUser;
 customer: string;
 images:string;
 images2:string;
  constructor(private auth: AuthserviceService , private router:Router) {
    if(this.auth.isAdmin)[
      this.userLogged = this.auth.username
    ]
   }

  ngOnInit(): void {
    this.customerFromUser = this.auth.customerFromObject[0];
    this.customer = this.auth.customerNormalFromService;

    this.ImageFromUser = this.auth.ImageFromObject[0];
    this.images = this.auth.ImageNormalFromService;

    this.Image2FromUser = this.auth.Image2FromObject[0];
    this.images2 = this.auth.Image2NormalFromService;
    
  }


  logout() {
    this.auth.logoutUser();
    this.router.navigate(['home']);
  }
 


}
