import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const Loginurl = "http://portal.techinco.net/API/Service.asmx/Get_User";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  CheckUserPass(data:any){
    let request = new HttpRequest('POST',Loginurl,data)
   return this.http.request(request)
}
}
