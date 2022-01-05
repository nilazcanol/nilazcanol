import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: [
  ]
})
export class SettingsComponent implements OnInit {

  themeLink = document.querySelector('#theme')
  constructor() { }

  ngOnInit(): void {
  }

  selectTheme(theme:string){
    const url = `./assets/Css/Themes/${theme}.css`;
    localStorage.setItem('theme',url);
    this.themeLink?.setAttribute('href',url);
  }
}
