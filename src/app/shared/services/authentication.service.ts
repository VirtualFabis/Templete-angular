import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { HttpClient } from '@angular/common/http';
import { Login } from '../class/login';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  User: User = new User();

  constructor(private Http: HttpClient) { }

  doLogin(body: Login) {
    return this.Http.post(`${environment.urlLogin}User/GetUser`, body)
    .pipe(
      map((response: User) => {
        return response;
      })
    );
  }

  setUser(user: User) {
    this.User = user;
    localStorage.setItem('user', JSON.stringify(this.User));
  }

  getUser(): User {
    if (localStorage.getItem('user')) {
      return this.User = JSON.parse(localStorage.getItem('user'));
    } else {
      const user = new User();
      user.USER_IDROLE = 0;
      return user;
    }
    return;
  }
}
