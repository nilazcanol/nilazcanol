import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styles: [`
    
    `],
})
export class LoginComponent implements OnInit {
	
    constructor(
        private fb: FormBuilder,
        private authService: AuthService
    ) {}

    loginForm!: FormGroup;

	ngOnInit(): void {
        this.loginForm = this.fb.group({
			email   : ['', [
                    Validators.email,
                    Validators.required
                ]
            ],
			password: ['vewvew', [
                    Validators.required, 
                    Validators.minLength(6)
                ]
            ],
		});
        
    }

    login(){
        const email     = this.loginForm.controls['email'].value;
        const password  = this.loginForm.controls['password'].value;
        this.authService.login(email, password).subscribe(res =>{
            console.log(res);
        })
    }

    fieldIsValid(campo: string) {
		return (
			this.loginForm.controls[campo].errors &&
			this.loginForm.controls[campo].touched
		);
	}

  
}
