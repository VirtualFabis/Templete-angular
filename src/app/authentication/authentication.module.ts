import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AUTHENTICATIONS_ROUTES } from './authentication.routing';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AUTHENTICATIONS_ROUTES),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class AuthenticationModule { }
