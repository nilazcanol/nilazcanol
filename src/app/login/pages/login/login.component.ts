import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styles: [``],
})
export class LoginComponent implements OnInit {
	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router,
	) {
		
	}

	loginForm!: FormGroup;

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			email: ['', [Validators.email, Validators.required]],
			password: [
				'',
				[Validators.required, Validators.minLength(6)],
			],
		});
	}

	login() {
		const email = this.loginForm.controls['email'].value;
		const password = this.loginForm.controls['password'].value;
		this.authService.login(email, password).subscribe((resp) => {
			if (resp.hasOwnProperty('error')) {
			      swal.fire('Error',resp.error.msg,'error');
                  setInterval(()=>{
                      swal.close();
                  },2000)
			} 
            if(resp ==true) {
				
                swal.fire('Success','Welcome','success');
                setInterval(()=>{
                    swal.close();
                },2000)
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
