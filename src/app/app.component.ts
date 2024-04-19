import {AfterContentInit, Component, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterContentInit , OnInit{

  title = 'Portafolio';
  @Output() public loaded: boolean = false;

  ngOnInit(): void {
    // addIcons({contrast, contrastOutline, schoolOutline, copyOutline,
    //   sendOutline, mailOutline, logoGithub, arrowRedoOutline, logoLinkedin})
  }

  ngAfterContentInit(): void {
    //this.delay(2000).then(r => this.loaded = true)
    this.loaded = true // todo no funciona bien
  }
}

