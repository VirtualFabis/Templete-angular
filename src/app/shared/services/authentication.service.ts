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
    return this.Http.post(`${environment.urlBase}Login`, body)
    .pipe(
      map((response: User) => {
        return response;
      })
    );
  }
  Register(body: Login) {
    return this.Http.post(`${environment.urlBase}Register`, body)
    .pipe(
      map((response: User) => {
        return response;
      })
    );
  }
  Task(body: any) {
    return this.Http.post(`${environment.urlBase}Task`, body)
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  ListTask(body: any) {
    return this.Http.post(`${environment.urlBase}ListTask`, body)
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  updateTask(body: any){
    return this.Http.post(`${environment.urlBase}UpdateTask`, body)
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  deleteTask(body: any){
    return this.Http.post(`${environment.urlBase}DeleteTask`, body)
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  setUser(user: User) {
    console.log("🚀 ~ file: authentication.service.ts ~ line 35 ~ AuthenticationService ~ setUser ~ user", user)
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
