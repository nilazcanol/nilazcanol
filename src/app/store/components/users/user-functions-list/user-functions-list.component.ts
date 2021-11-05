import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-functions-list',
  templateUrl: './user-functions-list.component.html',
  styleUrls: ['./user-functions-list.component.css']
})
export class UserFunctionsListComponent implements OnInit {

  constructor() { }
  listFuntion!: string[];

  ngOnInit(): void {
    this.listFuntion = [
      'Create User',
      'See detail',
      'Edit user',
      'Remove user',
      'Search for the name'
  ]
  }

}
