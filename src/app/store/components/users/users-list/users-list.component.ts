import { MessageService } from 'primeng/api';
import { User } from './../../../interfaces/user/user.interface';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';

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
		this.showLoading = true;
		this.userService.getAllUser().subscribe(
			(res) => {
				this.listUsers = res.users;

				this.showLoading = false;
			},
			(err) => {
				this.showLoading = false;
				this.messageService.add({
					severity: 'error',
					summary: `${err.status}: ${err.statusText}`,
					detail: err.error.msg,
				});
			}
		);
	}

	addToUsersList(user: User) {
		this.listUsers.push(user);
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
}
