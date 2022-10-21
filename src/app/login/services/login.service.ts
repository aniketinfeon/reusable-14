import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient ) { }
  postRegister(data:any){
    return this.http.post('/register',data)
  }

  postEducation(data:any){
    return this.http.post('/education',data)
  }
}
