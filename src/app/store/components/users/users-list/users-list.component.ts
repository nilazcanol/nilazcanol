import { MessageService } from 'primeng/api';
import { User } from './../../../interfaces/user/user.interface';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  providers: [MessageService],
  styles: [
  ]
})
export class UsersListComponent implements OnInit {

  constructor(
    private userService:UsersService,
    private messageService: MessageService,
  ) { }

  listUsers: User[] = [];

  showLoading: boolean = true;

  ngOnInit(): void {
    this.showLoading= true;
    this.userService.getAllUser().subscribe( res => {
      this.listUsers =res.users;

      this.showLoading= false;
    },(err => {
      this.showLoading= false;
      this.messageService.add({
        severity: 'error',
        summary: `${err.status}: ${err.statusText}`,
        detail: err.error.msg ,
    });

    }))
  }

}
