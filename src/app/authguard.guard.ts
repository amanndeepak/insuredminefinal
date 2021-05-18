import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
 
  
    constructor(private Authguardservice: AuthserviceService, private router: Router) {}
    canActivate(): boolean {
      if(this.Authguardservice.isLogginedTrue && this.Authguardservice.isAdmin){
        return true;
      }
       return false;
    }
    
  }

