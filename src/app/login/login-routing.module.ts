import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateLoginComponent } from './components/template-login/template-login.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: TemplateLoginComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: 'login' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
