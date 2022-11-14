import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/shared/services/authentication.service";
import { AuthorizationService } from "src/app/shared/services/authorization.service";
import { Login } from "src/app/shared/class/login";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public form1: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authentication: AuthenticationService,
    private authori: AuthorizationService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      wiw: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
    });
    this.form1 = this.fb.group({
      wiw: [null, Validators.compose([Validators.required])],
      name: [null, Validators.compose([Validators.required])],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ]),
      ],
      password: [null, Validators.compose([Validators.required])],
    });
  }

  OnLogin() {
    if (this.form.valid) {
      this.authentication.doLogin(this.form.value).subscribe((reponse: any) => {
        if (reponse === "User or password Incorrect") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User or password Incorrect",
          });
        } else {
          this.authentication.setUser(reponse);
          this.router.navigate(["/menu/calendario"]);
        }
      });
    }
  }
  Register() {
    if (this.form1.valid) {
      this.authentication
        .emailVer(this.form1.value.email)
        .subscribe((response: any) => {
          const res = JSON.parse(response.res);
          if (!res.status)
            return Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Email no verificado",
            });
          this.authentication
            .Register(this.form1.value)
            .subscribe((reponse: any) => {
              if (reponse === "Request no inserted") {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Request no inserted",
                });
              } else {
                Swal.fire("Good job!", "Registro completado!", "success");
                this.form1.reset();
              }
            });
        });
    }
  }
}
