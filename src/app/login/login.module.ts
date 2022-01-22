import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeNg/primeng.module';
import { TemplateLoginComponent } from './components/template-login/template-login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
    TemplateLoginComponent,
],
imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    PrimengModule
  ]
})
export class LoginModule { }
