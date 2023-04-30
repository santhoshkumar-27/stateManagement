import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/auth/state/auth.interface';
const userKey = 'user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  timeoutId!: NodeJS.Timeout;
  constructor(
    private http: HttpClient,
  ) { }

  loginUser(userName: string, password: string): Observable<any> {
    return this.http.get('http://localhost:3000/loginUser')
  }
  signUpUser(userName: string, password: string): Observable<any> {
    return this.http.get('http://localhost:3000/signUpUser')
  }
  setUserInLocal(user: {userName: string, password: string}): void {
    localStorage.setItem(userKey, JSON.stringify(user));

    this.timeoutId = setTimeout(() => {
      // call auto logout function or refresh token
    }, 30000)
  }
  getUserFromLocal(): Login | null {
    let user: any =  localStorage.getItem(userKey);
    if (user) {
      user = JSON.parse(user);
      return user;
    }
    return null;
  }
  getUserClear(): void {
    localStorage.clear();
  }
}
