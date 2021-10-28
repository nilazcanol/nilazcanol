import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateLoginComponent } from './components/template-login/template-login.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
    {
        path:'',
        component:TemplateLoginComponent,
        children:[
            {path:'login',component:LoginComponent},
            {path:'register',component:RegisterComponent},
            {path:'**',redirectTo:'login'}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
