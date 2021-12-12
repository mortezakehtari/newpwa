import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { LoginService } from './login.service';


@Injectable()
export class AuthService {
    constructor(private loginService:LoginService){
        if(localStorage.getItem('token')){
            this.loggedIn=true;
        }
    }
    loggedIn = false;
    responeLogin:any[];
    isAuthenticated(){
        const promise = new Promise(
            (resolve,reject)=>{
                        resolve(this.loggedIn);
            }
        )
        return promise;
    }

   public login(user:any):Observable<any>{
        const myObservable = new Observable(observer=>{
                this.loginService.CheckUserPass(user).subscribe(
                    (response)=>{
                      if(response['body']){
                        if(JSON.parse(response['body']?.d).UserInfo){
                          observer.next("success")
                          this.loggedIn=true;                          
                        }
                        else{
                          observer.next("fail")
                          this.loggedIn=false;  
                        }
                      }
                       
                        // if(response["token"])
                        // {
                        //     observer.next( "logged in successfully")
                        //     this.loggedIn=true;
                        //     localStorage.setItem('token',response['token'])
                        // }
                        //   else{
                        //     this.loggedIn=false;
                        //     observer.next( "something is wrong!")
                        //   }
                    },(err)=>{
                        observer.next(err['error'])
                    })           
        })
        return myObservable;
    }

    logout(){
        this.loggedIn=false;
        localStorage.removeItem('token');
    }
}