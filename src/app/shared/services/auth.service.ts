import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  loginUser(userName: string, password: string): Observable<any> {
    return this.http.get('http://localhost:3000/loginUser')
  }
  signUpUser(userName: string, password: string): Observable<any> {
    return this.http.get('http://localhost:3000/signUpUser')
  }
}
