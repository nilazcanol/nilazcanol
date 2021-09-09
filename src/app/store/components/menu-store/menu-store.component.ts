import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu-store',
  templateUrl: './menu-store.component.html',
  styles: [
  ]
})
export class MenuStoreComponent implements OnInit {

  constructor() { 
    this.items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', routerLink:'/store/home',routerLinkActiveOptions:"active"},
        {label: 'Products',  icon: 'pi pi-fw pi-book', routerLink:'/store/products'},
        {label: 'Categories', icon: 'pi pi-fw pi-list', routerLink:'/store/categories'},
    ];
  }


  items!: MenuItem[
      
  ];

  ngOnInit() {
      
  }

}
