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
		private messageService: MessageService
	) {}

	@Input('userInput') userInput?: User;
	@Output('userNew') userNew: EventEmitter<User> = new EventEmitter();
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
		this.userService.saveProduct(this.myFormUser.value).subscribe(
			(res) => {
				this.showLoading = false;
				this.messageService.add({
					severity: 'success',
					summary: res.msg,
					detail: '',
				});
				this.productWasSaved = true;
				this.Restoreform();
				this.userNew.emit(res.user);
			},
			(err) => {
				this.showLoading = false;
				this.messageService.add({
					severity: 'error',
					summary: err.error.msg,
					detail: '',
				});
			}
		);
	}
}
