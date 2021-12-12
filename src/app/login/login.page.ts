import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading:boolean=false
  loginForm:FormGroup;
  authenticated:boolean=true;
  constructor(private authService:AuthService,
    private router:Router) { }
  userInfo:any[]=[];
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
  onSubmit(){
    this.authenticated = true;
    this.loading= true;
    this.authService.login(this.loginForm.value).subscribe(result=>{
      if(result ==="success")
        this.router.navigate(['/tabs/home'])
      else
        this.authenticated = false

        this.loading= false;
    })
  }
}
