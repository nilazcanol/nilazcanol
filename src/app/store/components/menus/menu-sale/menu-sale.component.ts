import { Component, OnInit } from '@angular/core';
import { salesMenu } from 'src/app/store/interfaces/menu/salesMenu.interface';

@Component({
  selector: 'app-menu-sale',
  templateUrl: './menu-sale.component.html',
  styles: [
  ]
})
export class MenuSaleComponent implements OnInit {

  constructor() { }

  menuList!: salesMenu[]

  ngOnInit(): void {
   
    this.menuList = [
        { 
            label: 'New', 
            class: 'pi pi-plus  me-1 ', 
            routerLink:'/store/sales/new',
            classActive:"active"
        },
        { 
            label: 'Shopping cart', 
            class: 'pi pi-book  me-1 ', 
            routerLink:'/store/sales/shopping-cart',
            classActive:"active"
        },        
        { 
            label: 'History', 
            class: 'pi pi-book  me-1 ', 
            routerLink:'/store/sales/history',
            classActive:"active"
        }
    ]
  }

}
