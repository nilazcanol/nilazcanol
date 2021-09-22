import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-sale',
  templateUrl: './menu-sale.component.html',
  styles: [
  ]
})
export class MenuSaleComponent implements OnInit {

  constructor() { }

  menuList!: MenuItem[]

  ngOnInit(): void {
   
    this.menuList = [
        { 
            label: 'Home', 
            icon: 'pi pi-home  me-2 ', 
            routerLink:'/store/home',
            routerLinkActiveOptions:"active"
        },
    ]
  }

}
