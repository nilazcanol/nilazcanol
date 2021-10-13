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
            label: 'Product', 
            icon: 'pi pi-th-large  me-2 ', 
            routerLink:'/store/sales',
            routerLinkActiveOptions:"active"
        },
        { 
            label: 'Shopping cart', 
            icon: 'pi pi-shopping-cart me-2 ', 
            routerLink:'/store/sales/shopping-cart',
            routerLinkActiveOptions:"active"
        }
    ]
  }

}
