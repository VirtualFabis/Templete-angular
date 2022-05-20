import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { Login } from 'src/app/shared/class/login';
import { User } from 'src/app/shared/class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public userLogin: Login;

  constructor(private fb: FormBuilder, private router: Router,
              private authentication: AuthenticationService, private authori: AuthorizationService) { }

  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
    });
  }

  OnLogin() {
    // this.router.navigate(['/menu/schedule']);
    if (this.form.valid) {
      this.userLogin = new Login();
      this.userLogin.idApp = 63;
      this.userLogin.WIW = this.form.controls.uname.value.toUpperCase().trim();
      this.userLogin.PWD = this.form.controls.password.value.trim();
      // this.authentication.setUser(data);
      this.router.navigate(['/menu/calendario']);
    }
  }
}
