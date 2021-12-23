import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent   {
 
  constructor(private router:Router){}

  redirect(page:string){
      this.router.navigateByUrl(page);
  }
}
