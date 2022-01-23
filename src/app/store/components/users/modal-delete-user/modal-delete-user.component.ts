import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/store/interfaces/user/user.interface';
import { UsersService } from 'src/app/store/services/users.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
	selector: 'app-modal-delete-user',
	templateUrl: './modal-delete-user.component.html',
	styles: [],
})
export class ModalDeleteUserComponent {
	constructor(private userService: UsersService) {}

	@Input() userDeleted!: User;
	@Output() userDelete: EventEmitter<User> = new EventEmitter();

	showLoading: boolean = false;


	deleteUser() {
		this.showLoading = true;
		this.userService.deleteUser(this.userDeleted).subscribe(
			(resp) => {
				this.showToast(
					'Success',
					'It was correctly eliminated',
					'success',
					3000
				);
				this.userDelete.emit(resp.user);
				this.showLoading = false;
			},
			(err) => {
				this.showToast('Error', err.message, 'error');
				this.showLoading = false;
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
