import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  themeLink = document.querySelector('#theme');

  ngOnInit(): void {
    const theme = localStorage.getItem('theme')|| './assets/Css/Themes/darkCian.css';
    this.themeLink?.setAttribute('href',theme);
  }

}
