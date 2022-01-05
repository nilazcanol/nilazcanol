import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'storeApp';


  themeLink = document.querySelector('#theme');
 

  ngOnInit(): void {
    const theme = localStorage.getItem('theme') || './assets/Css/Themes/darkBlue.css';
    this.themeLink?.setAttribute('href',theme!);
  }

}
