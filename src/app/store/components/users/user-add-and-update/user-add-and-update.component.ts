import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Rol } from 'src/app/store/interfaces/rol/rol.interface';
import { User } from 'src/app/store/interfaces/user/user.interface';
import { UsersService } from 'src/app/store/services/users.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
	selector: 'app-user-add-and-update',
	templateUrl: './user-add-and-update.component.html',
	providers: [MessageService],
	styles: [],
})
export class UserAddAndUpdateComponent implements OnInit, OnChanges {
	constructor(
		private fb: FormBuilder,
		private userService: UsersService,
	) {}

	@Input('userInput') userInput?: User;
	@Output('userNew') userNew: EventEmitter<User> = new EventEmitter();
	@Output('userUpdated') userUpdated: EventEmitter<User> = new EventEmitter();
	@Input('isNewUser') isNewUser!: boolean;

	myFormUser!: FormGroup;

	productWasSaved: boolean = false;
	showLoading: boolean = false;
	listRole: Rol[] = [];

	ngOnInit(): void {
		this.myFormUser = this.fb.group({
			uid: [''],
			email: ['', Validators.email],
			password: ['', Validators.required],
			name: ['', Validators.required],
			rol: ['', Validators.required],
		});

		this.listRole = [
			{ name: 'ADMIN', _id: 'ADMIN_ROLE' },
			{ name: 'EMPLOYEE', _id: 'EMPLOYEE_ROLE' },
		];
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.myFormUser !== undefined) {
			this.myFormUser.controls['uid'].setValue(this.userInput?.uid);
			this.myFormUser.controls['email'].setValue(this.userInput?.email);
			this.myFormUser.controls['name'].setValue(this.userInput?.name);
			this.myFormUser.controls['rol'].setValue(this.userInput?.rol);
		}

        if(this.isNewUser == true){
            this.Restoreform();
        }
	}

	fieldIsValid(campo: string) {
		return (
			this.myFormUser.controls[campo].errors &&
			this.myFormUser.controls[campo].touched
		);
	}

	Restoreform() {
		this.myFormUser.reset();
		this.productWasSaved = false;
	}

	saveUser() {
		this.showLoading = true;
		this.userService.saveUser(this.myFormUser.value).subscribe(
			(res) => {
                this.Restoreform();
				this.showLoading = false;
                this.showToast('Success',res.msg,'success');				
				this.productWasSaved = true;
				this.Restoreform();
				this.userNew.emit(res.user);
			},
			(err) => {
                this.Restoreform();
				this.showLoading = false;
                this.showToast('Error',err.error.msg,'error');			
			}
		);
	}
	updateUser() {
		this.showLoading = true;
		this.userService.updateUser(this.myFormUser.value).subscribe(
			(res) => {
				this.showLoading = false;
                this.showToast('Success',res.msg,'success');				
				this.productWasSaved = true;
				this.Restoreform();
				this.userUpdated.emit(res.user);
			},
			(err) => {
                this.Restoreform();
				this.showLoading = false;
                console.log(err);
                if (err.status == 400 || err.status == 404) {
                    this.showToast(
                        'Error',
                        'Check the data entered: In case the error persists, contact the technical support.',
                        'error'
                    );
                }
                if (err.status == 500) {
                    this.showToast(
                        'Error',
                        'HTTP server internal error',
                        'error'
                    );
                }else{
                    this.showToast('Error:'+err.statusText,err.message,'error',3000);			
                }
			}
		);
	}
    showToast(
		title: string,
		detai: string,
		icon: SweetAlertIcon,
		timeOut: number = 2000
	) {
		Swal.fire(title, detai, icon);
		setInterval(() => {
			Swal.close();
		}, timeOut);
	}
}
