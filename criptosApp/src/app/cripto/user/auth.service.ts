import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = '../assets/users.json';

  authUser(user: User, recordar: boolean): Observable<User>{
    return this.http.get<User>(this.url)
    .pipe(map(u => {
      u['passwd']= user.passwd;
      localStorage.setItem('token',u.token || '');
      if(recordar) {
        localStorage.setItem('login',u.login);
        console.log(u.login);

      }
      else {
        localStorage.removeItem('login');
      }
      return u;}));
  }

  isAuth(): boolean{
    if (localStorage.getItem('token')){
      console.log(localStorage.getItem('token'));
      return true;
    }
    else return false;
  }

  logOut(): void{
  localStorage.removeItem('token');
  }
}
