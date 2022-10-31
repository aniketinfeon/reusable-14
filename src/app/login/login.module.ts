import { LoginService } from './services/login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { NestedFormComponent } from './component/nested-form/nested-form.component';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';


@NgModule({
  declarations: [
    ForgetPasswordComponent,
    SignInComponent,
    SignUpComponent,
    NestedFormComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
