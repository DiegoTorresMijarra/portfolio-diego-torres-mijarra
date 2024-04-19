import {AfterContentInit, Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterContentInit {

  title = 'Portafolio';
  @Output() public loaded: boolean = false;

  ngAfterContentInit(): void {
    //this.delay(2000).then(r => this.loaded = true)
    this.loaded = true // todo no funciona bien
  }
}

