import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	providers: [MessageService],
	styles: [``],
})
export class LoginComponent implements OnInit {
	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router,
		private messageService: MessageService
	) {}

	loginForm!: FormGroup;

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			email: ['test1@gmail.com', [Validators.email, Validators.required]],
			password: [
				'test1_pass',
				[Validators.required, Validators.minLength(6)],
			],
		});
	}

	login() {
		const email = this.loginForm.controls['email'].value;
		const password = this.loginForm.controls['password'].value;
		this.authService.login(email, password).subscribe((resp) => {
			if (resp.hasOwnProperty('error')) {
				this.messageService.add({
					severity: 'error',
					summary: resp.error.msg,
					detail: '',
				});
			} 
            if(resp ==true) {
				this.messageService.add({
					severity: 'success',
					summary: "Welcome!",
					detail: '',
				});
				this.router.navigateByUrl('/store/home');
			}
		});
	}

	fieldIsValid(campo: string) {
		return (
			this.loginForm.controls[campo].errors &&
			this.loginForm.controls[campo].touched
		);
	}
}
