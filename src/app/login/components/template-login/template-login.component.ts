import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-login',
  templateUrl: './template-login.component.html',
  styles: [
      `
        .rounded-container{
          border-radius:20px
      }
      `
  ]
})
export class TemplateLoginComponent implements OnInit {

    constructor(private renderer2:Renderer2){}

  
    ngAfterViewInit(): void {
        this.change()
    }


  
    @ViewChild('loginPage') loginPageContainer!: ElementRef;

    ngOnInit(): void {
  }


  change():void{
      const asLoginPageContainer  = this.loginPageContainer.nativeElement;
      this.renderer2.setStyle(asLoginPageContainer,'background','#212529');
      let heightWindow = document.documentElement.clientHeight.toString()+'px';
      this.renderer2.setStyle(asLoginPageContainer,'height',heightWindow);
      let widthWindow = document.documentElement.clientWidth.toString()+'px';
      this.renderer2.setStyle(asLoginPageContainer,'width',widthWindow);
}

}
