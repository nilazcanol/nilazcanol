import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { TemplateLoginComponent } from './components/template-login/template-login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    TemplateLoginComponent,
    RegisterComponent,
],
imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
