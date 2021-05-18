import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myform :FormGroup; 
  
  
  constructor(private fb: FormBuilder, private _authSer: AuthserviceService,private router: Router) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(event:any){
    this._authSer.isLoginedAdmin(event.value.username, event.value.password);
   
    if(this._authSer.isLoginedAdmin){
      this.router.navigate(['dashboard'])
    }
    

}

}