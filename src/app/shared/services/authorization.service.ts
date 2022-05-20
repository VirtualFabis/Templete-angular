import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements CanActivate {
  private PERMISSION: string[] = [];

  constructor(public router: Router, private auth: AuthenticationService) {
    this.GetPermissions();
  }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.getUser().USER_IDROLE === 0) {
      this.router.navigate(['authentication/login']);
    } else {
      const component: string = next.routeConfig.path;
      const index: number = this.PERMISSION.indexOf(component);

      if (index >= 0 || component === '') {
        return true;
      } else {
        return false;
      }
    }
  }

  getMenu(RolUser: number) {
    let ruta: string;
    let permission: string[] = [];

    switch (RolUser) {
      case 0:
        permission = ['schedule'];
        ruta = 'menu/schedule';
        this.SetPermission(permission);
        break;
      case 1:
        permission = ['schedule'];
        ruta = 'menu/schedule';
        this.SetPermission(permission);
        break;
    }
    return ruta;
  }

  SetPermission(permission: string[]) {
    this.PERMISSION = permission;
    localStorage.setItem('data-permission', JSON.stringify(this.PERMISSION));
  }

  GetPermissions() {
    if (localStorage.getItem('data-permission')) {
      this.PERMISSION = JSON.parse(localStorage.getItem('data-permission'));
    } else {
      this.PERMISSION = [];
    }

    return this.PERMISSION;
  }
}
