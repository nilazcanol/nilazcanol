import { MessageService } from 'primeng/api';
import { User } from './../../../interfaces/user/user.interface';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	providers: [MessageService],
	styles: [],
})
export class UsersListComponent implements OnInit {
	constructor(
		private userService: UsersService,
		private messageService: MessageService
	) {}

	listUsers: User[] = [];

	showLoading: boolean = true;

	userSelected?: User;
	isNewUser: boolean = true;

	ngOnInit(): void {
        this.userSelected = {
			email: '',
			rol: '',
			name: '',
			state: true
			
		};
		this.showLoading = true;
		this.userService.getAllUser().subscribe(
			(res) => {
				this.listUsers = res.users;
				this.showLoading = false;
			},
			(err) => {
				this.showLoading = false;
				this.showToast('Oh! there was a problem', err, 'error');
			}
		);
	}

	addToUsersList(user: User) {
		this.listUsers.push(user);
	}

	deleteListUser(user: User) {
        this.listUsers = this.listUsers.filter(
			(item) => item.uid !== user.uid
		);
	}

	addToUserListUpdated (user: User) {
        const userUpdated = this.listUsers.findIndex(
			(el) => el.uid == user.uid
		);
		let newAllUser = [...this.listUsers];
		newAllUser[userUpdated] = {
			...newAllUser[userUpdated],
			name: user.name,
			email: user.email,
			rol: user.rol,
			state: user.state,
			password: user.password,
			uid: user.uid,
		};

		this.listUsers = newAllUser;
	}

	selectedUser(isNew: boolean, user?: User) {
		if (isNew == false) {
			if (user !== undefined) {
				this.userSelected = user!;
				this.isNewUser = isNew;
			}
		}else{
            this.isNewUser = isNew;
           
            
        }
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
