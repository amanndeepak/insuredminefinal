import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user =[
         {userName:'abc@media.com',
          password:'abc123',
          Custname:'Tom' ,
          Image:"/assets/images/mrtom1.jpg" ,
          Image2:"/assets/images/mrtom2.jpg" 
         }
         ,
         {userName:'def@media.com',
          password:'def123' ,
          Custname:'dick',
          Image:"/assets/images/mrdick1.jpg",
          Image2:"/assets/images/mrdick2.jpg" 
         } 
       ]
  isLogginedTrue = false;
  isAdmin = false;
  username= '';
 
   
  customerFromObject= [];
  customerNormalFromService='';
 
  ImageFromObject= [];
  ImageNormalFromService='';
  Image2FromObject= [];
  Image2NormalFromService='';
 
  
 
   constructor() { }
   
 

   public isLoginedAdmin(userName: string, password: string){
     if (this.user.map(obj => obj.userName).includes(userName) && this.user.map(obj => obj.password).includes(password)){
       this.customerFromObject= this.user.filter(x=>x.userName === userName).map(x=>x.Custname) ;
       this.ImageFromObject=this.user.filter(y =>y.userName === userName).map(y=>y.Image);
       this.Image2FromObject=this.user.filter(z =>z.userName === userName).map(z=>z.Image2);
       this.isLogginedTrue = true;
        this.isAdmin = true;
        this.username = userName;
 
     } else {
       this.isLogginedTrue = false;
       this.isAdmin = false;
     }
   
 
   }

   logoutUser(): void{
    this.isLogginedTrue = false;
  }
 
 }
 
